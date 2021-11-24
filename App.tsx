import React from 'react';
import { navigationRef } from './src/RootNavigation';
import RootNavigator from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

interface Props {
  navigation: {
    navigate: (arg0: string, params?: object) => void;
    dispatch: (arg: any) => void;
    addListener: any;
  };
}
const App: React.FC<Props> = prop => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
      </>
    );
  };
  
  export default App;