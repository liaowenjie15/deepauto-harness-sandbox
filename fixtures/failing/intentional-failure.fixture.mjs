import assert from 'node:assert/strict';
import test from 'node:test';

test('fails predictably for harness error reporting', () => {
  assert.equal('actual', 'expected');
});
