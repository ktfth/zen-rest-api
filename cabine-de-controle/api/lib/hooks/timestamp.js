"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = void 0;
const timestamp = async (context) => {
    context.data.timestamp = new Date().getTime();
    console.log(`Running hook timestamp on ${context.path}.${context.method}`);
};
exports.timestamp = timestamp;
