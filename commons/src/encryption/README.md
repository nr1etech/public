# Encryption Module

A comprehensive encryption library supporting both symmetric (AES) and asymmetric (RSA) encryption with multiple key format support.

## Features

- ✅ **RSA Encryption** - Asymmetric encryption using RSA-OAEP with SHA-256
- ✅ **AES Encryption** - Symmetric encryption using AES-128-CBC
- ✅ **Multiple Key Formats** - Supports PEM, base64-encoded PEM, and raw base64 keys
- ✅ **ID Generation** - Cryptographically secure random ID and API key generation
- ✅ **TypeScript** - Full TypeScript support with type definitions
- ✅ **Well Tested** - 96.73% code coverage with comprehensive tests

## Installation

This is a workspace package. Add it to your dependencies in `package.json`:

```json
{
    "dependencies": {
        "lib": "workspace:"
    }
}
```

## Usage

### RSA Encryption

```typescript
import {
    generateKeyPair,
    encryptWithPublicKey,
    decryptWithPrivateKey,
} from 'lib/encryption';

// Generate a key pair
const keys = await generateKeyPair({keySize: 2048});

// Encrypt data
const encrypted = encryptWithPublicKey('sensitive data', keys.publicKey);

// Decrypt data
const decrypted = decryptWithPrivateKey(encrypted, keys.privateKey);
```

### Key Format Support

The RSA functions automatically detect and handle three key formats:

```typescript
// 1. PEM format (with headers)
const pemKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----`;

// 2. Base64-encoded PEM
const base64PemKey = 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0K...';

// 3. Raw base64 (without PEM headers) - NEW!
const rawBase64Key = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...';

// All three formats work identically
const encrypted = encryptWithPublicKey('data', pemKey);
const encrypted2 = encryptWithPublicKey('data', base64PemKey);
const encrypted3 = encryptWithPublicKey('data', rawBase64Key);
```

### AES Encryption

```typescript
import {generateEncodedKey, localEncrypt, localDecrypt} from 'lib/encryption';

// Generate an encryption key
const key = generateEncodedKey();

// Encrypt data
const encrypted = localEncrypt({userId: '123', email: 'user@example.com'}, key);

// Decrypt data
const decrypted = localDecrypt(encrypted, key);
```

### ID Generation

```typescript
import {generateId, generateApiKey} from 'lib/encryption';

// Generate a random ID (16 bytes = 22 characters base64url)
const id = generateId();
// Example: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"

