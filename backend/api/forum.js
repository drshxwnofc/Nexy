import { readJSON, writeJSON } from '../utils/storage.js';
export async function GET(){ const msgs = await readJSON('forum.json'); return new Response(JSON.stringify({messages:msgs}),{status:200}); }
export async function POST(req){
  const body = await req.json();
  const msgs = await readJSON('forum.json');
  msgs.push({user:'user',text:body.text,timestamp:Date.now()});
  await writeJSON('forum.json',msgs);
  return new Response(JSON.stringify({success:true}),{status:200});
}