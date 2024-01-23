import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '../CheckBox';
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
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.listItemContainerStyle,
    onPress: item.disabled ? () => {} : () => onChange(item[optionValue]) // intentionally didn't use the disable property
  }, /*#__PURE__*/React.createElement(CheckBox, {
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
const styles = StyleSheet.create({
  listItemContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
export default /*#__PURE__*/memo(DropdownListItem);
//# sourceMappingURL=DropdownListItem.js.map