import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ReportSearchIcon from '../../assets/icons/ReportSearchIcon.svg';
import {OrderCard} from '../ui/OrderCard';
import {Title} from '../ui/Text';

interface Order {
  id: string;
  title: string;
  status: string;
  date: string;
  carBrand: string;
}

const DATA: Order[] = [
  {
    id: '1',
    title: '№231128162535',
    status: 'В работе',
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
  },
  {
    id: '2',
    title: '№231128162535',
    status: 'Отказ клиента',
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
  },
  {
    id: '3',
    title: '№231128162535',
    status: 'Выполнен',
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
  },
];

export const OrdersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Title title="Список заказов" />
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <OrderCard
            title={item.title}
            status={item.status}
            date={item.date}
            carBrand={item.carBrand}
          />
        )}
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
