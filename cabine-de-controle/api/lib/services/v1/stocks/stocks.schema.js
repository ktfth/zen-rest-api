"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1StocksQueryResolver = exports.v1StocksQueryValidator = exports.v1StocksQuerySchema = exports.v1StocksQueryProperties = exports.v1StocksPatchResolver = exports.v1StocksPatchValidator = exports.v1StocksPatchSchema = exports.v1StocksDataResolver = exports.v1StocksDataValidator = exports.v1StocksDataSchema = exports.v1StocksExternalResolver = exports.v1StocksResolver = exports.v1StocksSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../../validators");
// Main data model schema
exports.v1StocksSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    stocks: typebox_1.Type.Optional(typebox_1.Type.Object({
        meta: typebox_1.Type.Object({
            symbol: typebox_1.Type.String(),
            interval: typebox_1.Type.String(),
            currency_base: typebox_1.Type.String(),
            currency_quote: typebox_1.Type.String(),
            type: typebox_1.Type.String(),
        }),
        values: typebox_1.Type.Array(typebox_1.Type.Object({
            datetime: typebox_1.Type.String(),
            open: typebox_1.Type.String(),
            high: typebox_1.Type.String(),
            low: typebox_1.Type.String(),
            close: typebox_1.Type.String(),
            volume: typebox_1.Type.Optional(typebox_1.Type.String()),
        })),
        status: typebox_1.Type.String(),
    })),
    symbol: typebox_1.Type.Optional(typebox_1.Type.String()),
    timestamp: typebox_1.Type.Optional(typebox_1.Type.Number())
}, { $id: 'V1Stocks', additionalProperties: false });
exports.v1StocksResolver = (0, schema_1.resolve)({});
exports.v1StocksExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.v1StocksDataSchema = typebox_1.Type.Pick(exports.v1StocksSchema, ['stocks', 'timestamp'], {
    $id: 'V1StocksData'
});
exports.v1StocksDataValidator = (0, typebox_1.getDataValidator)(exports.v1StocksDataSchema, validators_1.dataValidator);
exports.v1StocksDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.v1StocksPatchSchema = typebox_1.Type.Partial(exports.v1StocksDataSchema, {
    $id: 'V1StocksPatch'
});
exports.v1StocksPatchValidator = (0, typebox_1.getDataValidator)(exports.v1StocksPatchSchema, validators_1.dataValidator);
exports.v1StocksPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.v1StocksQueryProperties = typebox_1.Type.Pick(exports.v1StocksSchema, ['id', 'symbol', 'stocks', 'timestamp']);
exports.v1StocksQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.v1StocksQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.v1StocksQueryValidator = (0, typebox_1.getValidator)(exports.v1StocksQuerySchema, validators_1.queryValidator);
exports.v1StocksQueryResolver = (0, schema_1.resolve)({});
