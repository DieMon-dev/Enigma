"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _DropdownListItem = _interopRequireDefault(require("./DropdownListItem"));
var _Others = require("../Others");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
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
  const [expandedSections, setExpandedSections] = (0, _react.useState)(new Set());

  /**
   * Expand all sections
   */
  (0, _react.useEffect)(() => {
    let initialState = new Set((0, _utils.extractPropertyFromArray)(options, 'title'));
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

  const sectionlistRef = (0, _react.useRef)(null);
  const scrollToLocation = listIndex => {
    var _sectionlistRef$curre;
    (_sectionlistRef$curre = sectionlistRef.current) === null || _sectionlistRef$curre === void 0 ? void 0 : _sectionlistRef$curre.scrollToLocation({
      sectionIndex: listIndex.sectionIndex,
      animated: true,
      itemIndex: listIndex.itemIndex
    });
  };
  (0, _react.useEffect)(() => {
    if (listIndex.itemIndex >= 0 && listIndex.sectionIndex >= 0) {
      scrollToLocation(listIndex);
    }
  }, [listIndex]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.SectionList, _extends({
    sections: options,
    extraData: isMultiple ? selectedItems : selectedItem,
    initialNumToRender: 5,
    ListEmptyComponent: /*#__PURE__*/_react.default.createElement(_Others.ListEmptyComponent, {
      listEmptyComponentStyle: listComponentStyles === null || listComponentStyles === void 0 ? void 0 : listComponentStyles.listEmptyComponentStyle,
      emptyListMessage: emptyListMessage
    }),
    contentContainerStyle: [isSearchable ? {
      paddingTop: 0
    } : styles.contentContainerStyle],
    ItemSeparatorComponent: () => /*#__PURE__*/_react.default.createElement(_Others.ItemSeparatorComponent, {
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
      return /*#__PURE__*/_react.default.createElement(_Others.SectionHeaderTitle, {
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
  return /*#__PURE__*/_react.default.createElement(_DropdownListItem.default, {
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
const styles = _reactNative.StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 20
  }
});
var _default = DropdownSectionList;
exports.default = _default;
//# sourceMappingURL=DropdownSectionList.js.map