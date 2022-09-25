import {Dimensions, PixelRatio} from 'react-native';

const DIMENS = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  screenHorizontalPadding: 20,
  screenTopPadding: 10,
  screenBottomPadding: 30,
  screenBottomPaddingWithFooter: 100,
  screenBottomPaddingWithTab: 90,
};

const pixelRatio = PixelRatio.get();

/**
 * Resize size by the device ratio and dimensions
 */
export const resize = (size: number, width?: number, height?: number) => {
  const deviceWidth = width ?? DIMENS.screenWidth;
  const deviceHeight = height ?? DIMENS.screenHeight;

  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.8075;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size * 0.85;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 0.9775;
    }
    // older phablets
    return size * 1.0625;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size * 0.85;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 0.9775;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.02;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note etc.
    return size * 1.0795;
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size * 0.85;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.02;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.0625;
    }
    // catch larger phablet devices
    return size * 1.19;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  else return size * 0.85;
};

export function getScreenRatio(): number {
  return resize(1);
}
