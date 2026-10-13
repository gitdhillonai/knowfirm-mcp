# Tech stack

KnowFirm MCP is a local stdio server. There is no web app, database, or hosted runtime in this repository.

| Piece | Choice |
| --- | --- |
| Runtime | Node.js 20+ (`"type": "module"`) |
| Entry | `index.mjs` (bin `knowfirm-mcp`) |
| Protocol | `@modelcontextprotocol/sdk` ^1.0.0, stdio transport |
| Input checks | `zod` ^3.24.0 |
| Upstream API | HTTPS GET to `https://knowfirm.com` only (`business_lookup`, `business_search`) |
| Auth | Caller-supplied `KNOWFIRM_API_KEY` request header. The process does not store the key. |
| Package | npm `@knowfirm/knowfirm-mcp` |
| Desktop bundle | MCPB (`manifest.json`, release artifact) |
| Registry manifest | `server.json` (`io.github.gitdhillonai/knowfirm`) |
| Tests | `node --test test.mjs` (mocked fetch; no live credits) |
| License | MIT |

There is no compile step. `npm test` is the local gate. Do not bump or `npm publish` as part of documentation-only changes.
