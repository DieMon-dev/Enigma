function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';
import { inputStyles } from '../../styles/input';
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
  return /*#__PURE__*/React.createElement(Pressable, {
    onPress: () => handleToggleModal(),
    style: _ref2 => {
      let {
        pressed
      } = _ref2;
      return [pressed && {
        ...inputStyles.inputFocusState,
        borderColor: primaryColor
      }, {
        ...inputStyles.input,
        ...dropdownStyle
      }, error &&
      //this must be last
      error !== '' && !pressed && {
        ...inputStyles.inputFocusErrorState,
        ...dropdownErrorStyle
      }];
    },
    disabled: disabled
  }, /*#__PURE__*/React.createElement(ScrollView, {
    horizontal: true,
    alwaysBounceHorizontal: true,
    showsHorizontalScrollIndicator: false
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.selectedItemsContainer,
    onStartShouldSetResponder: () => true
  }, isMultiple ? (_getSelectedItemsLabe = getSelectedItemsLabel()) === null || _getSelectedItemsLabe === void 0 ? void 0 : _getSelectedItemsLabe.map((label, i) => /*#__PURE__*/React.createElement(DropdownContent, {
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
  })) : /*#__PURE__*/React.createElement(DropdownContent, {
    onPress: () => {
      handleToggleModal();
      setIndexOfSelectedItem(getSelectedItemsLabel()); // immediately scrolls to list item with the specified label when modal
    },

    style: [styles.blackText, selectedItemStyle],
    label: getSelectedItemsLabel(),
    disabled: disabled
  }), !selectedItem && (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0 && /*#__PURE__*/React.createElement(DropdownContent, {
    onPress: () => handleToggleModal(),
    style: [styles.blackText, placeholderStyle],
    label: placeholder ?? 'Select an option',
    disabled: disabled
  }))), /*#__PURE__*/React.createElement(View, {
    style: [styles.iconStyle, dropdownIconStyle]
  }, dropdownIcon || /*#__PURE__*/React.createElement(Image, {
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
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    onPress: () => onPress()
  }, rest), /*#__PURE__*/React.createElement(Text, {
    style: style
  }, label));
};
const styles = StyleSheet.create({
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
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginRight: 10,
    overflow: 'hidden'
  },
  blackText: {
    color: colors.black
  }
});
export default DropdownSelectedItemsView;
//# sourceMappingURL=DropdownSelectedItemsView.js.map