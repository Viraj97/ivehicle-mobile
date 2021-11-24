import React, { ReactNode } from 'react';

import { StyleSheet, Text, TextStyle } from 'react-native';
import theme from '../theme';
type props = {
  title?: string;
  children?: ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary' | 'bold';
  color?: string;
  textAlign?: TextStyle['textAlign'];
  style?: TextStyle;
};
function combindStyle(
  textStyle?: TextStyle,
  type?: string,
  color?: string,
  textAlign?: TextStyle['textAlign'],
  style?: TextStyle,
) {
  const newStyle: TextStyle = {};
  if (type === 'secondary') {
    newStyle.color = theme.secondaryFontColor;
  } else if (type === 'tertiary') {
    newStyle.color = theme.tertiaryFontColor;
  }
  if (color) {
    newStyle.color = color;
  }
  if (textAlign) {
    newStyle.textAlign = textAlign;
  }
  return Object.assign({}, textStyle, style, newStyle);
}
export const H1 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h1, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};
export const H2 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h2, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};
export const H3 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h3, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};

export const H4 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h4, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};

export const H5 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h5, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};

export const H6 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h6, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};
export const H7 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h7, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};
export const H8 = ({ title, children, type, color, textAlign, style }: props) => {
  const textStyle = combindStyle(styles.h8, type, color, textAlign, style);
  return <Text style={textStyle}>{title || children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 34,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 22,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
  h3: {
    fontSize: 20,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
  h4: {
    fontSize: 18,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
  h5: {
    fontSize: 17,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
  h6: {
    fontSize: 16,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
  h7: {
    fontSize: 15,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
  h8: {
    fontSize: 14,
    color: theme.primaryFontColor,
    fontFamily: theme.fontFamily,
  },
});

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
};
