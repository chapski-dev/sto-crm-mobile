import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const OrderCard = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
  },
});
