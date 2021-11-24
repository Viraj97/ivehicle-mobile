import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Image,Text, TouchableOpacity } from 'react-native';
import {Card} from '../components/Card';
import {CardSection} from '../components/CardSection';
import theme from '../theme';

interface Props {
  navigation: {
    navigate: (arg0: string, params?: object) => void;
    dispatch: (arg: any) => void;
    addListener: any;
  };
}

const singleResult: React.FC<Props> = prop => {
  const { navigation } = prop;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={styles.scroll}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Card>
            <CardSection>
              <View>
                <Text>
                Result 1
                </Text>
                <Image style={styles.thumb} source={require('../images/newSplash.png')} />
              </View>
            </CardSection>
          </Card>
          </TouchableOpacity>
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
  thumb:{
    height:100,
    width:100,
    alignSelf:'flex-end',
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
export default singleResult;