import React from 'react';
import { SafeAreaView, FlatList, StatusBar, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Card } from '../components/Card';
import { CardSection } from '../components/CardSection';
import Button from '../components/button';
import theme from '../theme';

interface Props {
  navigation: {
    navigate: (arg0: string, params?: object) => void;
    dispatch: (arg: any) => void;
    addListener: any;
  };
}
const renderItem = ({ item, url }) => {
  return (<TouchableOpacity>
    <Card style={styles.card}>
      <CardSection>
        <View>
          <Text style={styles.heading}>
            {item.title}
          </Text>
        </View>
      </CardSection>
      <CardSection>
      <View>
          <Image style={styles.thumb} source={{ uri: item.pagemap.cse_image[0].src }} />
        </View>
      </CardSection>
    </Card>
  </TouchableOpacity>);
}

const results: React.FC<Props> = prop => {
  const { navigation, route } = prop;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View>
        <Image style={styles.logo} source={require('../images/logo.png')} />
      </View>
      <FlatList
        data={route.params.searchResults.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.cacheId}
      >
      </FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading:{
    fontSize:18,
  },
  logo: {
    height: 100,
    width: 300,
    alignSelf: 'center',
    marginTop: 30,
  },
  thumb: {
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
  },
  scroll: {
    marginTop: 20,
  },
  submitContainer: {
    marginTop: 50,
    width: '30%',
    alignSelf: 'center'
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
export default results;
