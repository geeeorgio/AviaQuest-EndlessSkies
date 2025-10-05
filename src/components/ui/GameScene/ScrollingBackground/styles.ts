import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  backgroundWrapper: {
    height: '100%',
    flexDirection: 'row',
    position: 'absolute',
  },
  image: {
    height: '100%',
  },
});
