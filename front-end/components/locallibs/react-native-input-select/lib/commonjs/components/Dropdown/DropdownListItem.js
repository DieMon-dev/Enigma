"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CheckBox = _interopRequireDefault(require("../CheckBox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DropdownListItem = _ref => {
  let {
    item,
    optionLabel,
    optionValue,
    isMultiple,
    selectedOption,
    onChange,
    primaryColor,
    checkboxSize,
    checkboxStyle,
    checkboxLabelStyle,
    checkboxComponentStyles,
    checkboxComponent
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.listItemContainerStyle,
    onPress: item.disabled ? () => {} : () => onChange(item[optionValue]) // intentionally didn't use the disable property
  }, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
    value: isMultiple ? selectedOption.includes(item[optionValue]) : [selectedOption].includes(item[optionValue]),
    label: item[optionLabel],
    onChange: () => onChange(item[optionValue]),
    primaryColor: primaryColor,
    checkboxSize: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxSize) || checkboxSize,
    checkboxStyle: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxStyle) || checkboxStyle,
    checkboxLabelStyle: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxLabelStyle) || checkboxLabelStyle,
    disabled: item.disabled,
    checkboxComponent: checkboxComponent
  }));
};
const styles = _reactNative.StyleSheet.create({
  listItemContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
var _default = /*#__PURE__*/(0, _react.memo)(DropdownListItem);
exports.default = _default;
//# sourceMappingURL=DropdownListItem.js.map