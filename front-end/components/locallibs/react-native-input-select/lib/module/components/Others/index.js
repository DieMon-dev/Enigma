import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../styles/colors';
export const ListEmptyComponent = _ref => {
  let {
    listEmptyComponentStyle,
    emptyListMessage
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.listEmptyComponentStyle
  }, /*#__PURE__*/React.createElement(Text, {
    style: listEmptyComponentStyle
  }, emptyListMessage || 'No options available'));
};
export const ItemSeparatorComponent = _ref2 => {
  let {
    itemSeparatorStyle
  } = _ref2;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.itemSeparatorStyle, itemSeparatorStyle]
  });
};
export const ListItemContainer = _ref3 => {
  let {
    children,
    listItemContainerStyle
  } = _ref3;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.listItemContainerStyle, listItemContainerStyle]
  }, children);
};
export const SectionHeaderTitle = _ref4 => {
  let {
    title,
    sectionHeaderStyle,
    onPress,
    isExpanded
  } = _ref4;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(ListItemContainer, {
    listItemContainerStyle: styles.accordionStyle
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.sectionHeaderStyle, sectionHeaderStyle]
  }, title), /*#__PURE__*/React.createElement(View, {
    style: isExpanded ? null : styles.rotatedIcon90
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('../../asset/arrow-down.png')
  }))));
};
const styles = StyleSheet.create({
  listEmptyComponentStyle: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20
  },
  itemSeparatorStyle: {
    backgroundColor: colors.gray,
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