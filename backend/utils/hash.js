import crypto from 'crypto';
export async function hash(password){
  return crypto.createHash('sha256').update(password).digest('hex');
}
export async function verify(password,hashValue){
  const h = await hash(password);
  return h === hashValue;
}