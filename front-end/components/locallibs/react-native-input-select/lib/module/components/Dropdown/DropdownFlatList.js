function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DropdownListItem from './DropdownListItem';
import { ItemSeparatorComponent, ListEmptyComponent } from '../Others';
const DropdownFlatList = _ref => {
  let {
    options,
    optionLabel,
    optionValue,
    isMultiple,
    isSearchable,
    selectedItems,
    selectedItem,
    handleMultipleSelections,
    handleSingleSelection,
    primaryColor,
    checkboxSize,
    // kept for backwards compatibility to be removed in future release
    checkboxStyle,
    // kept for backwards compatibility to be removed in future release
    checkboxLabelStyle,
    // kept for backwards compatibility to be removed  in future release
    checkboxComponentStyles,
    checkboxComponent,
    listComponentStyles,
    listIndex,
    emptyListMessage,
    ...rest
  } = _ref;
  const flatlistRef = useRef(null);
  const scrollToItem = index => {
    var _flatlistRef$current;
    (_flatlistRef$current = flatlistRef.current) === null || _flatlistRef$current === void 0 ? void 0 : _flatlistRef$current.scrollToIndex({
      index,
      animated: true
    });
  };
  useEffect(() => {
    if (listIndex.itemIndex >= 0) {
      scrollToItem(listIndex.itemIndex);
    }
  }, [listIndex]);
  return /*#__PURE__*/React.createElement(FlatList, _extends({
    data: options,
    extraData: isMultiple ? selectedItems : selectedItem,
    initialNumToRender: 5,
    ListEmptyComponent: /*#__PURE__*/React.createElement(ListEmptyComponent, {
      listEmptyComponentStyle: listComponentStyles === null || listComponentStyles === void 0 ? void 0 : listComponentStyles.listEmptyComponentStyle,
      emptyListMessage: emptyListMessage
    }),
    contentContainerStyle: [isSearchable ? {
      paddingTop: 0
    } : styles.contentContainerStyle],
    ItemSeparatorComponent: () => /*#__PURE__*/React.createElement(ItemSeparatorComponent, {
      itemSeparatorStyle: listComponentStyles === null || listComponentStyles === void 0 ? void 0 : listComponentStyles.itemSeparatorStyle
    }),
    renderItem: item => _renderItem(item, {
      optionLabel,
      optionValue,
      isMultiple,
      selectedOption: isMultiple ? selectedItems : selectedItem,
      onChange: isMultiple ? handleMultipleSelections : handleSingleSelection,
      scrollToItem,
      primaryColor,
      checkboxSize,
      // kept for backwards compatibility
      checkboxStyle,
      // kept for backwards compatibility
      checkboxLabelStyle,
      // kept for backwards compatibility
      checkboxComponentStyles,
      checkboxComponent
    }),
    keyExtractor: (_item, index) => `Options${index}`,
    ref: flatlistRef,
    onScrollToIndexFailed: _ref2 => {
      let {
        index
      } = _ref2;
      setTimeout(() => {
        scrollToItem(index);
      }, 500);
    }
  }, rest));
};
const _renderItem = (_ref3, props) => {
  let {
    item
  } = _ref3;
  return /*#__PURE__*/React.createElement(DropdownListItem, {
    item: item,
    optionLabel: props.optionLabel,
    optionValue: props.optionValue,
    isMultiple: props.isMultiple,
    selectedOption: props.selectedOption,
    onChange: props.onChange,
    primaryColor: props.primaryColor,
    checkboxSize: props.checkboxSize,
    checkboxStyle: props.checkboxStyle,
    checkboxLabelStyle: props.checkboxLabelStyle,
    scrollToItem: props.scrollToItem,
    checkboxComponentStyles: props.checkboxComponentStyles,
    checkboxComponent: props.checkboxComponent
  });
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 20
  }
});
export default DropdownFlatList;
//# sourceMappingURL=DropdownFlatList.js.map