import { Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/util';

export default function ImageViewer({ placeholderImageSource, width = windowWidth, height = windowHeight, borderRadius = 10 }) {
  return (
    <Image source={placeholderImageSource} style={[{ width, height, borderRadius }]} />
  );
}
