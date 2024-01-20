"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _colors = require("../../styles/colors");
var _input = require("../../styles/input");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DropdownSelectedItemsView = _ref => {
  var _getSelectedItemsLabe;
  let {
    placeholder,
    error,
    getSelectedItemsLabel,
    handleToggleModal,
    isMultiple,
    selectedItem,
    selectedItems,
    dropdownIcon,
    dropdownStyle,
    dropdownIconStyle,
    selectedItemStyle,
    placeholderStyle,
    multipleSelectedItemStyle,
    dropdownErrorStyle,
    primaryColor,
    disabled,
    setIndexOfSelectedItem
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: () => handleToggleModal(),
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [pressed && {
        ..._input.inputStyles.inputFocusState,
        borderColor: primaryColor
      }, {
        ..._input.inputStyles.input,
        ...dropdownStyle
      }, error &&
      //this must be last
      error !== '' && !pressed && {
        ..._input.inputStyles.inputFocusErrorState,
        ...dropdownErrorStyle
      }];
    },
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    horizontal: true,
    alwaysBounceHorizontal: true,
    showsHorizontalScrollIndicator: false
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.selectedItemsContainer,
    onStartShouldSetResponder: () => true
  }, isMultiple ? (_getSelectedItemsLabe = getSelectedItemsLabel()) === null || _getSelectedItemsLabe === void 0 ? void 0 : _getSelectedItemsLabe.map((label, i) => /*#__PURE__*/_react.default.createElement(DropdownContent, {
    onPress: () => {
      handleToggleModal();
      setIndexOfSelectedItem(label); // immediately scrolls to list item with the specified label when modal
    },

    key: `react-native-input-select-${Math.random()}-${i}`,
    style: [styles.selectedItems, {
      backgroundColor: primaryColor
    }, multipleSelectedItemStyle],
    label: label,
    disabled: disabled
  })) : /*#__PURE__*/_react.default.createElement(DropdownContent, {
    onPress: () => {
      handleToggleModal();
      setIndexOfSelectedItem(getSelectedItemsLabel()); // immediately scrolls to list item with the specified label when modal
    },

    style: [styles.blackText, selectedItemStyle],
    label: getSelectedItemsLabel(),
    disabled: disabled
  }), !selectedItem && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0 && /*#__PURE__*/_react.default.createElement(DropdownContent, {
    onPress: () => handleToggleModal(),
    style: [styles.blackText, placeholderStyle],
    label: placeholder ?? 'Select an option',
    disabled: disabled
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.iconStyle, dropdownIconStyle]
  }, dropdownIcon || /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../../asset/arrow-down.png')
  })));
};
const DropdownContent = _ref3 => {
  let {
    onPress,
    style,
    label,
    ...rest
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, _extends({
    onPress: () => onPress()
  }, rest), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: style
  }, label));
};
const styles = _reactNative.StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    right: 25,
    top: 25
  },
  selectedItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  selectedItems: {
    color: _colors.colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: _colors.colors.primary,
    marginRight: 10,
    overflow: 'hidden'
  },
  blackText: {
    color: _colors.colors.black
  }
});
var _default = DropdownSelectedItemsView;
exports.default = _default;
//# sourceMappingURL=DropdownSelectedItemsView.js.map