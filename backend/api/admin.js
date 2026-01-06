import { readJSON } from '../utils/storage.js';
export async function GET(){
  const logs = await readJSON('logs.json');
  const users = await readJSON('users.json');
  return new Response(JSON.stringify({logs,users}),{status:200});
}