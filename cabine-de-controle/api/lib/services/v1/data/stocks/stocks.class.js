"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.V1DataStocksService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class V1DataStocksService extends knex_1.KnexService {
}
exports.V1DataStocksService = V1DataStocksService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'stocks'
    };
};
exports.getOptions = getOptions;
