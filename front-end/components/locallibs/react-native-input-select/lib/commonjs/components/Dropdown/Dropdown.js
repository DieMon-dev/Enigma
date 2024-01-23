"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _DropdownSelectedItemsView = _interopRequireDefault(require("./DropdownSelectedItemsView"));
var _colors = require("../../styles/colors");
var _typography = require("../../styles/typography");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Dropdown = _ref => {
  let {
    label,
    placeholder,
    helperText,
    error,
    getSelectedItemsLabel,
    handleToggleModal,
    isMultiple,
    selectedItem,
    selectedItems,
    dropdownIcon,
    labelStyle,
    dropdownStyle,
    dropdownIconStyle,
    dropdownContainerStyle,
    selectedItemStyle,
    placeholderStyle,
    multipleSelectedItemStyle,
    dropdownErrorStyle,
    dropdownErrorTextStyle,
    dropdownHelperTextStyle,
    primaryColor,
    disabled,
    setIndexOfSelectedItem
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.dropdownInputContainer, dropdownContainerStyle]
  }, label && label !== '' && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.label, labelStyle]
  }, label), /*#__PURE__*/_react.default.createElement(_DropdownSelectedItemsView.default, {
    placeholder: placeholder,
    error: error,
    getSelectedItemsLabel: getSelectedItemsLabel,
    handleToggleModal: handleToggleModal,
    isMultiple: isMultiple,
    selectedItem: selectedItem,
    selectedItems: selectedItems,
    dropdownIcon: dropdownIcon,
    dropdownStyle: dropdownStyle,
    dropdownIconStyle: dropdownIconStyle,
    selectedItemStyle: selectedItemStyle,
    multipleSelectedItemStyle: multipleSelectedItemStyle,
    dropdownErrorStyle: dropdownErrorStyle,
    primaryColor: primaryColor,
    disabled: disabled,
    placeholderStyle: placeholderStyle,
    setIndexOfSelectedItem: setIndexOfSelectedItem
  }), error && error !== '' && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.error, dropdownErrorTextStyle]
  }, error), helperText && helperText !== '' && !error && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.helper, dropdownHelperTextStyle]
  }, helperText));
};
const styles = _reactNative.StyleSheet.create({
  label: {
    marginBottom: 16,
    color: _colors.colors.gray,
    ..._typography.typography.caption
  },
  error: {
    color: _colors.colors.red,
    marginTop: 8,
    ..._typography.typography.caption
  },
  helper: {
    marginTop: 8,
    color: _colors.colors.primary,
    ..._typography.typography.caption
  },
  dropdownInputContainer: {
    marginBottom: 23,
    width: '100%'
  },
  blackText: {
    color: _colors.colors.black
  }
});
var _default = Dropdown;
exports.default = _default;
//# sourceMappingURL=Dropdown.js.map