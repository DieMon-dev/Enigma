function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Platform } from 'react-native';
import { inputStyles } from '../../styles/input';
export const Input = _ref => {
  let {
    placeholder,
    value,
    onChangeText,
    style,
    primaryColor,
    textInputContainerStyle,
    ...rest
  } = _ref;
  const [isFocused, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, textInputContainerStyle]
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    placeholder: placeholder,
    style: [inputStyles.input, Platform.select({
      web: {
        outlineColor: primaryColor
      }
    }), isFocused && {
      borderColor: primaryColor
    }, style],
    onFocus: () => {
      setFocus(true);
    },
    onBlur: () => setFocus(false),
    value: value,
    onChangeText: onChangeText,
    returnKeyType: "search"
  }, rest)));
};
const styles = StyleSheet.create({
  container: {
    margin: 23
  }
});
export default Input;
//# sourceMappingURL=index.js.map