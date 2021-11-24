import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import React from 'react';
import theme from '../theme';

interface props {
  title: string;
  disabled?: boolean;
  small?: boolean;
  loading?: boolean;
  transparent?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => any;
}

const Button = ({ onPress, title, style, transparent, small, textStyle, loading, disabled }: props) => {
  const disabledButton = loading || disabled;
  let containerStyle = Object.assign({}, styles.container);
  let buttonTextStyle = Object.assign({}, styles.text);
  if (disabledButton) {
    containerStyle.backgroundColor = '#C4C4C4';
    containerStyle.shadowOpacity = 0;
  }

  if (transparent) {
    containerStyle.backgroundColor = 'rgba(0,0,0,0)';
    containerStyle.borderColor = 'rgba(0,0,0,0)';
    containerStyle.shadowOpacity = 0;
    buttonTextStyle.color = '#3C3BB3';
  }

  if (small) {
    containerStyle.padding = 6;
    buttonTextStyle.fontSize = 12;
  }

  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={disabledButton ? 1 : 0.7}
      style={[containerStyle, style]}
      onPress={() => (disabledButton ? null : onPress())}>
      {loading ? (
        <ActivityIndicator color={'white'} style={styles.loadinIndicator} size={12} />
      ) : (
        <Text style={[buttonTextStyle, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    borderColor: theme.primaryColor,
    padding: 16,
    borderRadius: 10,
    shadowColor: theme.shadowColor,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 4,
    textAlign: 'center',
    color: theme.invertedButtonTextColor,
    fontFamily: theme.fontFamily,
    fontWeight: '500',
  },
  loadinIndicator: {
    paddingLeft: 10,
  },
});

export default Button;
