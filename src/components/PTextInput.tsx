import * as React from 'react';

import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import theme from '../theme';

const PTextInput = (props: TextInputProps) => {
  const style = Object.assign({}, styles.container, props.style);
  return <TextInput {...props} placeholderTextColor={'#C4C4C4'} style={style} underlineColorAndroid="rgba(0,0,0,0)" />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: theme.borderColor,
    fontSize: 16,
    paddingVertical: 18,
    marginVertical: 4,
    marginBottom: 8,
    lineHeight: 19,
    fontFamily: theme.fontFamily,
  },
});

export default PTextInput;
