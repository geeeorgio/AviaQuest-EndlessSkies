import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginBottom: 11,
    paddingVertical: 11,
    paddingHorizontal: 11,
  },
  cardInfo: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 20,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ringImg: {
    width: 18,
    height: 18,
  },
  price: {
    fontSize: 12,
    fontFamily: FONTS.NunitoSemi,
  },
  itemLogoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    paddingVertical: 10,
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
    minWidth: 100,
    borderRadius: 6,
    paddingVertical: 10,
  },
  deleteBtn: {
    width: '45%',
    minWidth: 60,
    paddingVertical: 10,
  },
  btnText: {
    color: COLORS.White,
    fontSize: 11,
  },
  purchasedText: { color: COLORS.Primary },
  inventoryBtnText: {
    fontSize: 11,
    color: COLORS.Primary,
  },
  deleteBtnText: {
    color: COLORS.DeleteBtn,
    fontSize: 11,
  },
});
