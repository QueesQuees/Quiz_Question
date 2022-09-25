// import {MarkerStyle} from 'app/components/Scanner/props';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {getScreenRatio} from '../ultis/responsive';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
type StyleEntry = keyof ViewStyle | keyof TextStyle | keyof ImageStyle;

const RESPONSIVE_STYLE_ENTRIES: StyleEntry[] = [
  'top',
  'left',
  'right',
  'bottom',
  'start',
  'end',
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginEnd',
  'marginHorizontal',
  'marginVertical',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingEnd',
  'paddingHorizontal',
  'paddingVertical',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopStartRadius',
  'borderTopEndRadius',
  'borderBottomStartRadius',
  'borderBottomEndRadius',
  'fontSize',
  'lineHeight',
];

const ratio = getScreenRatio();

/**
 * Create a responsive StyleSheet style reference from the given object.
 */
export function createResponsiveStyle<
  T extends NamedStyles<T> | NamedStyles<any>,
>(styles: T | NamedStyles<T>): T {
  let newStyles: Record<string, ViewStyle | TextStyle | ImageStyle> | undefined;
  if (styles && typeof styles === 'object') {
    newStyles = {};
    for (let [key, style] of Object.entries(styles)) {
      newStyles[key] = createSingleResponsiveStyle(style);
    }
  }

  return StyleSheet.create((newStyles as T) || styles);
}

/**
 * Create a single responsive style from the given style object.
 * Return a new style object if the old one need to be changed.
 */
export function createSingleResponsiveStyle<
  T extends ViewStyle | TextStyle | ImageStyle,
>(style: T): T {
  let newStyle: Partial<Record<StyleEntry, any>> | undefined;
  if (style && typeof style === 'object') {
    for (let [key, value] of Object.entries(style) as [StyleEntry, any][]) {
      if (typeof value === 'number' && RESPONSIVE_STYLE_ENTRIES.includes(key)) {
        if (!newStyle) newStyle = {...style};
        newStyle[key] = value * ratio;
      }
    }
  }

  return (newStyle as T) || style;
}
