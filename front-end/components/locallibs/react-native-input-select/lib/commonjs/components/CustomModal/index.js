"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _colors = require("../../styles/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CustomModal = _ref => {
  let {
    open,
    onRequestClose,
    modalBackgroundStyle,
    modalOptionsContainerStyle,
    modalProps,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, _extends({
    transparent: true,
    visible: open,
    onRequestClose: () => onRequestClose(),
    animationType: "fade"
  }, modalProps), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => onRequestClose(),
    style: [styles.modalContainer, styles.modalBackgroundStyle, modalBackgroundStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: () => {}
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: [styles.modalOptionsContainer, modalOptionsContainerStyle]
  }, children))));
};
const styles = _reactNative.StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalOptionsContainer: {
    maxHeight: '50%',
    backgroundColor: _colors.colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 5
  }
});
var _default = CustomModal;
exports.default = _default;
//# sourceMappingURL=index.js.map