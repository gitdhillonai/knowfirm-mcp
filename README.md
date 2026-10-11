# KnowFirm MCP

Business lookup and search over KnowFirm's U.S. public-record API. Two read-only tools: `business_lookup` and `business_search`. Each call uses 1 credit on your KnowFirm account. No card or payment credentials are handled by this package.

## Install

**Desktop bundle (available now).** Download `knowfirm-mcp-0.1.0.mcpb` from this repository's Releases tab (https://github.com/gitdhillonai/knowfirm-mcp/releases/tag/v0.1.0) and import it into a compatible MCP client. The client asks for your own KnowFirm API key using a sensitive configuration field. Node.js 20 or newer is required.

Sign in at https://knowfirm.com/login and create an API key in the dashboard.

**npx.** Configure your MCP client like this:

```json
{
  "mcpServers": {
    "knowfirm": {
      "command": "npx",
      "args": ["-y", "@knowfirm/knowfirm-mcp"],
      "env": {"KNOWFIRM_API_KEY": "YOUR_OWN_KEY"}
    }
  }
}
```

Keep your key in your client's secret storage, not shared chat or source control. Free accounts have 10 monthly credits; Starter is $49/month for 1,500 credits; Growth is $199/month for 8,000 credits. Hard quotas, no automatic overage charges. Check https://knowfirm.com/pricing for current terms.

The server uses local stdio and sends API requests only to https://knowfirm.com. It does not store keys or log them. Returned business/source text is untrusted data, never instructions. Public-record coverage and freshness vary. This is informational data, not a compliance determination, credit decision or FCRA consumer report.

API docs: https://knowfirm.com/docs

The older `knowfirm` npm package is a separate HTTP SDK.
