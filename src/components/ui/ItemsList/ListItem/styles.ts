import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  cardWrapper: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginBottom: 11,
    paddingTop: 18,
    paddingBottom: 12,
  },
  cardInfo: {
    gap: 8,
  },
  title: {
    fontSize: 24,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ringImg: {
    width: 21,
    height: 21,
  },
  price: {
    fontSize: 12,
    fontFamily: FONTS.NunitoSemi,
  },
  itemLogoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 105,
    height: 100,
  },
  itemImg: {
    width: '100%',
    height: '100%',
  },
  inventoryActions: {
    flexDirection: 'row',
  },
  singleBtn: {
    minWidth: 150,
    paddingVertical: 14,
    borderRadius: 6,
  },
  chooseBtn: {
    borderColor: COLORS.Primary,
    borderWidth: 3,
    minWidth: 80,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  deleteBtn: {
    minWidth: 80,
    paddingVertical: 6,
    backgroundColor: COLORS.Secondary,
  },
  btnText: {
    color: COLORS.White,
    fontSize: 12,
  },
  inventoryBtnText: {
    fontSize: 12,
    color: COLORS.Primary,
  },
  deleteBtnText: {
    color: COLORS.DeleteBtn,
    fontSize: 12,
  },
});
