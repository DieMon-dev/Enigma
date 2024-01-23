function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Input from './components/Input';
import CheckBox from './components/CheckBox';
import Dropdown from './components/Dropdown/Dropdown';
import DropdownFlatList from './components/Dropdown/DropdownFlatList';
import DropdownSectionList from './components/Dropdown/DropdownSectionList';
import CustomModal from './components/CustomModal';
import { colors } from './styles/colors';
import { DEFAULT_OPTION_LABEL, DEFAULT_OPTION_VALUE } from './constants';
import { escapeRegExp, extractPropertyFromArray } from './utils';
export const DropdownSelect = _ref => {
  var _extractPropertyFromA, _searchControls$textI;
  let {
    placeholder,
    label,
    error,
    helperText,
    options,
    optionLabel,
    optionValue,
    onValueChange,
    selectedValue,
    isMultiple,
    isSearchable,
    dropdownIcon,
    labelStyle,
    placeholderStyle,
    dropdownStyle,
    dropdownIconStyle,
    dropdownContainerStyle,
    dropdownErrorStyle,
    dropdownErrorTextStyle,
    dropdownHelperTextStyle,
    selectedItemStyle,
    multipleSelectedItemStyle,
    modalBackgroundStyle,
    modalOptionsContainerStyle,
    searchInputStyle,
    // kept for backwards compatibility
    primaryColor,
    disabled,
    checkboxSize,
    // kept for backwards compatibility
    checkboxStyle,
    // kept for backwards compatibility
    checkboxLabelStyle,
    // kept for backwards compatibility
    checkboxComponentStyles,
    checkboxComponent,
    listHeaderComponent,
    listFooterComponent,
    listComponentStyles,
    modalProps,
    hideModal = false,
    listControls,
    searchControls,
    ...rest
  } = _ref;
  const [newOptions, setNewOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState(''); // for single selection
  const [selectedItems, setSelectedItems] = useState([]); // for multiple selection
  const [searchValue, setSearchValue] = useState('');
  const [listIndex, setListIndex] = useState({
    itemIndex: -1,
    sectionIndex: -1
  }); // for scrollToIndex in Sectionlist and Flatlist

  useEffect(() => {
    setNewOptions(options);
    return () => {};
  }, [options]);
  useEffect(() => {
    isMultiple ? setSelectedItems(Array.isArray(selectedValue) ? selectedValue : []) : setSelectedItem(selectedValue);
    return () => {};
  }, [selectedValue, isMultiple, onValueChange]);

  /*===========================================
   * List type
   *==========================================*/

  // check the structure of the new options array to determine if it is a section list or a
  const isSectionList = newOptions === null || newOptions === void 0 ? void 0 : newOptions.some(item => item.title && item.data && Array.isArray(item.data));
  const ListTypeComponent = isSectionList ? DropdownSectionList : DropdownFlatList;
  const modifiedSectionData = (_extractPropertyFromA = extractPropertyFromArray(newOptions, 'data')) === null || _extractPropertyFromA === void 0 ? void 0 : _extractPropertyFromA.flat();

  /**
   * `options` is the original array, it never changes. (Do not use except you really need the original array) .
   * `newOptions` is a copy of options but can be mutated by `setNewOptions`, as a result, the value many change.
   * `modifiedOptions` should only be used for computations. It has the same structure for both `FlatList` and `SectionList`
   */
  const modifiedOptions = isSectionList ? modifiedSectionData : newOptions;
  const optLabel = optionLabel || DEFAULT_OPTION_LABEL;
  const optValue = optionValue || DEFAULT_OPTION_VALUE;

  /*===========================================
   * Selection handlers
   *==========================================*/
  const handleSingleSelection = value => {
    if (selectedItem === value) {
      setSelectedItem(null);
      onValueChange(null); // send value to parent
    } else {
      setSelectedItem(value);
      onValueChange(value); // send value to parent
      setOpen(false); // close modal upon selection
    }
  };

  const handleMultipleSelections = value => {
    setSelectedItems(prevVal => {
      var _selectedValues;
      let selectedValues = [...prevVal];
      if ((_selectedValues = selectedValues) !== null && _selectedValues !== void 0 && _selectedValues.includes(value)) {
        selectedValues = selectedValues.filter(item => item !== value);
      } else {
        selectedValues.push(value);
      }
      onValueChange(selectedValues); // send value to parent
      return selectedValues;
    });
  };
  const removeDisabledItems = items => {
    return items === null || items === void 0 ? void 0 : items.filter(item => !item.disabled);
  };
  const handleSelectAll = () => {
    setSelectAll(prevVal => {
      const selectedValues = [];

      // don't select disabled items
      const filteredOptions = removeDisabledItems(isSectionList ? extractPropertyFromArray(options, 'data').flat() : options);
      if (!prevVal) {
        for (let i = 0; i < filteredOptions.length; i++) {
          selectedValues.push(filteredOptions[i][optValue]);
        }
      }
      setSelectedItems(selectedValues);
      onValueChange(selectedValues); // send value to parent
      return !prevVal;
    });
    if (typeof (listControls === null || listControls === void 0 ? void 0 : listControls.selectAllCallback) === 'function' && !selectAll) {
      listControls.selectAllCallback();
    }
    if (typeof (listControls === null || listControls === void 0 ? void 0 : listControls.unselectAllCallback) === 'function' && selectAll) {
      listControls.unselectAllCallback();
    }
  };

  /*===========================================
   * Handle side effects
   *==========================================*/
  const checkSelectAll = useCallback(selectedValues => {
    var _removeDisabledItems;
    //if the list contains disabled values, those values will not be selected
    if (((_removeDisabledItems = removeDisabledItems(modifiedOptions)) === null || _removeDisabledItems === void 0 ? void 0 : _removeDisabledItems.length) === (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [modifiedOptions]);

  // anytime the selected items change, check if it is time to set `selectAll` to true
  useEffect(() => {
    if (isMultiple) {
      checkSelectAll(selectedItems);
    }
    return () => {};
  }, [checkSelectAll, isMultiple, selectedItems]);

  /*===========================================
   * Get label handler
   *==========================================*/
  const getSelectedItemsLabel = () => {
    if (isMultiple && Array.isArray(selectedItems)) {
      let selectedLabels = [];
      selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.forEach(element => {
        var _modifiedOptions$find;
        let selectedItemLabel = modifiedOptions === null || modifiedOptions === void 0 || (_modifiedOptions$find = modifiedOptions.find(item => item[optValue] === element)) === null || _modifiedOptions$find === void 0 ? void 0 : _modifiedOptions$find[optLabel];
        selectedLabels.push(selectedItemLabel);
      });
      return selectedLabels;
    }
    let selectedItemLabel = modifiedOptions === null || modifiedOptions === void 0 ? void 0 : modifiedOptions.find(item => item[optValue] === selectedItem);
    return selectedItemLabel === null || selectedItemLabel === void 0 ? void 0 : selectedItemLabel[optLabel];
  };

  /*===========================================
   * Search
   *==========================================*/
  const onSearch = value => {
    setSearchValue(value);
    let searchText = escapeRegExp(value).toString().toLocaleLowerCase().trim();
    const regexFilter = new RegExp(searchText, 'i');

    // Because the options array will be mutated while searching, we have to search with the original array
    const searchResults = isSectionList ? searchSectionList(options, regexFilter) : searchFlatList(options, regexFilter);
    setNewOptions(searchResults);
  };
  const searchFlatList = (flatList, regexFilter) => {
    const searchResults = flatList.filter(item => {
      if (item[optLabel].toString().toLowerCase().search(regexFilter) !== -1 || item[optValue].toString().toLowerCase().search(regexFilter) !== -1) {
        return true;
      }
      return false;
    });
    return searchResults;
  };
  const searchSectionList = (sectionList, regexFilter) => {
    const searchResults = sectionList.map(listItem => {
      const filteredData = listItem.data.filter(item => {
        if (item[optLabel].toString().toLowerCase().search(regexFilter) !== -1 || item[optValue].toString().toLowerCase().search(regexFilter) !== -1) {
          return true;
        }
        return false;
      });
      return {
        ...listItem,
        data: filteredData
      };
    });
    return searchResults;
  };

  /*===========================================
   * Modal
   *==========================================*/
  const handleToggleModal = () => {
    if (disabled) {
      // protecting any toggleModal invocation when Dropdown is disabled by not activating state
      return;
    }
    setOpen(!open);
    setSearchValue('');
    setNewOptions(options);
    setListIndex({
      itemIndex: -1,
      sectionIndex: -1
    });
  };
  useEffect(() => {
    if (hideModal) {
      setOpen(false);
    }
    return () => {};
  }, [hideModal]);
  let primary = primaryColor || colors.gray;

  /*===========================================
   * setIndexOfSelectedItem - For ScrollToIndex
   *==========================================*/
  const setIndexOfSelectedItem = selectedLabel => {
    isSectionList ? options === null || options === void 0 ? void 0 : options.map((item, sectionIndex) => {
      var _item$data;
      item === null || item === void 0 || (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data.find((dataItem, itemIndex) => {
        if (dataItem[optLabel] === selectedLabel) {
          setListIndex({
            sectionIndex,
            itemIndex
          });
        }
      });
    }) : options === null || options === void 0 ? void 0 : options.find((item, itemIndex) => {
      if (item[optLabel] === selectedLabel) {
        setListIndex({
          itemIndex
        });
      }
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dropdown, _extends({
    label: label,
    placeholder: placeholder,
    helperText: helperText,
    error: error,
    getSelectedItemsLabel: getSelectedItemsLabel,
    selectedItem: selectedItem,
    selectedItems: selectedItems,
    handleToggleModal: handleToggleModal,
    labelStyle: labelStyle,
    dropdownIcon: dropdownIcon,
    dropdownStyle: dropdownStyle,
    dropdownIconStyle: dropdownIconStyle,
    dropdownContainerStyle: dropdownContainerStyle,
    dropdownErrorStyle: dropdownErrorStyle,
    dropdownErrorTextStyle: dropdownErrorTextStyle,
    dropdownHelperTextStyle: dropdownHelperTextStyle,
    selectedItemStyle: selectedItemStyle,
    multipleSelectedItemStyle: multipleSelectedItemStyle,
    isMultiple: isMultiple,
    primaryColor: primary,
    disabled: disabled,
    placeholderStyle: placeholderStyle,
    setIndexOfSelectedItem: setIndexOfSelectedItem
  }, rest)), /*#__PURE__*/React.createElement(CustomModal, {
    open: open,
    modalBackgroundStyle: modalBackgroundStyle,
    modalOptionsContainerStyle: modalOptionsContainerStyle,
    onRequestClose: () => handleToggleModal(),
    modalProps: modalProps
  }, /*#__PURE__*/React.createElement(ListTypeComponent, {
    ListHeaderComponent: /*#__PURE__*/React.createElement(React.Fragment, null, isSearchable && /*#__PURE__*/React.createElement(Input, _extends({
      value: searchValue,
      onChangeText: text => onSearch(text),
      style: (searchControls === null || searchControls === void 0 ? void 0 : searchControls.textInputStyle) || searchInputStyle,
      primaryColor: primary,
      textInputContainerStyle: searchControls === null || searchControls === void 0 ? void 0 : searchControls.textInputContainerStyle,
      placeholder: (searchControls === null || searchControls === void 0 || (_searchControls$textI = searchControls.textInputProps) === null || _searchControls$textI === void 0 ? void 0 : _searchControls$textI.placeholder) || 'Search'
    }, searchControls === null || searchControls === void 0 ? void 0 : searchControls.textInputProps)), listHeaderComponent, !(listControls !== null && listControls !== void 0 && listControls.hideSelectAll) && isMultiple && (modifiedOptions === null || modifiedOptions === void 0 ? void 0 : modifiedOptions.length) > 1 && /*#__PURE__*/React.createElement(View, {
      style: styles.optionsContainerStyle
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      onPress: () => {}
    }, /*#__PURE__*/React.createElement(CheckBox, {
      value: selectAll,
      label: selectAll ? (listControls === null || listControls === void 0 ? void 0 : listControls.unselectAllText) || 'Clear all' : (listControls === null || listControls === void 0 ? void 0 : listControls.selectAllText) || 'Select all',
      onChange: () => handleSelectAll(),
      primaryColor: primary,
      checkboxSize: checkboxSize,
      checkboxStyle: checkboxStyle,
      checkboxLabelStyle: checkboxLabelStyle,
      checkboxComponentStyles: checkboxComponentStyles,
      checkboxComponent: checkboxComponent
    })))),
    ListFooterComponent: listFooterComponent,
    listComponentStyles: listComponentStyles,
    options: newOptions,
    optionLabel: optLabel,
    optionValue: optValue,
    isMultiple: isMultiple,
    isSearchable: isSearchable,
    selectedItems: selectedItems,
    selectedItem: selectedItem,
    handleMultipleSelections: handleMultipleSelections,
    handleSingleSelection: handleSingleSelection,
    primaryColor: primary,
    checkboxSize: checkboxSize,
    checkboxStyle: checkboxStyle,
    checkboxLabelStyle: checkboxLabelStyle,
    checkboxComponentStyles: checkboxComponentStyles,
    checkboxComponent: checkboxComponent,
    listIndex: listIndex,
    emptyListMessage: listControls === null || listControls === void 0 ? void 0 : listControls.emptyListMessage
  })));
};
const styles = StyleSheet.create({
  optionsContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row'
  }
});
export default DropdownSelect;
//# sourceMappingURL=index.js.map