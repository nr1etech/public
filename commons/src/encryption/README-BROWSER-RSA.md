# Browser RSA Encryption Module

This module provides browser-compatible RSA encryption using the Web Crypto API, allowing you to encrypt data on the client side before sending it to your server.

## Files

- **`rsa-encryption.browser.ts`** - Browser-compatible RSA encryption module using Web Crypto API
- **`rsa-encryption.ts`** - Node.js RSA encryption module (server-side)
- **`test-rsa-browser.html`** - Standalone HTML test page for browser encryption
- **`../../../app/src/components/rsa-encryption-example.tsx`** - Example Qwik component

## Features

- ✅ Pure browser implementation using Web Crypto API
- ✅ PEM format public key support
- ✅ Base64 encoded public key support
- ✅ RSA-OAEP encryption with SHA-256
- ✅ Compatible with Node.js server-side decryption
- ✅ TypeScript support with full type definitions

## Usage

### Basic Browser Usage

```javascript
// Import the browser module
import {
    encryptWithPublicKey,
    isValidPublicKey,
} from './rsa-encryption.browser.ts';

// Your RSA public key (PEM format)
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----`;

// Validate the public key
const isValid = await isValidPublicKey(publicKey);
if (!isValid) {
    throw new Error('Invalid public key');
}

// Encrypt data
const sensitiveData = 'This is secret information';
const encryptedData = await encryptWithPublicKey(sensitiveData, publicKey);

// Send encrypted data to server
await fetch('/api/secure', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({encrypted: encryptedData}),
});
```

### Qwik Component Usage

```typescript
import { component$, $ } from '@builder.io/qwik';

export const SecureForm = component$(() => {
  const handleSubmit = $(async (data: any) => {
    // Dynamically import to ensure client-side only
    const { encryptWithPublicKey } = await import(
      /* @vite-ignore */
      'path/to/rsa-encryption.browser.mjs'
    );

    const encrypted = await encryptWithPublicKey(data, publicKey);
    // Send encrypted data to server
  });

  return (
    // Your form JSX
  );
});
```

### Server-Side Decryption (Node.js)

```javascript
import {decryptWithPrivateKey} from './rsa-encryption.ts';

// Your RSA private key (keep this secure!)
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCB...
-----END PRIVATE KEY-----`;

// Decrypt data received from client
const encryptedData = req.body.encrypted;
const decryptedData = decryptWithPrivateKey(encryptedData, privateKey);
```

## Testing

### Browser Test Page

Open `test-rsa-browser.html` in your browser to test the encryption functionality:

```bash
# Using a local server (recommended)
npx serve lib/src/encryption
# Then open http://localhost:3000/test-rsa-browser.html

# Or open directly (may have CORS issues with modules)
open lib/src/encryption/test-rsa-browser.html
```

### Generate Test Keys

Use the Node.js module to generate test key pairs:

```javascript
import {generateKeyPair} from './rsa-encryption.ts';

const keys = await generateKeyPair({keySize: 2048});
console.log('Public Key:', keys.publicKey);
console.log('Private Key:', keys.privateKey);
```

## API Reference

### `encryptWithPublicKey(data, publicKey, options?)`

Encrypts data using an RSA public key.

- **Parameters:**
    - `data` (string | object): Data to encrypt
    - `publicKey` (string): RSA public key in PEM or base64 format
    - `options` (optional): Encryption options (for API compatibility)
- **Returns:** Promise<string> - Base64 encoded encrypted data

### `isValidPublicKey(key)`

Validates if a string is a valid RSA public key.

- **Parameters:**
    - `key` (string): Key string to validate
- **Returns:** Promise<boolean> - True if valid public key

### `isWebCryptoSupported()`

Checks if the browser supports Web Crypto API.

- **Returns:** boolean - True if Web Crypto API is available

### `base64ToPem(base64Key, type?)`

Converts a base64 encoded key to PEM format.

- **Parameters:**
    - `base64Key` (string): Base64 encoded key
    - `type` ('PUBLIC' | 'PRIVATE'): Type of key (default: 'PUBLIC')
- **Returns:** string - PEM formatted key

## Security Considerations

1. **Public Key Distribution**: Always serve public keys over HTTPS
2. **Key Storage**: Never store private keys in the browser
3. **Data Size Limits**: RSA has size limitations (~245 bytes for 2048-bit keys)
4. **Hybrid Encryption**: For large data, consider using RSA to encrypt a symmetric key
5. **Browser Compatibility**: Requires modern browsers with Web Crypto API support

## Browser Compatibility

The module requires browsers that support the Web Crypto API:

- ✅ Chrome 37+
- ✅ Firefox 34+
- ✅ Safari 11+
- ✅ Edge 79+
- ❌ Internet Explorer (not supported)

## Troubleshooting

### Common Issues

1. **"Failed to import key"**: Ensure your public key is in valid PEM format
2. **"crypto.subtle is undefined"**: Browser doesn't support Web Crypto API or page is not served over HTTPS
3. **"Data too large for key size"**: RSA can only encrypt data smaller than the key size minus padding

### Debug Tips

```javascript
// Check browser support
if (!isWebCryptoSupported()) {
    console.error('Web Crypto API not supported');
}

// Validate key before use
const isValid = await isValidPublicKey(publicKey);
console.log('Key valid:', isValid);

// Log encryption time
const start = performance.now();
const encrypted = await encryptWithPublicKey(data, publicKey);
console.log(`Encryption took ${performance.now() - start}ms`);
```

## Example Integration Flow

```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Server->>Browser: Send public key (on page load)
    Browser->>Browser: User enters sensitive data
    Browser->>Browser: Encrypt data with public key
    Browser->>Server: Send encrypted data
    Server->>Server: Decrypt with private key
    Server->>Browser: Send response
```

## License

This module is part of the enpago-nukleus project.
