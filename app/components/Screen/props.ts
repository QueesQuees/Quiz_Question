import React, {MutableRefObject} from 'react';
import {ScrollView, StatusBarStyle, StyleProp, ViewStyle} from 'react-native';
// import {HeaderProps} from '../Header/props';
// import {FooterProps} from '../Footer/props';

export interface ScreenProps {
  /**
   * Display loading status or not.
   */
  isLoading?: boolean | boolean[];

  /**
   * Header title.
   */
  title?: string;

  /**
   * Override the default header props.
   */
  //   headerProps?: HeaderProps;

  /**
   * Custom header component to render
   */
  customHeaderComponent?: React.ReactNode;

  /**
   * Override the default footer props.
   */
  //   footerProps?: FooterProps;

  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * One of the different types of presets.
   * Note: 'fixed' should only be used if the screen contains a main flatlist.
   *
   * @default 'scroll'
   */
  type?: 'fixed' | 'scroll';

  /**
   * Instead of the back button, it's the drawer open button in the header.
   *
   * @default false
   */
  drawerHeader?: boolean;

  /**
   * An optional status bar setting.
   */
  statusBar?: StatusBarStyle;

  /**
   * Hide the header or not.
   *
   * @default false
   */
  hideHeader?: boolean;

  /**
   * Optional refreshControl props
   */
  refreshControl?: {refreshing: boolean; onRefresh: () => void};

  /**
   * listener touch event when press screen
   */
  emitTouchScreenEvent?: boolean;

  /**
   * ScrollView component's ref for scroll type
   */
  scrollViewRef?: MutableRefObject<ScrollView>;
}
