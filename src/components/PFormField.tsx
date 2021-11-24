import * as React from 'react';

import { StyleSheet, Text, TextInputProps } from 'react-native';

import PTextInput from './PTextInput';
import theme from '../theme';

interface Props extends TextInputProps {
  message?: string;
  touched?: boolean;
}

const PFormField: React.FC<Props> = props => {
  const { message, touched } = props;
  const hasError = message && touched;

  return (
    <>
      <PTextInput {...props} />
      {hasError ? <Text style={styles.errorMessage}>{message}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: theme.errorColor,
    fontSize: 16,
    fontWeight: '300',
    paddingBottom: 8,
    fontFamily: theme.fontFamily,
  },
});

export default PFormField;
