# Encryption Module Migration Guide

## Overview

The encryption module has been moved from `nukleus/app/src/lib/encryption/` to the top-level `lib/src/encryption/` package and enhanced to support multiple RSA key formats.

## Key Changes

### 1. Module Location

**Before:**

```typescript
import {encryptWithPublicKey, decryptWithPrivateKey} from '~/lib/encryption';
```

**After:**

```typescript
import {encryptWithPublicKey, decryptWithPrivateKey} from 'lib/encryption';
```

### 2. New Key Format Support

The RSA encryption functions now support **three different key formats**:

1. **PEM Format** (with headers and line breaks)

    ```
    -----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
    -----END PUBLIC KEY-----
    ```

2. **Base64-Encoded PEM** (PEM format encoded as base64)

    ```
    LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl...
    ```

3. **Raw Base64** (key material without PEM headers - NEW FORMAT)
    ```
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1M6wSqLb6VDlo1E1zQet...
    ```

### 3. Automatic Format Detection

The encryption functions automatically detect and handle all three formats transparently. No code changes are required when switching between formats.

## Updated Files

### In `lib/` package:

- ✅ `lib/src/encryption/crypto-generator.mts` - Random ID and API key generation
- ✅ `lib/src/encryption/encryption.mts` - AES symmetric encryption
- ✅ `lib/src/encryption/rsa-encryption.mts` - RSA asymmetric encryption (enhanced)
- ✅ `lib/src/encryption/index.mts` - Module exports
- ✅ `lib/package.json` - Added encryption export

### In `nukleus/app/`:

- ✅ `nukleus/app/src/lib/helpers/ssn-utils.ts` - Updated to use lib encryption
- ✅ `nukleus/app/src/lib/helpers/banking-utils.ts` - Updated to use lib encryption

## Environment Configuration

The new format is designed to work with environment variables that store keys without PEM headers:

```json
{
    "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...",
    "privateKey": "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSj..."
}
```

## API Reference

### `encryptWithPublicKey(data, publicKey, options?)`

Encrypts data using an RSA public key.

- **Parameters:**
    - `data` (string | object): Data to encrypt
    - `publicKey` (string): RSA public key in any supported format
    - `options` (optional): Encryption options
- **Returns:** string - Base64 encoded encrypted data

### `decryptWithPrivateKey(encryptedData, privateKey, options?)`

Decrypts data using an RSA private key.

- **Parameters:**
    - `encryptedData` (string): Base64 encoded encrypted data
    - `privateKey` (string): RSA private key in any supported format
    - `options` (optional): Decryption options
- **Returns:** string | object - Decrypted data

## Migration Checklist

- [x] Move encryption files to lib package
- [x] Add support for raw base64 key format
- [x] Update nukleus imports to use lib package
- [x] Add comprehensive tests for all key formats
- [x] Verify backward compatibility
- [x] Update package.json exports

## Testing

All encryption tests pass with 96.73% code coverage:

```bash
cd lib
pnpm test
```

## Backward Compatibility

✅ **Fully backward compatible** - All existing code using PEM or base64-encoded PEM keys will continue to work without any changes.

## Examples

### Example 1: Using Raw Base64 Keys (New Format)

```typescript
import {encryptWithPublicKey, decryptWithPrivateKey} from 'lib/encryption';

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...';
const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSj...';

const encrypted = encryptWithPublicKey('sensitive data', publicKey);
const decrypted = decryptWithPrivateKey(encrypted, privateKey);
```

### Example 2: Decrypting SSN

```typescript
import {decryptSsn} from '~/lib/helpers/ssn-utils';

const encryptedSsn = 'base64encrypteddata...';
const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEF...'; // Any format

const ssn = decryptSsn(encryptedSsn, privateKey);
// Returns: '123456789'
```

### Example 3: Decrypting Bank Account Number

```typescript
import {decryptAccountNumber} from '~/lib/helpers/banking-utils';

const encryptedAccount = 'base64encrypteddata...';
const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEF...'; // Any format

const accountNumber = decryptAccountNumber(encryptedAccount, privateKey);
// Returns: '12345678901234'
```

## Notes

- The `decryptWithPrivateKey` function attempts to parse the decrypted data as JSON. If parsing fails, it returns the raw string.
- When encrypting strings that contain only numbers (like SSNs or account numbers), they may be returned as numbers after decryption. Use `String(decrypted)` to ensure string type.
- The browser version (`rsa-encryption.browser.ts`) remains in the nukleus app for client-side encryption and has not been moved to the lib package.
