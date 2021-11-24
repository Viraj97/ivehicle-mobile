import React from 'react';

import { SafeAreaView, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import theme from '../theme';
import Button from './../components/button';

type props = {
  navigation: {
    navigate: (arg0: string, params?: object) => void;
    dispatch: (arg: any) => void;
  };
  searchQuery: '',
};

IconM.loadFont();

const method1 = (searchQuery, navigation) => {
  let searchresults;
  axios.get('https://ivehicle.herokuapp.com/search', { params: { query: searchQuery } })
    .then(function (response) {
      searchresults = response;
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      navigation.navigate('results', { searchResults: searchresults })
    })
}

const SearchBar = ({ navigation, searchQuery }: props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarView}>
        <View style={styles.searchTextView}>
          <TextInput style={styles.searchText} onEndEditing={e => { searchQuery = e.nativeEvent.text }}></TextInput>
        </View>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require('./../images/search.png')}
          />
        </View>
      </View>
      <View>
        <Button style={styles.submitContainer} onPress={() => method1(searchQuery, navigation)} title="Search" />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  searchBarView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: theme.background,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderColor: theme.primaryBorderColor,
    borderWidth: 1.25,
    borderStyle: 'solid',
    borderRadius: 10,
    shadowColor: theme.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    marginTop: 50,
    elevation: 8,
  },
  submitContainer: {
    marginTop: 50,
    width: '30%',
    alignSelf:'center'
  },
  searchText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 21,
    color: theme.tertiaryFontColor,
    marginLeft: 10,
  },
  searchIconView: {
    flex: 0.3,
    paddingLeft: 5,
    margin: 8,
  },
  searchTextView: {
    flex: 3,
  },
  tinyLogo: {
    height: 20,
    width: 20,
    marginRight: 10,
  }
});

export default SearchBar;
