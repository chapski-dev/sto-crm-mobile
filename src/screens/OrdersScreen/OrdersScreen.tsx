import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ReportSearchIcon from '../../../assets/svg/report-search.svg';
import {OrderCard} from './components/OrderCard';
import {Text} from '../../ui/Text';

export enum OrderStatus {
  InProgress = 'В работе',
  ClientRefused = 'Отказ клиента',
  Completed = 'Выполнен',
}

export interface Order {
  id: string;
  order_number: string;
  status: OrderStatus;
  date: string;
  carBrand: string;
}

const DATA: Order[] = [
  {
    id: '1',
    order_number: '№231128162535',
    status: OrderStatus.InProgress,
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
  },
  {
    id: '2',
    order_number: '№231128162535',
    status: OrderStatus.ClientRefused,
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
  },
  {
    id: '3',
    order_number: '№231128162535',
    status: OrderStatus.Completed,
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
  },
];

export const OrdersScreen: React.FC = () => {
  const renderItem = useCallback(
    ({item}: {item: Order}) => (
      <OrderCard
        order_number={item.order_number}
        status={item.status}
        date={item.date}
        carBrand={item.carBrand}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text
          children="Список заказов"
          type="body"
          fontWeight={700}
          fontSize={32}
          color="#203040"
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyStateContainer}>
            <ReportSearchIcon />
            <Text style={styles.text}>Пока пусто</Text>
            <Text style={styles.prompting}>
              Здесь будет отображаться список заказов
            </Text>
          </View>
        }
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapperTitle: {
    marginTop: 8,
    marginLeft: 16,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: DATA.length === 0 ? 'center' : 'flex-start',
  },
  text: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 24,
  },
  prompting: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    width: '50%',
  },
});
