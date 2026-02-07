# Security rules

## Pre-commit checklist (MANDATORY)
Before every commit, verify:
- [ ] No API keys, tokens, or secrets in code
- [ ] No hardcoded passwords or credentials
- [ ] `.env` files are in `.gitignore`
- [ ] Sensitive data uses `flutter_secure_storage`, not SharedPreferences
- [ ] No PII in logs (`print()`, `debugPrint()`)

## Secret management
- Store secrets in environment variables or secure storage
- Use `.env` files locally (never commit)
- For CI/CD, use platform secret management (GitHub Secrets, etc.)
- Rotate secrets if accidentally exposed

## Secure coding
- Validate all user input before processing
- Use HTTPS for all network requests
- Don't log sensitive data (tokens, passwords, user data)
- Use parameterized queries for local databases
- Sanitize data before displaying (prevent XSS in WebViews)

## Release builds
- Enable obfuscation: `--obfuscate --split-debug-info=build/debug-info`
- Remove debug flags and banners
- Use generic error messages (no stack traces to users)

## Security response
If a secret is exposed:
1. Rotate the secret immediately
2. Check git history for exposure duration
3. Audit access logs if available
4. Update all environments with new secret

## Agent support
For detailed security reviews, invoke: `agents/security-reviewer.md`
