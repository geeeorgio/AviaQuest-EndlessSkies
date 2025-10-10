import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    paddingTop: hp(40),
    paddingBottom: hp(45),
  },
  bottomBarPosition: {
    marginTop: 'auto',
    width: '100%',
  },
});
