import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    paddingVertical: hp(16),
    paddingHorizontal: wp(16),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.Primary,
    borderWidth: 3,
  },
});
