import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import {
  selectIsVehiclePurchased,
  selectSelectedVehicleId,
} from 'src/redux/slices/player/selectors';
import type { Vehicle } from 'src/types/game/vehicles';
import type { MainScreenName } from 'src/types/navigation/main';

interface ListItemProps {
  item: Vehicle;
  mode: MainScreenName;
  onExchangePress?: () => void;
  onChoosePress?: () => void;
  onDeletePress?: () => void;
}

const ListItem = ({
  item,
  mode,
  onExchangePress,
  onChoosePress,
  onDeletePress,
}: ListItemProps) => {
  const isCurrent = useAppSelector(selectSelectedVehicleId(item.id));
  const isPurchased = useAppSelector(selectIsVehiclePurchased(item.id));

  const isDefault = item.default;

  const showTwoButtons = mode === 'InventoryScreen' && !isCurrent && !isDefault;

  let shopButtonTitle = 'Exchange for rings';
  let shopButtonDisabled = false;

  if (isPurchased) {
    shopButtonTitle = 'Exchanged';
    shopButtonDisabled = true;
  }

  return (
    <CustomContainer
      extraStyle={[
        styles.cardWrapper,
        mode === 'InventoryScreen' && { borderWidth: 3 },
      ]}
    >
      <View style={styles.cardInfo}>
        <CustomText extraStyle={styles.title}>{item.name}</CustomText>

        {mode === 'ShopScreen' && (
          <View style={styles.priceWrapper}>
            <Image
              source={OBSTACKLES.Ring}
              resizeMode="contain"
              style={styles.ringImg}
            />
            <CustomText
              extraStyle={styles.price}
            >{`${item.price} rings`}</CustomText>
          </View>
        )}

        {mode === 'ShopScreen' && (
          <CustomButton
            extraStyle={[styles.singleBtn, isPurchased && styles.purchasedBtn]}
            handlePress={onExchangePress}
            isDisabled={shopButtonDisabled}
            variant={shopButtonDisabled ? 'white' : 'primary'}
          >
            <CustomText
              extraStyle={[styles.btnText, isPurchased && styles.purchasedText]}
            >
              {shopButtonTitle}
            </CustomText>
          </CustomButton>
        )}

        {mode === 'InventoryScreen' && (
          <View style={styles.inventoryActions}>
            <CustomButton
              extraStyle={styles.chooseBtn}
              handlePress={onChoosePress}
              variant={'white'}
            >
              <CustomText extraStyle={styles.inventoryBtnText}>
                {isCurrent ? 'Selected' : 'Choose'}
              </CustomText>
            </CustomButton>

            {showTwoButtons && (
              <CustomButton
                extraStyle={styles.deleteBtn}
                handlePress={onDeletePress}
                variant={'white'}
              >
                <CustomText extraStyle={styles.deleteBtnText}>
                  Delete
                </CustomText>
              </CustomButton>
            )}
          </View>
        )}
      </View>

      <CustomContainer extraStyle={styles.itemLogoWrapper}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.itemImg}
        />
      </CustomContainer>
    </CustomContainer>
  );
};

export default ListItem;
