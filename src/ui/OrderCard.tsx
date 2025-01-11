import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Order} from '../screens/OrdersScreen';
import Status from '../ui/Status';

export const OrderCard: React.FC<Order> = ({
  order_number,
  status,
  date,
  carBrand,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderCardHeader}>
        <View>
          <Text style={styles.title}>{order_number}</Text>
          <Text>{date}</Text>
        </View>
        <Status status={status} />
      </View>
      <View>
        <Text style={styles.carBrand}>{carBrand}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8ECF0',
    marginHorizontal: 16,
  },
  orderCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    lineHeight: 22,
  },
  carBrand: {
    fontSize: 15,
    lineHeight: 22,
    color: '#0084EB',
  },
});
