import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({title}) => {
  return <Text style={styles.titleText}>{title}</Text>;
};

const Label = ({props}) => {
  return <Text style={styles.otherText}>{props}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    lineHeight: 36,
    color: '#000',
  },
  otherText: {
    fontSize: 13,
    lineHeight: 16,
    color: '#798391',
  },
});

export {Label, Title};
