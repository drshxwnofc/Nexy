import crypto from 'crypto';
const SECRET='SUPER_SECRET_KEY';
export function signJWT(payload){
  const header=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url');
  const body=Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig=crypto.createHmac('sha256',SECRET).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${sig}`;
}