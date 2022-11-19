// noinspection JSJQueryEfficiency

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

import { Sight } from './sight';

function processLink(host: string, link?: string) {
  if (!link) return undefined;
  if (link.includes("redlink=1")) return undefined;
  return host + link;
}

function processImg($: cheerio.CheerioAPI, element: cheerio.Element) {
  let image = $(element).find('a.image>img').attr('src');
  if(image && /\/\d+px[^/]+$/.test(image)) {
    image = image.replace(/(?<=\/)\d+px/, '480px');
  }
  return !image ? undefined : "https:" + image;
}

function processDescription($: cheerio.CheerioAPI, element: cheerio.Element, host: string, column?: number) {
  if(column === undefined) column = 3;
  let query = '+td'.repeat(column).substring(1);
  let description=$(element).find(query).first().html()?.trim();
  if(!description) description = '';
  description = description.replace(/<a[^>]+href="[^"]*redlink[^"]*"[^>]*>([^<]+)<\/a>/g, (_, c) => c);
  return processText(description.replace(/href="([^"]*)"/g, (_, c) => "href=\"" + host + c + "\""));
}

function parseGeoLocationFromLink($: cheerio.CheerioAPI, element: cheerio.Element) {
  const geoLoc = $(element).find('small>span>a').first().attr('href');
  if(!geoLoc) return ['', ''];
  let loc = /params=([^_]+)_N_([^_]+)/g.exec(geoLoc);
  if(!loc) return ['', ''];
  return [loc[1], loc[2]];
}

function processText(text: string) {
  return text.replace(/ä/g, '&auml;')
    .replace(/Ä/g, '&Auml;')
    .replace(/ö/g, '&ouml;')
    .replace(/Ö/g, '&Ouml;')
    .replace(/ü/g, '&uuml;')
    .replace(/Ü/g, '&Uuml;')
    .replace(/ß/g, '&szlig;');
}

async function loadMuseums() {
  const data: Array<Sight> = [];
  const host = 'https://de.wikipedia.org';
  const url = `${host}/wiki/Liste_der_Museen_in_M%C3%BCnchen`;
  let html = await axios.get(url);
  let $ = cheerio.load(html.data);
  let regexpAcceptedLink = new RegExp('https://de\\.wikipedia\\.org/');
  const tableBody = $('table.wikitable').first().find('tbody');
  tableBody.children().each((_, e) => {
    const cell = $(e).find('td').first();
    const nameCell = cell.find('a').first();
    const [name, link] = [processText(nameCell.text()), host + nameCell.attr('href')];
    if(!link || link.includes("redlink=1") || !regexpAcceptedLink.test(link)) return; // delete '!' to find non-valid links found by scraper
    const geo = $(cell).find('span.geo').first();
    if(!geo) return;
    const lat = $(geo).find('span.latitude').first().text();
    const lng = $(geo).find('span.longitude').first().text();
    let description = processDescription($, e, host, 2);
    let image = processImg($, e);
    data.push({ name, link, image, description, type: 'museum', lat, lng });
  });
  return data;
}

async function loadStatues() {
  const data: Array<Sight> = [];
  const host = 'https://de.wikipedia.org';
  const url = `${host}/wiki/Liste_der_Kunstwerke_im_öffentlichen_Raum_in_München`;
  let html = await axios.get(url);
  let $ = cheerio.load(html.data);
  const tableBody = $('table.wikitable').first().find('tbody');
  tableBody.children().each((_, e) => {
    const cell = $(e).find('td').first();
    const nameCell = cell.find('a').first();
    let [name, link] = [processText(cell.text()), ""];
    if(nameCell.length != 0) {
      [name, link] = [processText(nameCell.text()), host + nameCell.attr('href')];
    }

    const [lat, lng] = parseGeoLocationFromLink($, e);
    if(!lat || !lng) return;

    let image = processImg($, e);

    let author = processDescription($, e, host, 4);
    let description_ = processDescription($, e, host, 5).trim();
    if(author) author = "<br>Author: "+author;
    if(description_) description_ = "<br>Description: "+description_;

    let description = author + description_;

    data.push({ name, link, image,description, type: 'statue', lat, lng });
  });
  return data;
}

