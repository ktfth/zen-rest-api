"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stocks = void 0;
const financial_data_1 = require("../client/financial-data");
const ts_retrofit_1 = require("ts-retrofit");
const stocks = async (context) => {
    const financialData = context.app.get('financialData');
    const stocksService = new ts_retrofit_1.ServiceBuilder()
        .setEndpoint(financialData.url)
        .build(financial_data_1.StocksService);
    const response = await stocksService.getTimeSeries({
        symbol: context.params.query.symbol,
        interval: '1min',
        apikey: financialData.apiKey,
    });
    context.data.stocks = response.data;
    console.log(`Running hook stocks on ${context.path}.${context.method}`);
};
exports.stocks = stocks;
