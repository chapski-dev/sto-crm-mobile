import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Order, OrderStatus} from '../screens/OrdersScreen';

export const OrderCard: React.FC<Order> = ({
  order_number,
  status,
  date,
  carBrand,
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case OrderStatus.InProgress:
        return styles.statusInProgress;
      case OrderStatus.ClientRefused:
        return styles.statusClientRefused;
      case OrderStatus.Completed:
        return styles.statusCompleted;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderCardHeader}>
        <View>
          <Text style={styles.title}>{order_number}</Text>
          <Text>{date}</Text>
        </View>
        <View style={[styles.wrapperStatus, getStatusStyle()]}>
          <Text style={[styles.statusText, getStatusStyle()]}>{status}</Text>
        </View>
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
  wrapperStatus: {
    paddingLeft: 8,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 15,
    lineHeight: 22,
  },
  statusInProgress: {
    backgroundColor: '#E0F2FF',
    color: '#0084EB',
  },
  statusClientRefused: {
    backgroundColor: '#FFE9E5',
    color: '#EB4221',
  },
  statusCompleted: {
    backgroundColor: '#E9F7E5',
    color: '#42B121',
  },
  carBrand: {
    fontSize: 15,
    lineHeight: 22,
    color: '#0084EB',
  },
});
