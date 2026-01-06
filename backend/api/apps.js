import { readJSON, writeJSON } from '../utils/storage.js';
export async function GET(req){
  const auth = req.headers.get('authorization');
  if(!auth) return new Response(JSON.stringify({apps:[]}),{status:401});
  const apps = await readJSON('apps.json');
  return new Response(JSON.stringify({apps}),{status:200});
}