import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
export declare const ListEmptyComponent: ({ listEmptyComponentStyle, emptyListMessage, }: any) => JSX.Element;
export declare const ItemSeparatorComponent: ({ itemSeparatorStyle }: any) => JSX.Element;
export declare const ListItemContainer: ({ children, listItemContainerStyle, }: {
    children: ReactNode;
    listItemContainerStyle: ViewStyle;
}) => JSX.Element;
export declare const SectionHeaderTitle: ({ title, sectionHeaderStyle, onPress, isExpanded, }: {
    title: string;
    sectionHeaderStyle?: TextStyle | undefined;
    onPress?: (() => void) | undefined;
    isExpanded: Boolean;
}) => JSX.Element;
