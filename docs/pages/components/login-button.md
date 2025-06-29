---
meta:
  title: Login Button
  description: A WebAuthn-enabled button component for secure biometric and security key authentication.
layout: component
---

Login buttons provide WebAuthn-based authentication functionality, enabling secure login with biometrics, security keys, and platform authenticators. Built on top of the Web Authentication API, they offer a passwordless authentication experience.

```html:preview
<nu-login-button credential-ids='["credential-id-1", "credential-id-2"]'>
  Sign In with WebAuthn
</nu-login-button>
```

```jsx:react
import NuLoginButton from '@onsonr/nebula/dist/react/login-button';

const App = () => (
  <NuLoginButton credentialIds={['credential-id-1', 'credential-id-2']}>
    Sign In with WebAuthn
  </NuLoginButton>
);
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant, inheriting from the base button component. The default variant is `neutral` for a clean, professional appearance.

```html:preview
<nu-login-button variant="default">Default Login</nu-login-button>
<nu-login-button variant="primary">Primary Login</nu-login-button>
<nu-login-button variant="success">Success Login</nu-login-button>
<nu-login-button variant="neutral">Neutral Login</nu-login-button>
<nu-login-button variant="warning">Warning Login</nu-login-button>
<nu-login-button variant="danger">Danger Login</nu-login-button>
```

```jsx:react
import NuLoginButton from '@onsonr/nebula/dist/react/login-button';

const App = () => (
  <>
    <NuLoginButton variant="default">Default Login</NuLoginButton>
    <NuLoginButton variant="primary">Primary Login</NuLoginButton>
    <NuLoginButton variant="success">Success Login</NuLoginButton>
    <NuLoginButton variant="neutral">Neutral Login</NuLoginButton>
    <NuLoginButton variant="warning">Warning Login</NuLoginButton>
    <NuLoginButton variant="danger">Danger Login</NuLoginButton>
  </>
);
```

### Sizes

Use the `size` attribute to change the button's size.

```html:preview
<nu-login-button size="small">Small Login</nu-login-button>
<nu-login-button size="medium">Medium Login</nu-login-button>
<nu-login-button size="large">Large Login</nu-login-button>
```

```jsx:react
import NuLoginButton from '@onsonr/nebula/dist/react/login-button';

const App = () => (
  <>
    <NuLoginButton size="small">Small Login</NuLoginButton>
    <NuLoginButton size="medium">Medium Login</NuLoginButton>
    <NuLoginButton size="large">Large Login</NuLoginButton>
  </>
);
```

### With Icons

The login button uses the Sonr passkey icon by default to maintain consistent branding. You can customize the icon using slots.

```html:preview
<nu-login-button>
  Sign In
</nu-login-button>

<nu-login-button variant="primary">
  <nu-icon slot="prefix" name="passkey" library="sonr"></nu-icon>
  Passkey Login
</nu-login-button>

<nu-login-button variant="success">
  <nu-icon slot="prefix" name="fingerprint"></nu-icon>
  Biometric Login
  <nu-icon slot="suffix" name="arrow-right"></nu-icon>
</nu-login-button>
```

```jsx:react
import NuLoginButton from '@onsonr/nebula/dist/react/login-button';
import NuIcon from '@onsonr/nebula/dist/react/icon';

const App = () => (
  <>
    <NuLoginButton>
      <NuIcon slot="prefix" name="shield-lock" />
      Secure Login
    </NuLoginButton>

    <NuLoginButton variant="success">
      <NuIcon slot="prefix" name="fingerprint" />
      Biometric Login
    </NuLoginButton>

    <NuLoginButton variant="primary">
      <NuIcon slot="prefix" name="key" />
      Security Key Login
      <NuIcon slot="suffix" name="arrow-right" />
    </NuLoginButton>
  </>
);
```

### Loading State

Show a loading spinner while authentication is in progress.

```html:preview
<nu-login-button loading>Authenticating...</nu-login-button>
```

### Disabled State

Disable the button to prevent interaction.

```html:preview
<nu-login-button disabled>Login Disabled</nu-login-button>
```

### Custom Relying Party

Configure custom relying party settings for different domains.

```html:preview
<nu-login-button
  rp-id="example.com"
  credential-ids='["cred-1", "cred-2"]'
  timeout="120000">
  Login to Example.com
