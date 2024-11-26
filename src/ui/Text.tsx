import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ props }) => {
  return (
    <Text style={styles.titleText}>{props}</Text>
  );
};

const OtherText = ({ props }) => {
  return (
    <Text style={styles.otherText}>{props}</Text>
  );
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

export { Title as MainTitle, OtherText as Label };
