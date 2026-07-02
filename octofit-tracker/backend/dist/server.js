"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const config_1 = require("./config");
const database_1 = require("./config/database");
const createServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/api/health', (_req, res) => {
        const codespaceName = process.env.CODESPACE_NAME;
        const apiBaseUrl = codespaceName
            ? `https://${codespaceName}-8000.app.github.dev`
            : 'http://localhost:8000';
        res.json({
            status: 'ok',
            message: 'OctoFit Tracker API is running',
            apiBaseUrl,
        });
    });
    app.use('/api', api_1.default);
    return app;
};
exports.createServer = createServer;
const startServer = async () => {
    const app = (0, exports.createServer)();
    await (0, database_1.connectDatabase)();
    app.listen(config_1.PORT, '0.0.0.0', () => {
        const codespaceName = process.env.CODESPACE_NAME;
        const apiBaseUrl = codespaceName
            ? `https://${codespaceName}-8000.app.github.dev`
            : 'http://localhost:8000';
        console.log(`Backend listening on port ${config_1.PORT}`);
        console.log(`API base URL: ${apiBaseUrl}`);
    });
};
exports.startServer = startServer;
