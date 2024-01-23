"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownSelect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Input = _interopRequireDefault(require("./components/Input"));
var _CheckBox = _interopRequireDefault(require("./components/CheckBox"));
var _Dropdown = _interopRequireDefault(require("./components/Dropdown/Dropdown"));
var _DropdownFlatList = _interopRequireDefault(require("./components/Dropdown/DropdownFlatList"));
var _DropdownSectionList = _interopRequireDefault(require("./components/Dropdown/DropdownSectionList"));
var _CustomModal = _interopRequireDefault(require("./components/CustomModal"));
var _colors = require("./styles/colors");
var _constants = require("./constants");
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DropdownSelect = _ref => {
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
  const [newOptions, setNewOptions] = (0, _react.useState)([]);
  const [open, setOpen] = (0, _react.useState)(false);
  const [selectAll, setSelectAll] = (0, _react.useState)(false);
  const [selectedItem, setSelectedItem] = (0, _react.useState)(''); // for single selection
  const [selectedItems, setSelectedItems] = (0, _react.useState)([]); // for multiple selection
  const [searchValue, setSearchValue] = (0, _react.useState)('');
  const [listIndex, setListIndex] = (0, _react.useState)({
    itemIndex: -1,
    sectionIndex: -1
  }); // for scrollToIndex in Sectionlist and Flatlist

  (0, _react.useEffect)(() => {
    setNewOptions(options);
    return () => {};
  }, [options]);
  (0, _react.useEffect)(() => {
    isMultiple ? setSelectedItems(Array.isArray(selectedValue) ? selectedValue : []) : setSelectedItem(selectedValue);
    return () => {};
  }, [selectedValue, isMultiple, onValueChange]);

  /*===========================================
   * List type
   *==========================================*/

  // check the structure of the new options array to determine if it is a section list or a
  const isSectionList = newOptions === null || newOptions === void 0 ? void 0 : newOptions.some(item => item.title && item.data && Array.isArray(item.data));
  const ListTypeComponent = isSectionList ? _DropdownSectionList.default : _DropdownFlatList.default;
  const modifiedSectionData = (_extractPropertyFromA = (0, _utils.extractPropertyFromArray)(newOptions, 'data')) === null || _extractPropertyFromA === void 0 ? void 0 : _extractPropertyFromA.flat();

  /**
   * `options` is the original array, it never changes. (Do not use except you really need the original array) .
   * `newOptions` is a copy of options but can be mutated by `setNewOptions`, as a result, the value many change.
   * `modifiedOptions` should only be used for computations. It has the same structure for both `FlatList` and `SectionList`
   */
  const modifiedOptions = isSectionList ? modifiedSectionData : newOptions;
  const optLabel = optionLabel || _constants.DEFAULT_OPTION_LABEL;
  const optValue = optionValue || _constants.DEFAULT_OPTION_VALUE;

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
      const filteredOptions = removeDisabledItems(isSectionList ? (0, _utils.extractPropertyFromArray)(options, 'data').flat() : options);
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
  const checkSelectAll = (0, _react.useCallback)(selectedValues => {
    var _removeDisabledItems;
    //if the list contains disabled values, those values will not be selected
    if (((_removeDisabledItems = removeDisabledItems(modifiedOptions)) === null || _removeDisabledItems === void 0 ? void 0 : _removeDisabledItems.length) === (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [modifiedOptions]);

  // anytime the selected items change, check if it is time to set `selectAll` to true
  (0, _react.useEffect)(() => {
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
    let searchText = (0, _utils.escapeRegExp)(value).toString().toLocaleLowerCase().trim();
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
  (0, _react.useEffect)(() => {
    if (hideModal) {
      setOpen(false);
    }
    return () => {};
  }, [hideModal]);
  let primary = primaryColor || _colors.colors.gray;

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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Dropdown.default, _extends({
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
  }, rest)), /*#__PURE__*/_react.default.createElement(_CustomModal.default, {
    open: open,
    modalBackgroundStyle: modalBackgroundStyle,
    modalOptionsContainerStyle: modalOptionsContainerStyle,
    onRequestClose: () => handleToggleModal(),
    modalProps: modalProps
  }, /*#__PURE__*/_react.default.createElement(ListTypeComponent, {
    ListHeaderComponent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSearchable && /*#__PURE__*/_react.default.createElement(_Input.default, _extends({
      value: searchValue,
      onChangeText: text => onSearch(text),
      style: (searchControls === null || searchControls === void 0 ? void 0 : searchControls.textInputStyle) || searchInputStyle,
      primaryColor: primary,
      textInputContainerStyle: searchControls === null || searchControls === void 0 ? void 0 : searchControls.textInputContainerStyle,
      placeholder: (searchControls === null || searchControls === void 0 || (_searchControls$textI = searchControls.textInputProps) === null || _searchControls$textI === void 0 ? void 0 : _searchControls$textI.placeholder) || 'Search'
    }, searchControls === null || searchControls === void 0 ? void 0 : searchControls.textInputProps)), listHeaderComponent, !(listControls !== null && listControls !== void 0 && listControls.hideSelectAll) && isMultiple && (modifiedOptions === null || modifiedOptions === void 0 ? void 0 : modifiedOptions.length) > 1 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.optionsContainerStyle
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: () => {}
    }, /*#__PURE__*/_react.default.createElement(_CheckBox.default, {
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
exports.DropdownSelect = DropdownSelect;
const styles = _reactNative.StyleSheet.create({
  optionsContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row'
  }
});
var _default = DropdownSelect;
exports.default = _default;
//# sourceMappingURL=index.js.map