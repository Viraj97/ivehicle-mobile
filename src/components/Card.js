import React from 'react';
import {View} from 'react-native';

const Card = props => {
  return <View style={styles.containerStyles}>{props.children}</View>;
};

const styles = {
  containerStyles: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    marginTop: 10,
  },
};

export {Card};
