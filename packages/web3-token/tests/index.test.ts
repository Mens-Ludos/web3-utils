import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import { getAddress } from 'viem/utils';
import { describe, it, expect } from 'vitest';

import type { SignOpts } from '../src';
import { sign, verify } from '../src';

describe('Sign And Verify', () => {
  it('should sign correctly', async () => {
    const account = privateKeyToAccount(generatePrivateKey());
    const options: SignOpts = {};
    const token = await sign(
      (message) => account.signMessage({ message }),
      options,
    );
    const { address } = await verify(token);
    expect(getAddress(address)).to.equal(getAddress(account.address));
  });
});
