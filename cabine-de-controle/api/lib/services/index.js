"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const stocks_1 = require("./v1/data/stocks/stocks");
const stocks_2 = require("./v1/stocks/stocks");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(stocks_1.v1DataStocks);
    app.configure(stocks_2.v1Stocks);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
