# Normal-change fixture

Change only `fixtures/normal-change/message.mjs` so that `fixtureMessage` is
`after`, then run:

```sh
FIXTURE_EXPECTED_MESSAGE=after npm test
```

Do not modify the test, package scripts, CI workflow, or default branch.
