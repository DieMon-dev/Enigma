function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Modal, TouchableOpacity, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../styles/colors';
const CustomModal = _ref => {
  let {
    open,
    onRequestClose,
    modalBackgroundStyle,
    modalOptionsContainerStyle,
    modalProps,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Modal, _extends({
    transparent: true,
    visible: open,
    onRequestClose: () => onRequestClose(),
    animationType: "fade"
  }, modalProps), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => onRequestClose(),
    style: [styles.modalContainer, styles.modalBackgroundStyle, modalBackgroundStyle]
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: () => {}
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: [styles.modalOptionsContainer, modalOptionsContainerStyle]
  }, children))));
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalOptionsContainer: {
    maxHeight: '50%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 5
  }
});
export default CustomModal;
//# sourceMappingURL=index.js.map