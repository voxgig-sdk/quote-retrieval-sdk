"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('QuoteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when QUOTE_RETRIEVAL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('QUOTE_RETRIEVAL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.QuoteRetrievalSDK.test();
        const ent = testsdk.Quote();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.QUOTE_RETRIEVAL_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'quote.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "author", "op": { "list": { "req": false, "type": "`$ANY`" } }, "req": true, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "format": "date-time", "name": "createdAt", "req": false, "short": "Timestamp when the quote was created", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for the author", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": true, "short": "Name of the author", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "text", "req": true, "short": "The quote text", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "quote", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 12, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 0, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /api/quotes", "json": "{\"operationId\":\"getQuotes\",\"parameters\":[{\"description\":\"Page number (0-indexed). Defaults to 0.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Number of quotes per page (1-100). Defaults to 12.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":12,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"author\":{\"id\":\"xyz789\",\"name\":\"Steve Jobs\",\"slug\":\"steve-jobs\"},\"createdAt\":\"2024-01-15T10:30:00.000Z\",\"id\":\"abc123\",\"text\":\"The only way to do great work is to love what you do.\"}],\"pagination\":{\"hasNextPage\":true,\"hasPreviousPage\":false,\"limit\":12,\"page\":0,\"totalCount\":1000,\"totalPages\":84}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"allOf\":[{\"properties\":{\"author\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"id\":{\"description\":\"Unique identifier for the quote\",\"type\":\"string\"},\"text\":{\"description\":\"The quote text\",\"type\":\"string\"}},\"required\":[\"id\",\"text\",\"author\"],\"type\":\"object\"},{\"properties\":{\"author\":{\"allOf\":[{\"properties\":{\"id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},{\"properties\":{\"slug\":{\"description\":\"URL-friendly version of the author's name\",\"type\":\"string\"}},\"type\":\"object\"}]},\"createdAt\":{\"description\":\"Timestamp when the quote was created\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"},\"pagination\":{\"properties\":{\"hasNextPage\":{\"description\":\"Indicates if there is a next page\",\"type\":\"boolean\"},\"hasPreviousPage\":{\"description\":\"Indicates if there is a previous page\",\"type\":\"boolean\"},\"limit\":{\"description\":\"Number of items per page\",\"type\":\"integer\"},\"page\":{\"description\":\"Current page number (0-indexed)\",\"type\":\"integer\"},\"totalCount\":{\"description\":\"Total number of quotes available\",\"type\":\"integer\"},\"totalPages\":{\"description\":\"Total number of pages\",\"type\":\"integer\"}},\"required\":[\"page\",\"limit\",\"totalCount\",\"totalPages\",\"hasNextPage\",\"hasPreviousPage\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Invalid request\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/quotes", "segments": [{ "lit": "api" }, { "lit": "quotes" }], "select": { "exist": ["limit", "page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "abc123", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/quotes/{id}", "json": "{\"operationId\":\"getQuoteById\",\"parameters\":[{\"description\":\"The quote ID, or a special value: 'random' for a random quote, 'quote-of-the-day' for the daily quote.\",\"examples\":{\"quoteOfTheDay\":{\"summary\":\"Quote of the day\",\"value\":\"quote-of-the-day\"},\"random\":{\"summary\":\"Random quote\",\"value\":\"random\"},\"specificId\":{\"summary\":\"Specific quote ID\",\"value\":\"abc123\"}},\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"author\":{\"id\":\"xyz789\",\"name\":\"Steve Jobs\"},\"id\":\"abc123\",\"text\":\"The only way to do great work is to love what you do.\"},\"schema\":{\"properties\":{\"author\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the author\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the author\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"id\":{\"description\":\"Unique identifier for the quote\",\"type\":\"string\"},\"text\":{\"description\":\"The quote text\",\"type\":\"string\"}},\"required\":[\"id\",\"text\",\"author\"],\"type\":\"object\"}}},\"description\":\"Success\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Quote not found\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Quote not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/quotes/{id}", "segments": [{ "lit": "api" }, { "lit": "quotes" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.author`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "quote", "name__orig": "quote", "Name": "Quote", "name_": "quote", "name-": "quote", "NAME": "QUOTE", "index$": 0 }, { "active": true, "entity": "quote", "key$": "BasicQuoteFlow", "kind": "basic", "name": "BasicQuoteFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "quote_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "quote_ref01", "srcdatavar": "quote_ref01_data", "suffix": "_dt0" }, "match": { "id": "quote01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-quote_ref01" } }], "index$": 1 }] }, 'Quote');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let quote_ref01_data = Object.values(setup.data.existing.quote)[0];
        // LIST
        const quote_ref01_ent = client.Quote();
        const quote_ref01_match = {};
        const quote_ref01_list = (await quote_ref01_ent.list(quote_ref01_match)).map((e) => e.data());
        // LOAD
        const quote_ref01_match_dt0 = {};
        quote_ref01_match_dt0.id = quote_ref01_data.id;
        const quote_ref01_data_dt0 = (await quote_ref01_ent.load(quote_ref01_match_dt0)).data();
        (0, node_assert_1.default)(quote_ref01_data_dt0.id === quote_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/quote/QuoteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.QuoteRetrievalSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['quote01', 'quote02', 'quote03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'QUOTE_RETRIEVAL_TEST_QUOTE_ENTID': idmap,
        'QUOTE_RETRIEVAL_TEST_LIVE': 'FALSE',
        'QUOTE_RETRIEVAL_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['QUOTE_RETRIEVAL_TEST_QUOTE_ENTID'];
    const live = 'TRUE' === env.QUOTE_RETRIEVAL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['QUOTE_RETRIEVAL_TEST_QUOTE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.QuoteRetrievalSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.QUOTE_RETRIEVAL_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=QuoteEntity.test.js.map