"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeaderTitle = exports.ListItemContainer = exports.ListEmptyComponent = exports.ItemSeparatorComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _colors = require("../../styles/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ListEmptyComponent = _ref => {
  let {
    listEmptyComponentStyle,
    emptyListMessage
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.listEmptyComponentStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: listEmptyComponentStyle
  }, emptyListMessage || 'No options available'));
};
exports.ListEmptyComponent = ListEmptyComponent;
const ItemSeparatorComponent = _ref2 => {
  let {
    itemSeparatorStyle
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.itemSeparatorStyle, itemSeparatorStyle]
  });
};
exports.ItemSeparatorComponent = ItemSeparatorComponent;
const ListItemContainer = _ref3 => {
  let {
    children,
    listItemContainerStyle
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.listItemContainerStyle, listItemContainerStyle]
  }, children);
};
exports.ListItemContainer = ListItemContainer;
const SectionHeaderTitle = _ref4 => {
  let {
    title,
    sectionHeaderStyle,
    onPress,
    isExpanded
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(ListItemContainer, {
    listItemContainerStyle: styles.accordionStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.sectionHeaderStyle, sectionHeaderStyle]
  }, title), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: isExpanded ? null : styles.rotatedIcon90
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../../asset/arrow-down.png')
  }))));
};
exports.SectionHeaderTitle = SectionHeaderTitle;
const styles = _reactNative.StyleSheet.create({
  listEmptyComponentStyle: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20
  },
  itemSeparatorStyle: {
    backgroundColor: _colors.colors.gray,
    height: 1,
    opacity: 0.15
  },
  listItemContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionHeaderStyle: {
    fontWeight: '500'
  },
  accordionStyle: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  rotatedIcon90: {
    transform: [{
      rotate: '-90deg'
    }]
  }
});
//# sourceMappingURL=index.js.map