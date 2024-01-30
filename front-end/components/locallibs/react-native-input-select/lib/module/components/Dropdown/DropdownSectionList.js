function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState, useRef } from 'react';
import { SectionList, StyleSheet } from 'react-native';
import DropdownListItem from './DropdownListItem';
import { ItemSeparatorComponent, ListEmptyComponent, SectionHeaderTitle } from '../Others';
import { extractPropertyFromArray } from '../../utils';
const DropdownSectionList = _ref => {
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
    checkboxStyle,
    checkboxLabelStyle,
    checkboxComponentStyles,
    checkboxComponent,
    listComponentStyles,
    listIndex,
    emptyListMessage,
    ...rest
  } = _ref;
  const [expandedSections, setExpandedSections] = useState(new Set());

  /**
   * Expand all sections
   */
  useEffect(() => {
    let initialState = new Set(extractPropertyFromArray(options, 'title'));
    setExpandedSections(initialState);
  }, [options]);

  /**
   * @param title
   */
  const handleToggleListExpansion = title => {
    setExpandedSections(expandedSectionsState => {
      // Using Set here but you can use an array too
      const next = new Set(expandedSectionsState);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  /**
   * @description Scroll to item location
   */

  const sectionlistRef = useRef(null);
  const scrollToLocation = listIndex => {
    var _sectionlistRef$curre;
    (_sectionlistRef$curre = sectionlistRef.current) === null || _sectionlistRef$curre === void 0 ? void 0 : _sectionlistRef$curre.scrollToLocation({
      sectionIndex: listIndex.sectionIndex,
      animated: true,
      itemIndex: listIndex.itemIndex
    });
  };
  useEffect(() => {
    if (listIndex.itemIndex >= 0 && listIndex.sectionIndex >= 0) {
      scrollToLocation(listIndex);
    }
  }, [listIndex]);
  return /*#__PURE__*/React.createElement(SectionList, _extends({
    sections: options,
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
      primaryColor,
      checkboxSize,
      // kept for backwards compatibility
      checkboxStyle,
      // kept for backwards compatibility
      checkboxLabelStyle,
      // kept for backwards compatibility
      checkboxComponentStyles,
      checkboxComponent,
      expandedSections
    }),
    renderSectionHeader: _ref2 => {
      let {
        section: {
          title
        }
      } = _ref2;
      return /*#__PURE__*/React.createElement(SectionHeaderTitle, {
        title: title,
        sectionHeaderStyle: listComponentStyles === null || listComponentStyles === void 0 ? void 0 : listComponentStyles.sectionHeaderStyle,
        onPress: () => handleToggleListExpansion(title),
        isExpanded: expandedSections.has(title)
      });
    },
    keyExtractor: (_item, index) => `Options${index}`,
    stickySectionHeadersEnabled: false,
    ref: sectionlistRef,
    onScrollToIndexFailed: () => {
      setTimeout(() => {
        scrollToLocation(listIndex);
      }, 500);
    }
  }, rest));
};
const _renderItem = (_ref3, props) => {
  let {
    section: {
      title
    },
    item
  } = _ref3;
  const isExpanded = props === null || props === void 0 ? void 0 : props.expandedSections.has(title);

  //return null if it is not expanded
  if (!isExpanded) return null;
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
    checkboxComponentStyles: props.checkboxComponentStyles,
    checkboxComponent: props.checkboxComponent
  });
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 20
  }
});
export default DropdownSectionList;
//# sourceMappingURL=DropdownSectionList.js.map