</nu-login-button>
```

## WebAuthn Configuration

### Basic Authentication

A minimal example with required credential IDs:

```html
<nu-login-button credential-ids='["stored-credential-id"]'> Sign In </nu-login-button>
```

### Multiple Credentials

Support multiple stored credentials for the same user:

```html
<nu-login-button
  credential-ids='[
    "credential-from-laptop",
    "credential-from-phone",
    "credential-from-security-key"
  ]'
>
  Sign In with Any Device
</nu-login-button>
```

### With User Handle

Include a user handle for additional verification:

```html
<nu-login-button credential-ids='["credential-id"]' user-handle="user-handle-from-registration">
  Sign In
</nu-login-button>
```

## Event Handling

The login button emits three events during the authentication process:

```html
<nu-login-button id="login-btn" credential-ids='["credential-id"]'> Sign In </nu-login-button>

<script>
  const loginBtn = document.getElementById('login-btn');

  // Fired when authentication starts
  loginBtn.addEventListener('nu-login-start', () => {
    console.log('Authentication started');
  });

  // Fired on successful authentication
  loginBtn.addEventListener('nu-login-success', event => {
    const { credentialId, response } = event.detail;
    console.log('Login successful:', credentialId);
    // Send to server for verification
  });

  // Fired on authentication error
  loginBtn.addEventListener('nu-login-error', event => {
    const { error } = event.detail;
    console.error('Login failed:', error);
  });
</script>
```

### React Event Handling

```jsx:react
import NuLoginButton from '@onsonr/nebula/dist/react/login-button';

const App = () => {
  const handleLoginStart = () => {
    console.log('Authentication started');
  };

  const handleLoginSuccess = (event) => {
    const { credentialId, response } = event.detail;
    console.log('Login successful:', credentialId);
    // Send to server for verification
  };

  const handleLoginError = (event) => {
    const { error } = event.detail;
    console.error('Login failed:', error);
  };

  return (
    <NuLoginButton
      credentialIds={['credential-id']}
      onNuLoginStart={handleLoginStart}
      onNuLoginSuccess={handleLoginSuccess}
      onNuLoginError={handleLoginError}
    >
      Sign In
    </NuLoginButton>
  );
};
```

## Server Integration

After successful client-side authentication, send the credential to your server for verification:

```javascript
loginBtn.addEventListener('nu-login-success', async event => {
  const { credentialId, response } = event.detail;

  // Send to server
  const verifyResponse = await fetch('/api/webauthn/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      credentialId,
      response: {
        authenticatorData: response.authenticatorData,
        clientDataJSON: response.clientDataJSON,
        signature: response.signature,
        userHandle: response.userHandle
      }
    })
  });

  if (verifyResponse.ok) {
    // Login successful
    window.location.href = '/dashboard';
  }
});
```

## Browser Support

WebAuthn is supported in modern browsers with the following requirements:

- **Chrome/Edge**: Version 67+
- **Firefox**: Version 60+
- **Safari**: Version 14+ (macOS and iOS)
- **Platform Requirements**:
  - Windows 10 version 1903+ (for Windows Hello)
  - macOS 10.15+ (for Touch ID)
  - Android 7.0+ (for fingerprint/face recognition)
  - iOS 14+ (for Face ID/Touch ID)

### Fallback Handling

```javascript
// Check WebAuthn support before showing the button
if (window.PublicKeyCredential) {
  document.querySelector('nu-login-button').style.display = 'block';
} else {
  // Show traditional login form
  document.querySelector('#password-login').style.display = 'block';
}
```

## Best Practices

1. **Store Credential IDs**: Save credential IDs from registration in your database associated with user accounts
2. **Multiple Credentials**: Allow users to register multiple devices/authenticators for redundancy
3. **Timeout Handling**: Set appropriate timeouts based on your security requirements
4. **Error Messages**: Provide clear error messages for different failure scenarios
5. **Progressive Enhancement**: Always provide fallback authentication methods
6. **Security Headers**: Use HTTPS and proper security headers for WebAuthn
7. **User Education**: Explain the benefits of passwordless authentication to users

## Accessibility

The login button follows accessibility best practices:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader announcements for state changes
- Focus management during authentication
- Clear error messaging

## Styling

You can customize the appearance using CSS custom properties:

```css
nu-login-button {
  --nu-login-button-color: var(--nu-color-neutral-600);
}

nu-login-button::part(button) {
  /* Custom button styles */
}

nu-login-button[variant='primary']::part(button) {
  /* Primary variant styles */
}
```

[component-metadata:nu-login-button]
