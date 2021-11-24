export interface ThemeProp {
  background: string; // background color
  primaryColor: string; // main, brand color
  primaryBorderColor: string; // main, border color
  primaryShadowColor: string; // main, shadow color
  shadowColor: string; // default shadow color
  disableColor: string; // disable input color
  disableIconColor: string; // disable Icon color
  textColor: string; // default text color
  errorColor: string; // color for error message
  invertedButtonTextColor: string; // this is the color for inverted text. Example - black background should have light text
  fontFamily: string; // all the inputs, text should have this
  borderColor: string; // border of inputs
  primaryFontColor: string; // main font color
  secondaryFontColor: string; // second popular font color
  tertiaryFontColor: string; // third popular font color
  greenButtonColor: string; // read notification button color
  basicFontColor: string; // read notification font color
  cardBackgroundColor: string; // notification card color
  activeButtonColor: string; // active button color
}

const theme: ThemeProp = {
  background: 'white',
  primaryColor: '#f26e3e',
  primaryBorderColor: '#FBFBFB',
  primaryShadowColor: 'rgba(0, 0, 0, 0.05)',
  shadowColor: '#000',
  disableColor: 'rgba(253, 89, 96, 0.35)',
  disableIconColor: '#C4C4C4',
  textColor: '#000000',
  errorColor: '#FD5960',
  invertedButtonTextColor: 'white',
  fontFamily: 'Source Sans Pro',
  borderColor: '#F1EEEE',
  primaryFontColor: 'black',
  secondaryFontColor: '#2F353B',
  tertiaryFontColor: 'rgba(0, 0, 0, 0.5)',
  greenButtonColor: '#4CD964',
  basicFontColor: '#636668',
  cardBackgroundColor: '#FBFBFB',
  activeButtonColor: 'rgba(14, 197, 65, 0.8)',
};

export default theme;
