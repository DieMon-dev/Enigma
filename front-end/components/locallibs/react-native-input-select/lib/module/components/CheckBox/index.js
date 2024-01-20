import React from 'react';
import { Pressable, Text, StyleSheet, Image, View } from 'react-native';
import { colors } from '../../styles/colors';
import { CHECKBOX_SIZE } from '../../constants';
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
    borderColor: disabled ? colors.disabled : (checkboxComponentStyles === null || checkboxComponentStyles === void 0 || (_checkboxComponentSty2 = checkboxComponentStyles.checkboxStyle) === null || _checkboxComponentSty2 === void 0 ? void 0 : _checkboxComponentSty2.borderColor) || (checkboxStyle === null || checkboxStyle === void 0 ? void 0 : checkboxStyle.borderColor) || styles.checkbox.borderColor
  };
  return /*#__PURE__*/React.createElement(Pressable, {
    onPress: onChange ? () => onChange(!value) : null,
    style: [styles.checkboxContainer],
    disabled: disabled
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.checkbox, (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxStyle) || checkboxStyle, fillColor]
  }, checkboxComponent || /*#__PURE__*/React.createElement(Image, {
    source: require('../../asset/check.png'),
    style: [{
      height: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxSize) || checkboxSize || CHECKBOX_SIZE,
      width: (checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxSize) || checkboxSize || CHECKBOX_SIZE
    }]
  })), label && label !== '' && /*#__PURE__*/React.createElement(Text, {
    style: [(checkboxComponentStyles === null || checkboxComponentStyles === void 0 ? void 0 : checkboxComponentStyles.checkboxLabelStyle) || checkboxLabelStyle, styles.labelStyle]
  }, label));
};
const styles = StyleSheet.create({
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
export default CheckBox;
//# sourceMappingURL=index.js.map