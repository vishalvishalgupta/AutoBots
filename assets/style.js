import { Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = percentage * viewportWidth / 100;
  return Math.round(value);
}

export var slideWidth = wp(39.4);
export var sliderItemHorizontalMargin = wp(2);

export var sliderWidth = viewportWidth + 10;
export var sliderItemWidth = slideWidth + sliderItemHorizontalMargin * 4;