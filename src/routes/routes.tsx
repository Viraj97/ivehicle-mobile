import React from 'react';
import Home from './../screens/Home';
import Login from './../screens/login';
import signup from './../screens/signup';
// import splash from './../screens/splash';
import Splash from './../screens/Splash/SplashScreen'
import results from './../screens/results';
import singleResult from './../screens/singleResult';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const navOptionsHandler = () => ({
  headerShown: false,
});

function RootNavigator(): React.ReactElement {
  return (
    <HomeStack.Navigator initialRouteName="splash">
      <HomeStack.Screen name="Home" component={DrawerNavigator} options={navOptionsHandler} />
      <HomeStack.Screen name="results" component={results} options={navOptionsHandler} />
      <HomeStack.Screen name="login" component={Login} options={navOptionsHandler} />
      {/* <HomeStack.Screen name="splash" component={splash} options={navOptionsHandler} /> */}
      <HomeStack.Screen name="splash" component={Splash} options={navOptionsHandler} />
      <HomeStack.Screen name="signup" component={signup} options={navOptionsHandler} />
      <HomeStack.Screen name="singleResult" component={singleResult} options={navOptionsHandler} />
    </HomeStack.Navigator>
  );
}
function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
  );
}

export default RootNavigator;