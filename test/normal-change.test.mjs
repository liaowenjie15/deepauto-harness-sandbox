import assert from 'node:assert/strict';
import test from 'node:test';

import { fixtureMessage } from '../fixtures/normal-change/message.mjs';

const expectedMessage = process.env.FIXTURE_EXPECTED_MESSAGE ?? 'before';

test('normal-change fixture has the requested message', () => {
  assert.equal(fixtureMessage, expectedMessage);
});
