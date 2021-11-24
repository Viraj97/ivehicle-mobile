import React from 'react';

import { Formik } from 'formik';
import { StyleSheet, View, Text, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

import Button from '../components/button';
import PFormField from '../components/PFormField';
import theme from '../theme';
import axios from 'axios';
import { H2 } from './../components/H';


interface loginForm {
  isLoading: boolean;
  errorMessage?: string | null;
  navigation: {
    navigate: (arg0: string, params?: object) => void;
  }
}

const method1 = (email, password, navigation) => {
  let userLogin;
  axios.post('https://ivehicle.herokuapp.com/userLogin', {username: email, password: password })
    .then(function (response) {
      if (response.data.email) {
        navigation.navigate('Home', { userLogin: userLogin })
      }
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
    })
}
const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email('Email must be a valid')
    .required('Email address is required'),
  password: Yup.string().required('Password is required'),
});
export const Login = ({ isLoading, errorMessage, navigation }: loginForm) => (
  <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <View>
      <Image style={styles.logo} source={require('../images/logo.png')} />
    </View>
    <View style={styles.titleView}>
      <H2 style={styles.title}>Login</H2>
    </View>
    <View style={styles.authForm}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={({ email, password }) => method1(email, password, navigation)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <PFormField
              onChangeText={handleChange('email')}
              placeholder={'E-mail address'}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              touched={touched.email}
              onBlur={handleBlur('email')} 
              value={values.email}
              message={errors.email}
              style={styles.pFormField}
            />
            <PFormField
              onChangeText={handleChange('password')}
              placeholder={'Password'}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              touched={touched.password}
              value={values.password}
              message={errors.password}
              style={styles.pFormField}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text>New User?
              </Text>
            </TouchableOpacity>
            <Button style={styles.submitContainer} onPress={handleSubmit} loading={isLoading} title="Login" />
          </View>
        )}
      </Formik>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  submitContainer: {
    margin: 20,
  },
  errorMessage: {
    marginTop: 16,
    fontSize: 13,
    textAlign: 'center',
    color: theme.errorColor,
  },
  authForm: {
    marginTop: '10%',
    marginBottom: '25%',
    alignSelf: 'center',
    width: '80%',
    backgroundColor: 'white',
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
    elevation: 8,
  },
  pFormField: {
    width: '80%',
    marginLeft: '10%',
    color:'black',
  },
  heading1: {
    fontSize: 30,
    fontFamily: theme.fontFamily,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading2: {
    fontSize: 20,
    fontFamily: theme.fontFamily,
    alignSelf: 'center',
    marginTop: 10,
  },
  logo: {
    height: 100,
    width: 300,
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    fontWeight: '500',
    alignSelf: 'center',
  },
  titleView: {
    flex: 0.5,
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
export default Login;
