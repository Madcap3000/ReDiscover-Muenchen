import { writeFileSync, existsSync, mkdirSync } from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

import { Sight } from './sight';
import {data} from "cheerio/lib/api/attributes";

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
        const [name, link] = [nameCell.text(), host + nameCell.attr('href')];
        if(!link || link.includes("redlink=1") || !regexpAcceptedLink.test(link)) return; // delete '!' to find non-valid links found by scraper
        const geo = $(cell).find('span.geo').first();
        if(!geo) return;
        const lat = $(geo).find('span.latitude').first().text();
        const lng = $(geo).find('span.longitude').first().text();

        let image = $(e).find('a.image').attr('href');
        if(!image) {
            image = "";
        }else{
            image = host + image;
        }

        data.push({ name, link,image, type: 'museum', lat, lng });
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
        let [name, link] = [cell.text(), ""];
        if(nameCell.length != 0) {
            [name, link] = [nameCell.text(), host + nameCell.attr('href')];
        }

        const geoloc = $(e).find('small>span>a').first().attr('href');
        if(!geoloc) return;
        let coord = /params=([^_]+)_N_([^_]+)/g.exec(geoloc);
        if(!coord) return;
        let [__, lat, lng] = coord;

        let image = $(e).find('a.image').attr('href');
        if(!image) {
            image = "";
        }else{
            image = host + image;
        }

        data.push({ name, link, image, type: 'statue', lat, lng });
    });
    return data;
}

async function loadDenkmale() {
    const districts: Array<string> = [];
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
                let link = $(ee).find('td+td').first().find('a').attr('href');
                if(!link) link = "";

                const geoloc = $(ee).find('small>span>a').first().attr('href');
                if(!geoloc) return;
                let coord = /params=([^_]+)_N_([^_]+)/g.exec(geoloc);
                if(!coord) return;
                let [___, lat, lng] = coord;


                let image = $(ee).find('a.image').attr('href');
                if(!image) {
                    image = "";
                }else{
                    image = host + image;
                }

                if(/([Ww]ohnhaus|[Ww]ohnanlage|[Ee]ckhaus|[Bb]ürgerhaus)/.test(name)) {
                    //data.push({name, link, image, type: "Wohnhaus", lat, lng});
                }else if(/([Mm]ietshaus|[Gg]eschäftshaus)/.test(name)){
                    //data.push({name, link, image, type: "Geschäftshaus", lat, lng});
                }else if(/[Vv]illa/.test(name)){
                    //data.push({name, link, image, type: "Villa", lat, lng});
                }else if(/[Kk]irche/.test(name)){
                    //data.push({name, link, image, type: "Kirche", lat, lng});
                }else if(/([Rr]eihenhaus|[Ww]ohnblock|[Rr]eihenhäuser|[Hh]ausreihe)/.test(name)){
                    //data.push({name, link, image, type: "Wohnblock", lat, lng});
                }else if(/[Bb]runnen/.test(name)){
                    //data.push({name, link, image, type: "Brunnen", lat, lng});
                }else if(/[Ss]chulhaus/.test(name)){
                    //data.push({name, link, image, type: "Schulhaus", lat, lng});
                }else if(/[Ss]tandbild/.test(name)){
                    //data.push({name, link, image, type: "Standbild", lat, lng});
                }else{
                    data.push({name, link, image, type: "unsure", lat, lng});
                }
            });
        });
    }
    return data;
}

(async () => {
    const data = await loadMuseums();
    // Check if out-directory exists and if not create it
    if(!existsSync('out')) mkdirSync('out');
    writeFileSync('out/museums.json', JSON.stringify(data, null, 2));

    const dataS = await loadStatues();
    writeFileSync('out/statues.json', JSON.stringify(dataS, null, 2));

    const dataB = await loadDenkmale();
    writeFileSync('out/denkmale.json', JSON.stringify(dataB, null, 2));
})();