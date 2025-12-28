import {randomBytes} from 'crypto';

export function generateId(length: number = 16): string {
  return randomBytes(length).toString('base64url');
}

export function generateApiKey(length: number = 32): string {
  return randomBytes(length).toString('base64url');
}
