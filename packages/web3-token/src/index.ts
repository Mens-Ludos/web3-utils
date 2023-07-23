import { decrypt } from './decrypt';
import { sign } from './sign';
import { verify } from './verify';

const Web3Token = {
  sign,
  decrypt,
  verify,
};

export { sign, decrypt, verify };
export default Web3Token;

export * from './interfaces';
