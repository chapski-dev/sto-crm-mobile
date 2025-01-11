import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Order, OrderStatus} from '../screens/OrdersScreen';

const getStatusStyle = (status: any) => {
  switch (status) {
    case OrderStatus.InProgress:
      return styles.statusInProgress;
    case OrderStatus.ClientRefused:
      return styles.statusClientRefused;
    case OrderStatus.Completed:
      return styles.statusCompleted;
    default:
      return styles.statusDefault;
  }
};

export const Status: React.FC<Pick<Order, 'status'>> = ({status}) => {
  return (
    <View style={[styles.wrapperStatus, getStatusStyle(status)]}>
      <Text style={[styles.statusText, getStatusStyle(status)]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  statusDefault: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
  },
});

export default Status;