// Generate an API key (32 bytes = 43 characters base64url)
const apiKey = generateApiKey();
// Example: "nk_611266eb05974b80a5170b13671878711bb4d87d29b5455f9420e3951b8f0ceb"
```

## API Reference

### RSA Functions

#### `generateKeyPair(options?): Promise<RSAKeyPair>`

Generates an RSA key pair asynchronously.

**Options:**

- `keySize?: 2048 | 3072 | 4096` - Key size in bits (default: 2048)
- `format?: 'pem' | 'base64'` - Output format (default: 'pem')

**Returns:** `Promise<RSAKeyPair>`

#### `generateKeyPairSync(options?): RSAKeyPair`

Generates an RSA key pair synchronously.

**Options:** Same as `generateKeyPair`

**Returns:** `RSAKeyPair`

#### `encryptWithPublicKey(data, publicKey, options?): string`

Encrypts data using an RSA public key.

**Parameters:**

- `data: string | object` - Data to encrypt
- `publicKey: string` - Public key in any supported format
- `options?: EncryptionOptions` - Optional encryption settings

**Returns:** Base64 encoded encrypted string

#### `decryptWithPrivateKey(encryptedData, privateKey, options?): string | object`

Decrypts data using an RSA private key.

**Parameters:**

- `encryptedData: string` - Base64 encoded encrypted data
- `privateKey: string` - Private key in any supported format
- `options?: EncryptionOptions` - Optional decryption settings

**Returns:** Decrypted data (string or parsed JSON object)

#### `isValidPublicKey(key: string): boolean`

Validates if a string is a valid RSA public key.

#### `isValidPrivateKey(key: string): boolean`

Validates if a string is a valid RSA private key.

#### `getKeySize(key: string): number`

Returns the key size in bits for an RSA key.

### AES Functions

#### `generateEncodedKey(size?: number): string`

Generates a base64-encoded AES encryption key.

**Parameters:**

- `size?: number` - Key size in bytes (default: 16)

**Returns:** Base64 encoded key

#### `localEncrypt(val: object, key: Buffer | string): string`

Encrypts an object using AES-128-CBC.

**Parameters:**

- `val: object` - Object to encrypt
- `key: Buffer | string` - Encryption key (Buffer or base64 string)

**Returns:** Encrypted string in format `iv|ciphertext`

#### `localDecrypt(encrypted: string, key: Buffer | string): object`

Decrypts an AES-encrypted string.

**Parameters:**

- `encrypted: string` - Encrypted string in format `iv|ciphertext`
- `key: Buffer | string` - Decryption key (Buffer or base64 string)

**Returns:** Decrypted object

### ID Generation Functions

#### `generateId(length?: number): string`

Generates a cryptographically secure random ID.

**Parameters:**

- `length?: number` - Length in bytes (default: 16)

**Returns:** Base64url encoded ID

#### `generateApiKey(length?: number): string`

Generates a cryptographically secure API key.

**Parameters:**

- `length?: number` - Length in bytes (default: 32)

**Returns:** Base64url encoded API key

## Security Considerations

1. **Key Management**
    - Never expose private keys in client-side code
    - Store private keys securely (e.g., AWS Secrets Manager)
    - Use environment variables for key configuration

2. **Data Size Limits**
    - RSA can only encrypt data smaller than the key size minus padding
    - For 2048-bit keys: maximum ~190 bytes
    - For larger data, use hybrid encryption (RSA + AES)

3. **Key Formats**
    - All three key formats (PEM, base64 PEM, raw base64) are supported
    - The module automatically normalizes keys internally
    - Raw base64 format is space-efficient for environment variables

## Testing

Run the test suite:

```bash
cd lib
pnpm test
```

Test specific modules:

```bash
pnpm test src/encryption/rsa-encryption.test.mts
pnpm test src/encryption/encryption.test.mts
pnpm test src/encryption/new-format.test.mts
```

## Examples

### Example 1: Encrypting Sensitive User Data

```typescript
import {encryptWithPublicKey, decryptWithPrivateKey} from 'lib/encryption';

// From environment
const publicKey = process.env.PUBLIC_KEY!;
const privateKey = process.env.PRIVATE_KEY!;

// Encrypt SSN for storage
const ssn = '123-45-6789';
const encryptedSsn = encryptWithPublicKey(ssn, publicKey);

// Later, decrypt when needed
const decryptedSsn = decryptWithPrivateKey(encryptedSsn, privateKey);
```

### Example 2: Generating and Using API Keys

```typescript
import {generateApiKey} from 'lib/encryption';

// Generate a new API key for a user
const apiKey = generateApiKey();
console.log('New API key:', apiKey);
// Output: nk_dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk...

// Store hash of the API key in database
// Give the plain API key to the user (only shown once)
```

### Example 3: Session Data Encryption

```typescript
import {generateEncodedKey, localEncrypt, localDecrypt} from 'lib/encryption';

// Generate a session encryption key
const sessionKey = generateEncodedKey();

// Encrypt session data
const sessionData = {
    userId: '12345',
    email: 'user@example.com',
    roles: ['admin', 'user'],
};
const encrypted = localEncrypt(sessionData, sessionKey);

// Decrypt session data
const decrypted = localDecrypt(encrypted, sessionKey);
```

## Migration Guide

See [MIGRATION.md](./MIGRATION.md) for detailed migration instructions from the old nukleus-specific encryption module.

## License

This module is part of the clientloop project.
