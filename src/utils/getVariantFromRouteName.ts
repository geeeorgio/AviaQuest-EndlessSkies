import type { MainScreenName } from 'src/types/navigation/main';

type HeaderVariant = 'red' | 'blue';

export const getVariantFromRouteName = (
  routeName: MainScreenName,
): HeaderVariant => {
  if (routeName === 'RulesScreen' || routeName === 'ShopScreen') {
    return 'red';
  }

  return 'blue';
};
