# DeepAuto Harness Sandbox

This repository contains deterministic, non-production fixtures for validating
DeepAuto's controlled GitHub execution path. It must never contain production
code, production credentials, or application secrets.

## Fixture catalog

| Fixture | Intended result | Command |
| --- | --- | --- |
| `normal-change` | Change `before` to `after`, then pass the targeted test. | `FIXTURE_EXPECTED_MESSAGE=after npm test` |
| `failing` | Produce a predictable failed test. | `npm run test:failure` |
| `timeout` | Exceed the harness's command timeout. | `npm run test:timeout` |
| `no-change` | Complete without a repository modification. | No command required. |

The default `npm test` validates the untouched baseline and is the only command
run by CI. The failing and timeout fixtures are opt-in and must not be added to
the default CI command.

## First smoke task

On a non-default `deepauto/*` branch, make this exact change and nothing else:

1. Change the string in `fixtures/normal-change/message.mjs` from `before` to
   `after`.
2. Run `FIXTURE_EXPECTED_MESSAGE=after npm test`.
3. Create a pull request back to `main`.

The execution environment must not push to `main`, read production secrets, or
receive the GitHub App private key.
