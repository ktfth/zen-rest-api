"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.V1StocksService = void 0;
// This is a skeleton for a custom service class. Remove or add the methods you need here
class V1StocksService {
    constructor(options) {
        this.options = options;
    }
    async find(_params) {
        return [];
    }
    async get(id, _params) {
        return {
            id: 0,
        };
    }
    async create(data, params) {
        const service = this.options.app.service('v1/data/stocks');
        const request = await service.create({
            stocks: data.stocks,
        });
        const stocks = request;
        return {
            id: stocks.id,
            ...data,
        };
    }
    // This method has to be added to the 'methods' option to make it available to clients
    async update(id, data, _params) {
        return {
            id: 0,
            ...data
        };
    }
    async patch(id, data, _params) {
        return {
            id: 0,
            ...data
        };
    }
    async remove(id, _params) {
        return {
            id: 0,
        };
    }
}
exports.V1StocksService = V1StocksService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
