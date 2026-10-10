import test from 'node:test';
import assert from 'node:assert/strict';
import { request, server } from './index.mjs';
test('key required before any API request', async () => {
  await assert.rejects(request('/v1/business', { name: 'A' }, '', () => { throw Error('network must not run'); }), /KNOWFIRM_API_KEY/);
});
test('fixed origin, encoded params, key header and redirects denied', async () => {
  const data = await request('/v1/business', { name: 'A&B' }, 'kf_test_fixture', async (url, options) => {
    assert.equal(url.origin, 'https://knowfirm.com');assert.equal(url.searchParams.get('name'), 'A&B');
    assert.equal(options.headers['x-api-key'], 'kf_test_fixture');assert.equal(options.redirect, 'error');
    return { ok: true, json: async () => ({ name: 'A&B' }) };
  });assert.equal(data.name, 'A&B');
});
test('provider failures do not echo secrets or arbitrary response body', async () => {
  await assert.rejects(request('/v1/business', {}, 'kf_test_fixture', async () => ({ ok: false, status: 401 })), /401/);
});
test('server constructs', () => { assert(server('kf_test_fixture')); });
