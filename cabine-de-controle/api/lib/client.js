"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.userServiceMethods = exports.v1StocksServiceMethods = exports.v1DataStocksServiceMethods = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
const feathers_1 = require("@feathersjs/feathers");
const authentication_client_1 = __importDefault(require("@feathersjs/authentication-client"));
exports.v1DataStocksServiceMethods = ['find', 'get', 'create', 'patch', 'remove'];
exports.v1StocksServiceMethods = ['find', 'get', 'create', 'patch', 'remove'];
exports.userServiceMethods = ['find', 'get', 'create', 'patch', 'remove'];
/**
 * Returns a typed client for the api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
const createClient = (connection, authenticationOptions = {}) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    client.configure((0, authentication_client_1.default)(authenticationOptions));
    client.use('users', connection.service('users'), {
        methods: exports.userServiceMethods
    });
    client.use('v1/stocks', connection.service('v1/stocks'), {
        methods: exports.v1StocksServiceMethods
    });
    client.use('v1/data/stocks', connection.service('v1/data/stocks'), {
        methods: exports.v1DataStocksServiceMethods
    });
    return client;
};
exports.createClient = createClient;
