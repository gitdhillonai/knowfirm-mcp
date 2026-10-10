# Build status

Checked 2026-10-10 against source commit afc8c30 (before this documentation-only change).

## Verified locally

- Clean npm ci succeeded.
- npm test passed 4/4 tests: missing-key refusal, fixed-origin/encoded lookup request, safe provider failure and server construction. No dedicated business_search handler case is present. These are not real KnowFirm account or production API calls.
- npm pack --dry-run succeeded and listed five packaged files: index.mjs, README.md, LICENSE, manifest.json and package.json. No credential file is included.
- This package is a Node stdio MCP client with business_lookup and business_search; no standalone web build or deployment is defined in package.json.

## Not verified by this check

- Real account signup, API-key issuance, successful production lookup/search and credit readback.
- MCP desktop import/client handshake using the .mcpb artifact.
- npm publication. README explicitly says the npm MCP package is not yet published; the prepared npx example is not proof of availability.
- Release download availability, pricing, quota enforcement or billing behavior.

No paid API calls, credits, publishing, deployment or credential changes were made during this documentation check. A test/mock pass is not end-to-end product acceptance. Before release claims are expanded, link the actual client/API/registry evidence and owner-approved test-credit scope here.

## Live registry sweep: 2026-10-10

The official registry endpoint returned active version 0.1.0 with the repository URL, stdio MCPB package and SHA256 matching server.json:
https://registry.modelcontextprotocol.io/v0.1/servers/io.github.gitdhillonai%2Fknowfirm/versions/0.1.0

This is registry publication evidence, not desktop import, real API credit readback, npm publication or paid acceptance. The four local tests passed again during this sweep. No deployment exists for this local stdio package. The documentation PR still needs merge/readback on main; no CI workflow exists in this repository to rerun.
