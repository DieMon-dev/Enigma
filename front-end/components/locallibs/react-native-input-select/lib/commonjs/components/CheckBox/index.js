"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _colors = require("../../styles/colors");
var _constants = require("../../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
  * Individual props `checkboxSize`, `checkboxStyle`, `checkboxLabelStyle` would be replaced in future releases
  * and replaced with a single object `checkboxComponentStyles` e.g

```js
const checkboxComponentStyles = {
  checkboxSize: 20,
  checkboxStyle: {
    backgroundColor: 'purple',
    borderRadius: 30,
    padding: 10,
    borderColor: 'red',
  },
  checkboxLabelStyle: { color: 'red', fontSize: 20 },
};
```
  */

const CheckBox = _ref => {
  var _checkboxComponentSty, _checkboxComponentSty2;
  let {
    label,
    value,
    disabled,
    primaryColor,
    checkboxSize,
    checkboxStyle,
    checkboxLabelStyle,
    checkboxComponentStyles,
    checkboxComponent,
    onChange
  } = _ref;
  // const { checkboxSize, checkboxStyle, checkboxLabelStyle } =
  //   checkboxComponentStyles || undefined;
  const fillColor = {
    backgroundColor: disabled ? '#d3d3d3' : value ? (checkboxComponentStyles === null || checkboxComponentStyles === void 0 || (_checkboxComponentSty = checkboxComponentStyles.checkboxStyle) === null || _checkboxComponentSty === void 0 ? void 0 : _checkboxComponentSty.backgroundColor) || (checkboxStyle === null || checkboxStyle === void 0 ? void 0 : checkboxStyle.backgroundColor) || primaryColor || 'green' : 'white',
    borderColor: disabled ? _colors.colors.disabled : (checkboxComponentStyles === null || checkboxComponentStyles === void 0 || (_checkboxComponentSty2 = checkboxComponentStyles.checkboxStyle) === null || _checkboxComponentSty2 === void 0 ? void 0 : _checkboxComponentSty2.borderColor) || (checkboxStyle === null || checkboxStyle === void 0 ? void 0 : checkboxStyle.borderColor) || styles.checkbox.borderColor
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onChange ? () => onChange(!value) : null,
    style: [styles.checkboxContainer],
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.checkbox, (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxStyle) || checkboxStyle, fillColor]
  }, checkboxComponent || /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../../asset/check.png'),
    style: [{
      height: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxSize) || checkboxSize || _constants.CHECKBOX_SIZE,
      width: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxSize) || checkboxSize || _constants.CHECKBOX_SIZE
    }]
  })), label && label !== '' && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [(checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxLabelStyle) || checkboxLabelStyle, styles.labelStyle]
  }, label));
};
const styles = _reactNative.StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  checkbox: {
    padding: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: 'black'
  },
  labelStyle: {
    marginLeft: 10
  }
});
var _default = CheckBox;
exports.default = _default;
//# sourceMappingURL=index.js.map