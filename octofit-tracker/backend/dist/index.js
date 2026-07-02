"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const config_1 = require("./config");
const database_1 = require("./config/database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'OctoFit Tracker API is running',
        apiBaseUrl: (0, config_1.getApiBaseUrl)(),
    });
});
app.use('/api', api_1.default);
(0, database_1.connectDatabase)()
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(config_1.PORT, '0.0.0.0', () => {
        console.log(`Backend listening on port ${config_1.PORT}`);
        console.log(`API base URL: ${(0, config_1.getApiBaseUrl)()}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});
