import crypto from 'crypto';

export function HashPass (password:string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 32).toString('hex');

  return hash+salt;
}

export function ComparePass (password:string, hash:string) {
  const salt = hash.slice(64);
  const reGen = crypto.scryptSync(password, salt, 32).toString('hex');

  return (reGen+salt) === hash;
}