async function loadMemorial() {
  const districts: Array<string> = [];

  const dataFilter = [
    { tests: [/[Ss]chloss/], type: 'Schloss' },
    { tests: [/[Dd]enkmal/], type: 'Denkmal' },
    { tests: [/[Ww]erkst[aä]tte?/], type: 'Werkstatt' },
    { tests: [/[Bb]runnen/], type: 'Brunnen' },
    { tests: [/[Ss]tandbild|[Ss]kulptur/], type: 'Skulptur' },
    { tests: [/[Ff]friedhof/], type: 'Friedhof' },
    { tests: [/[Bb]rücke/], type: 'Brücke' },
    { tests: [/[Kk]irche/, /[Tt]emp[el]{2}/], type: 'Kirche' },
    { tests: [/(?:[Ww]ohn|[Ee]ck|[Bb]ürger|[Ee]inzel|[Kk]lein|[Hh]och)?haus/, /[Ww]ohnanlage/], type: 'Wohnhaus' },
    { tests: [/(?:[Mm]iets|[Gg]eschäfts)h[aä]us(er)?/], type: 'Geschäftshaus' },
    { tests: [/[Vv]ill[ae]/], type: 'Villa' },
    { tests: [/(?:[Rr]eihen|[Dd]oppel|[Ww]ohn)h[aä]us(?:er)?|[Hh]ausreihe|[Ww]ohnblock/], type: 'Wohnhaus' },
    { tests: [/[Ss]chulhaus|[Gg]ymnasium/], type: 'Schulhaus' },
    { tests: [/[Ww]egkreuz/], type: 'Wegkreuz' },
  ];

  const host = 'https://de.wikipedia.org';
  const urlMain = `${host}/wiki/Liste_der_Baudenkmäler_in_München`;
  districts.push("/wiki/Liste_der_Baudenkmäler_in_der_Münchner_Altstadt");
  let html = await axios.get(urlMain);
  let $ = cheerio.load(html.data);
  const tableBodyMain = $('table.wikitable').first().find('tbody');
  tableBodyMain.children().each((_, e) => {
    $(e).find('td').last().children().each((__, ee) => {
      let distLink = $(ee).attr('href');
      if(!distLink) return;
      districts.push(distLink);
    });
  });
  const data: Array<Sight> = [];
  for(const link in districts){
    const url = host+districts[link];
    html = await axios.get(url)
    $ = cheerio.load(html.data);
    $('table.wikitable').each((_, e)=>{
      $(e).find('tbody').children().each((__, ee)=>{
        const name = $(ee).find('td+td').first().text().trim();
        const cleanName = processText(name);
        let link = $(ee).find('td+td').first().find('a').attr('href');
        link = processLink(host, link);

        let [lat, lng] = parseGeoLocationFromLink($, ee);
        if(!lat || !lng) return;
        let image = processImg($, ee);
        let description = processDescription($, ee, host);

        for(const filter of dataFilter){
          for(const test of filter.tests){
            if(test.test(name)){
              data.push({ name: cleanName, link, image,description, type: filter.type, lat, lng });
              break;
            }
          }
        }
        data.push({ name: cleanName, link, image,description, type: 'unsure', lat, lng });
      });
    });
  }
  return data;
}

function deduplicate(data: Array<Sight>): Array<Sight> {
  const unique: Array<Sight> = [];
  const seen: Array<string> = [];
  for(const entry of data){
    const key = `${entry.lat},${entry.lng}`;
    if(seen.includes(key)) continue;
    seen.push(key);
    unique.push(entry);
  }
  return unique;
}

(async () => {
  const start = new Date().getTime();
  const data = deduplicate(await loadMuseums());
  // Check if out-directory exists and if not create it
  if(!existsSync('out')) mkdirSync('out');
  // Museums
  writeFileSync('out/museums.js', 'const museums = ' + JSON.stringify(data, null, 2), {
    encoding: 'utf-8'
  });

  // Statues
  const dataS = deduplicate(await loadStatues());
  writeFileSync('out/statues.js', 'const statues = ' + JSON.stringify(dataS, null, 2), {
    encoding: 'utf-8'
  });

  // Memorials & Other Buildings
  const dataB = deduplicate(await loadMemorial());
  writeFileSync('out/memorials.js','const memorials = ' + JSON.stringify(dataB, null, 2), {
    encoding: 'utf-8'
  });

  // WiFi Hotspots
  const dataUUID = [
    'bec8b9e3-0e55-438b-91bd-5f6a781f3efc',
    'df31fe96-0d7d-4d00-b93d-caf9e0e4686b'
  ];
  const dataset = 'kopie-von-kopie-von-lhm_standorte_05_2022.csv';

  const wireless = axios.get(`https://opendata.muenchen.de/dataset/${dataUUID[0]}/resource/${dataUUID[1]}/download/${dataset}`);
  const wirelessRawData: Array<Array<any>> = (await wireless).data.split('\n')
    .map(row => row.split(','));
  const wirelessData = wirelessRawData.slice(1, wirelessRawData.length)
    .map(datum => { return { lat: datum[4], lng: datum[5], count: datum[3] }});

  writeFileSync('out/wifi.js', 'const wifi = ' + JSON.stringify(wirelessData, null, 2), {
    encoding: 'utf-8'
  });

  const end = new Date().getTime();
  console.log(`Finished in ${end - start}ms`);
  const series: Array<Array<Sight | Pick<Sight, "lat" | "lng">>> = [data, dataS, dataB, wirelessData];
  let dataCount = 0;
  let classifiedCount = 0;
  for(const row of series) {
    for(const entry of row) {
      if(entry.hasOwnProperty('type') && entry['type'] !== 'unsure') classifiedCount++;
      dataCount++;
    }
  }
  console.log(`Aggregated ${dataCount} entries, of which ${classifiedCount} are properly classified.`);
})();