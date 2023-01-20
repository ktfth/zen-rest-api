"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1DataStocks = void 0;
const schema_1 = require("@feathersjs/schema");
const stocks_schema_1 = require("./stocks.schema");
const stocks_class_1 = require("./stocks.class");
__exportStar(require("./stocks.class"), exports);
__exportStar(require("./stocks.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const v1DataStocks = (app) => {
    // Register our service on the Feathers application
    app.use('v1/data/stocks', new stocks_class_1.V1DataStocksService((0, stocks_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: ['find', 'get', 'create', 'patch', 'remove'],
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service('v1/data/stocks').hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(stocks_schema_1.v1DataStocksExternalResolver),
                schema_1.hooks.resolveResult(stocks_schema_1.v1DataStocksResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(stocks_schema_1.v1DataStocksQueryValidator),
                schema_1.hooks.resolveQuery(stocks_schema_1.v1DataStocksQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(stocks_schema_1.v1DataStocksDataValidator),
                schema_1.hooks.resolveData(stocks_schema_1.v1DataStocksDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(stocks_schema_1.v1DataStocksPatchValidator),
                schema_1.hooks.resolveData(stocks_schema_1.v1DataStocksPatchResolver)
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.v1DataStocks = v1DataStocks;
