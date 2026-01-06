import { hash, verify } from '../utils/hash.js';
import { signJWT } from '../utils/jwt.js';
import { readJSON, writeJSON } from '../utils/storage.js';

export async function POST(req){
    const body = await req.json();
    const { username, password } = body;
    const users = await readJSON('users.json');
    const user = users.find(u=>u.username===username);
    if(!user) return new Response(JSON.stringify({success:false,msg:'User not found'}),{status:401});
    const valid = await verify(password,user.password);
    if(!valid) return new Response(JSON.stringify({success:false,msg:'Invalid password'}),{status:401});
    const token = signJWT({username});
    return new Response(JSON.stringify({success:true,token}),{status:200});
}