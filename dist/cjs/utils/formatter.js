"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPriceRounded = exports.formatPriceReadable = exports.formatNumber = exports.formatName = exports.formatDateRange = exports.formatDateTime = exports.formatDate = void 0;
const moment_1 = __importDefault(require("moment"));
const formatDate = (date) => (0, moment_1.default)(date).format('MMM DD');
exports.formatDate = formatDate;
const formatDateTime = (date) => (0, moment_1.default)(date).format('YYYY MMM DD HH:mm');
exports.formatDateTime = formatDateTime;
const formatDateRange = (from, to) => `${(0, exports.formatDateTime)(from)} - ${(0, exports.formatDateTime)(to)}`;
exports.formatDateRange = formatDateRange;
const formatName = (user) => {
    return `${user.firstname} ${user.lastname}`;
};
exports.formatName = formatName;
const formatNumber = (num) => {
    return Number(num).toFixed(2);
};
exports.formatNumber = formatNumber;
const formatPriceReadable = (num, curr) => {
    return `${curr ? '€' : ''}${Number(num).toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
};
exports.formatPriceReadable = formatPriceReadable;
const formatPriceRounded = (num) => {
    return Number(num).toLocaleString('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};
exports.formatPriceRounded = formatPriceRounded;
