import { StyleSheet } from 'react-native';

import { PLANE_HEIGHT, PLANE_WIDTH } from 'src/constants/loaderConfig';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 999,
  },
  planeWrapper: {
    height: PLANE_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  plane: {
    width: PLANE_WIDTH,
    height: PLANE_HEIGHT,
  },
});
