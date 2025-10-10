import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp, hp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(30),
    marginBottom: hp(20),
  },
  imageArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: hp(40),
  },
  image: {
    width: '80%',
    height: '80%',
  },
  fuelCanImage: {
    position: 'absolute',
    top: '15%',
    zIndex: 2,
  },
  ringImage: {
    position: 'absolute',
    top: '55%',
    zIndex: 1,
  },
  onbordingObstacles: {
    position: 'absolute',
    height: '100%',
    zIndex: 2,
  },
  noPadding: { paddingHorizontal: 5 },
  contentArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
  },
  textGroup: {
    gap: 10,
  },
  titleText: {
    fontSize: sp(30),
    textTransform: 'uppercase',
    textAlign: 'center',
    color: COLORS.Black,
  },
  descriptionText: {
    fontSize: sp(11.5),
    textTransform: 'uppercase',
    color: COLORS.Black,
    textAlign: 'center',
  },
  btn: {
    paddingVertical: hp(25),
    width: '80%',
  },
  buttonText: {
    fontSize: sp(24),
    color: COLORS.White,
  },
});
