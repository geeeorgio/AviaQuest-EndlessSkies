import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginBottom: hp(11),
    paddingVertical: hp(11),
    paddingHorizontal: wp(11),
  },
  cardInfo: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: sp(20),
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  ringImg: {
    width: wp(18),
    height: hp(18),
  },
  price: {
    fontSize: sp(12),
    fontFamily: FONTS.NunitoSemi,
  },
  itemLogoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    width: '35%',
    maxHeight: '100%',
    aspectRatio: 1,
  },
  itemImg: {
    width: '100%',
    height: '100%',
  },
  singleBtn: {
    width: '65%',
    paddingVertical: hp(10),
    borderRadius: 6,
  },
  purchasedBtn: {
    borderColor: COLORS.Primary,
    borderWidth: 3,
  },

  inventoryActions: {
    width: '100%',
    flexDirection: 'row',
  },
  chooseBtn: {
    borderColor: COLORS.Primary,
    borderWidth: 3,
    width: '50%',
    minWidth: wp(100),
    borderRadius: 6,
    paddingVertical: hp(10),
  },
  deleteBtn: {
    width: '45%',
    minWidth: wp(60),
    paddingVertical: hp(10),
  },
  btnText: {
    color: COLORS.White,
    fontSize: sp(11),
  },
  purchasedText: { color: COLORS.Primary },
  inventoryBtnText: {
    fontSize: sp(11),
    color: COLORS.Primary,
  },
  deleteBtnText: {
    color: COLORS.DeleteBtn,
    fontSize: sp(11),
  },
});
