import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components/layout';
import { GAME_BACKGROUND, MAIN_BACKGROUND } from 'src/constants';
import { selectOnbpardingDone } from 'src/redux/slices/onboarding/selectors';
import { selectIsGameMode } from 'src/redux/slices/player/selectors';
import type { RootStackParamsList } from 'src/types/navigation/root';

const Root = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const isGameMode = useSelector(selectIsGameMode);
  const isOnboardingDone = useSelector(selectOnbpardingDone);

  return (
    <Layout backgroundSource={isGameMode ? GAME_BACKGROUND : MAIN_BACKGROUND}>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          gestureEnabled: false,
          animation: 'fade',
        }}
      >
        {isOnboardingDone ? (
          <Root.Screen name={'MainStack'} component={MainNavigator} />
        ) : (
          <Root.Screen
            name={'OnboardingStack'}
            component={OnboardingNavigator}
          />
        )}
      </Root.Navigator>
    </Layout>
  );
};

export default RootNavigator;
