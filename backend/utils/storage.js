import fs from 'fs/promises';
export async function readJSON(file){ try{ return JSON.parse(await fs.readFile('./data/'+file,'utf-8'));}catch{ return []; } }
export async function writeJSON(file,data){ await fs.writeFile('./data/'+file,JSON.stringify(data,null,2)); }