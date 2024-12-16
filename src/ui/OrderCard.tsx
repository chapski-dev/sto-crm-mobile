import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface OrderCardProps {
  title: string;
  status: string;
  date: string;
  carBrand: string;
}

export const OrderCard: React.FC<OrderCardProps> = ({
  title,
  status,
  date,
  carBrand,
}) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'В работе':
        return styles.statusInProgress;
      case 'Отказ клиента':
        return styles.statusClientRefused;
      case 'Выполнен':
        return styles.statusCompleted;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>{title}</Text>
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
  wrapper: {
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
