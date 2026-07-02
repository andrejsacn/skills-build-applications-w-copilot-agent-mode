"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiBaseUrl = exports.PORT = void 0;
exports.PORT = Number(process.env.PORT || 8000);
const getApiBaseUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
};
exports.getApiBaseUrl = getApiBaseUrl;
