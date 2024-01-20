"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractPropertyFromArray = exports.escapeRegExp = void 0;
/**
 * Extract property from array
 */

const extractPropertyFromArray = (arr, property) => {
  let extractedValue = arr === null || arr === void 0 ? void 0 : arr.map(item => item[property]);
  return extractedValue;
};
exports.extractPropertyFromArray = extractPropertyFromArray;
const escapeRegExp = text => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
exports.escapeRegExp = escapeRegExp;
//# sourceMappingURL=index.js.map