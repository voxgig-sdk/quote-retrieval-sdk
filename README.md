# QuoteRetrieval SDK

Fetch quotes from Quoterism by ID, get a random one, or pull the daily pick

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Quote Retrieval API

The Quote Retrieval API is a small HTTP interface in front of [Quoterism](https://quoterism.com), a web catalogue of inspirational quotes from authors, philosophers, and leaders. The site, made in Jersey City, surfaces a daily quote, an "I'm Feeling Lucky" random pick, a Top 100 list, and browse-by-author and browse-by-category views.

What you get from the API:
- A quote fetched by a specific quote ID
- A random quote (via a designated special value)
- The quote of the day (via a designated special value)

Operational notes: the [community catalogue entry](https://freepublicapis.com/quote-retrieval-api) notes the endpoint has been observed returning errors, so treat availability as best-effort. No authentication, rate-limit, or licence terms are published; check the Quoterism site's Contact / FAQ pages before relying on the data for redistribution.

## Try it

**TypeScript**
```bash
npm install quote-retrieval
```

**Python**
```bash
pip install quote-retrieval-sdk
```

**PHP**
```bash
composer require voxgig/quote-retrieval-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/quote-retrieval-sdk/go
```

**Ruby**
```bash
gem install quote-retrieval-sdk
```

**Lua**
```bash
luarocks install quote-retrieval-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { QuoteRetrievalSDK } from 'quote-retrieval'

const client = new QuoteRetrievalSDK({})

// List all quotes
const quotes = await client.Quote().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o quote-retrieval-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "quote-retrieval": {
      "command": "/abs/path/to/quote-retrieval-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Quote** | A single quotation record from the Quoterism catalogue, retrievable by ID or via the special values that map to a random quote or the quote of the day. | `/api/quotes` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from quoteretrieval_sdk import QuoteRetrievalSDK

client = QuoteRetrievalSDK({})

# List all quotes
quotes, err = client.Quote(None).list(None, None)

# Load a specific quote
quote, err = client.Quote(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'quoteretrieval_sdk.php';

$client = new QuoteRetrievalSDK([]);

// List all quotes
[$quotes, $err] = $client->Quote(null)->list(null, null);

// Load a specific quote
[$quote, $err] = $client->Quote(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/quote-retrieval-sdk/go"

client := sdk.NewQuoteRetrievalSDK(map[string]any{})

// List all quotes
quotes, err := client.Quote(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "QuoteRetrieval_sdk"

client = QuoteRetrievalSDK.new({})

# List all quotes
quotes, err = client.Quote(nil).list(nil, nil)

# Load a specific quote
quote, err = client.Quote(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("quote-retrieval_sdk")

local client = sdk.new({})

-- List all quotes
local quotes, err = client:Quote(nil):list(nil, nil)

-- Load a specific quote
local quote, err = client:Quote(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = QuoteRetrievalSDK.test()
const result = await client.Quote().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = QuoteRetrievalSDK.test(None, None)
result, err = client.Quote(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = QuoteRetrievalSDK::test(null, null);
[$result, $err] = $client->Quote(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Quote(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = QuoteRetrievalSDK.test(nil, nil)
result, err = client.Quote(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Quote(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Quote Retrieval API

- Upstream: [https://quoterism.com](https://quoterism.com)

---

Generated from the Quote Retrieval API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
