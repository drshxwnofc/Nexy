import { readJSON, writeJSON } from '../utils/storage.js';
export async function GET(req){
  const users = await readJSON('users.json');
  return new Response(JSON.stringify({balance: users[0]?.coins||0}),{status:200});
}