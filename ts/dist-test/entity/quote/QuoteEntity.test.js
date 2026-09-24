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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "op": { "list": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$OBJECT`", "key$": "author", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "Timestamp when the quote was created", "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the author", "t": "`$STRING`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name of the author", "t": "`$STRING`", "key$": "name", "index$": 3 }, "text": { "a": true, "h": "Text", "n": "text", "r": true, "sh": "The quote text", "t": "`$STRING`", "key$": "text", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "quote", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/quotes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 12, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/quotes", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "quotes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/quotes/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abc123", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/quotes/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "quotes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.author`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "quote", "name__orig": "quote", "Name": "Quote", "name_": "quote", "name-": "quote", "NAME": "QUOTE", "index$": 0 }, { "active": true, "entity": "quote", "key$": "BasicQuoteFlow", "kind": "basic", "name": "BasicQuoteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "quote_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "quote_ref01", "srcdatavar": "quote_ref01_data", "suffix": "_dt0" }, "m": { "id": "quote01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-quote_ref01" } }], "index$": 1 }] }, 'Quote', { "GET /api/quotes": { "protocol": "http", "operationId": "getQuotes", "responses": { "200": { "description": "Success", "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "items": { "allOf": [{ "properties": { "author": { "properties": { "id": { "description": "Unique identifier for the author", "type": "string", "key$": "id" }, "name": { "description": "Name of the author", "type": "string", "key$": "name" } }, "required": ["id", "name"], "type": "object", "x-ref": "#/components/schemas/Author", "key$": "author" }, "id": { "description": "Unique identifier for the quote", "type": "string", "key$": "id" }, "text": { "description": "The quote text", "type": "string", "key$": "text" } }, "required": ["id", "text", "author"], "type": "object", "x-ref": "#/components/schemas/Quote", "index$": 0 }, { "properties": { "author": { "allOf": [{ "properties": { "id": { "description": "Unique identifier for the author", "type": "string" }, "name": { "description": "Name of the author", "type": "string" } }, "required": ["id", "name"], "type": "object", "x-ref": "#/components/schemas/Author" }, { "properties": { "slug": { "description": "URL-friendly version of the author's name", "type": "string" } }, "type": "object" }], "x-ref": "#/components/schemas/AuthorWithSlug", "key$": "author" }, "createdAt": { "description": "Timestamp when the quote was created", "format": "date-time", "type": "string", "key$": "createdAt" } }, "type": "object", "index$": 1 }], "x-ref": "#/components/schemas/QuoteWithTimestamp" }, "key$": "data", "type": "array" }, "pagination": { "key$": "pagination", "properties": { "hasNextPage": { "description": "Indicates if there is a next page", "type": "boolean" }, "hasPreviousPage": { "description": "Indicates if there is a previous page", "type": "boolean" }, "limit": { "description": "Number of items per page", "type": "integer" }, "page": { "description": "Current page number (0-indexed)", "type": "integer" }, "totalCount": { "description": "Total number of quotes available", "type": "integer" }, "totalPages": { "description": "Total number of pages", "type": "integer" } }, "required": ["page", "limit", "totalCount", "totalPages", "hasNextPage", "hasPreviousPage"], "type": "object", "x-ref": "#/components/schemas/Pagination" } } }, "example": { "data": [{ "id": "abc123", "text": "The only way to do great work is to love what you do.", "author": { "id": "xyz789", "name": "Steve Jobs", "slug": "steve-jobs" }, "createdAt": "2024-01-15T10:30:00.000Z" }], "pagination": { "page": 0, "limit": 12, "totalCount": 1000, "totalPages": 84, "hasNextPage": true, "hasPreviousPage": false } } } } }, "404": { "description": "Not Found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } }, "required": ["error"], "x-ref": "#/components/schemas/Error" }, "example": { "error": "Invalid request" } } } } }, "parameters": [{ "name": "page", "in": "query", "description": "Page number (0-indexed). Defaults to 0.", "required": false, "schema": { "type": "integer", "minimum": 0, "default": 0 }, "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of quotes per page (1-100). Defaults to 12.", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 12 }, "index$": 1 }], "securitySource": "unspecified" }, "GET /api/quotes/{id}": { "protocol": "http", "operationId": "getQuoteById", "responses": { "200": { "description": "Success", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Unique identifier for the quote", "type": "string" }, "text": { "description": "The quote text", "type": "string" }, "author": { "properties": { "id": { "description": "Unique identifier for the author", "type": "string", "key$": "id" }, "name": { "description": "Name of the author", "type": "string", "key$": "name" } }, "required": ["id", "name"], "type": "object", "x-ref": "#/components/schemas/Author", "index$": 0 } }, "required": ["id", "text", "author"], "x-ref": "#/components/schemas/Quote" }, "example": { "id": "abc123", "text": "The only way to do great work is to love what you do.", "author": { "id": "xyz789", "name": "Steve Jobs" } } } } }, "404": { "description": "Quote not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } }, "required": ["error"], "x-ref": "#/components/schemas/Error" }, "example": { "error": "Quote not found" } } } } }, "parameters": [{ "name": "id", "in": "path", "description": "The quote ID, or a special value: 'random' for a random quote, 'quote-of-the-day' for the daily quote.", "required": true, "schema": { "type": "string" }, "examples": { "specificId": { "summary": "Specific quote ID", "value": "abc123" }, "random": { "summary": "Random quote", "value": "random" }, "quoteOfTheDay": { "summary": "Quote of the day", "value": "quote-of-the-day" } }, "index$": 0 }], "securitySource": "unspecified" } });
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