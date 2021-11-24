import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Image } from 'react-native';
import theme from '../theme';
import SearchBar from './../components/SearchBar';
import Button from './../components/button';


interface Props {
  navigation: {
    navigate: (arg0: string, params?: object) => void;
    dispatch: (arg: any) => void;
    addListener: any;
  };

}

const Home: React.FC<Props> = prop => {
  const { navigation } = prop;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleView}>
        </View>
        <View style={styles.searchView}>
        <SearchBar navigation={navigation} searchQuery={''} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo:{
    height:100,
    width:300,
    alignSelf:'center',
    marginTop:30,
  },
  scroll:{
  },
  submitContainer: {
    marginTop: 50,
    width: '30%',
    alignSelf:'center'
  },
  container: {
    flex: 2,
    backgroundColor: theme.background,
  },
  mainContainer: {
    flex: 1,
  },
  titleView: {
    flex: 0.5,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '500',
  },
  searchView: { flex: 1, marginTop: 22, marginBottom: 40 },
});
export default Home;
