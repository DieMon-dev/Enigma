/**
 * Extract property from array
 */

export const extractPropertyFromArray = (arr, property) => {
  let extractedValue = arr === null || arr === void 0 ? void 0 : arr.map(item => item[property]);
  return extractedValue;
};
export const escapeRegExp = text => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
//# sourceMappingURL=index.js.map