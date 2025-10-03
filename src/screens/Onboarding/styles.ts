import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36,
    paddingVertical: 20,
  },
  imageArea: {
    flex: 1.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '94%',
    height: '89%',
  },
  fuelCanImage: {
    position: 'absolute',
    top: '10%',
    zIndex: 2,
  },
  ringImage: {
    position: 'absolute',
    top: '50%',
    zIndex: 1,
  },
  onbordingObstacles: {
    position: 'absolute',
    height: '100%',
    zIndex: 2,
  },
  contentArea: {
    flex: 0.8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
  },
  textGroup: {
    gap: 10,
  },
  titleText: {
    fontSize: 36,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: COLORS.Black,
  },
  descriptionText: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: COLORS.Black,
    textAlign: 'center',
  },
  btn: {
    paddingVertical: 30,
    paddingHorizontal: 66,
  },
  buttonText: {
    fontSize: 24,
    color: COLORS.White,
    fontWeight: '600',
  },
});
