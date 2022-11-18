import { writeFileSync, existsSync, mkdirSync } from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

import { Sight } from './sight';

async function loadMuseums() {
    const data: Array<Sight> = [];
    const host = 'https://de.wikipedia.org';
    const url = `${host}/wiki/Liste_der_Museen_in_M%C3%BCnchen`;
    let html = await axios.get(url);
    let $ = cheerio.load(html.data);
    const tableBody = $('table.wikitable').first().find('tbody');
    tableBody.children().each((_, e) => {
        const cell = $(e).find('td').first();
        const nameCell = cell.find('a').first();
        const [name, link] = [nameCell.text(), host + nameCell.attr('href')];
        if(!link || link.includes("redlink=1")) return;
        const geo = $(cell).find('span.geo').first();
        if(!geo) return;
        const lat = $(geo).find('span.latitude').first().text();
        const lng = $(geo).find('span.longitude').first().text();
        data.push({ name, link, type: 'museum', lat, lng });
    });
    return data;
}

(async () => {
    const data = await loadMuseums();
    // Check if out-directory exists and if not create it
    if(!existsSync('out')) mkdirSync('out');
    writeFileSync('out/museums.json', JSON.stringify(data, null, 2));
})();