"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1DataStocksQueryResolver = exports.v1DataStocksQueryValidator = exports.v1DataStocksQuerySchema = exports.v1DataStocksQueryProperties = exports.v1DataStocksPatchResolver = exports.v1DataStocksPatchValidator = exports.v1DataStocksPatchSchema = exports.v1DataStocksDataResolver = exports.v1DataStocksDataValidator = exports.v1DataStocksDataSchema = exports.v1DataStocksExternalResolver = exports.v1DataStocksResolver = exports.v1DataStocksSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../../../validators");
// Main data model schema
exports.v1DataStocksSchema = typebox_1.Type.Object({
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
}, { $id: 'V1DataStocks', additionalProperties: false });
exports.v1DataStocksResolver = (0, schema_1.resolve)({});
exports.v1DataStocksExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.v1DataStocksDataSchema = typebox_1.Type.Pick(exports.v1DataStocksSchema, ['stocks'], {
    $id: 'V1DataStocksData'
});
exports.v1DataStocksDataValidator = (0, typebox_1.getDataValidator)(exports.v1DataStocksDataSchema, validators_1.dataValidator);
exports.v1DataStocksDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.v1DataStocksPatchSchema = typebox_1.Type.Partial(exports.v1DataStocksDataSchema, {
    $id: 'V1DataStocksPatch'
});
exports.v1DataStocksPatchValidator = (0, typebox_1.getDataValidator)(exports.v1DataStocksPatchSchema, validators_1.dataValidator);
exports.v1DataStocksPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.v1DataStocksQueryProperties = typebox_1.Type.Pick(exports.v1DataStocksSchema, ['id', 'stocks']);
exports.v1DataStocksQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.v1DataStocksQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.v1DataStocksQueryValidator = (0, typebox_1.getValidator)(exports.v1DataStocksQuerySchema, validators_1.queryValidator);
exports.v1DataStocksQueryResolver = (0, schema_1.resolve)({});
