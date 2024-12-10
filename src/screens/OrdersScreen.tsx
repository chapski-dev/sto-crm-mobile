import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ReportSearchIcon from '../../assets/icons/ReportSearchIcon.svg';
import {OrderCard} from '../ui/OrderCard';
import {Title} from '../ui/Text';

interface Order {
  id: string;
  title: string;
}

const DATA: Order[] = [
  {id: '1', title: 'Первая карточка'},
  {id: '2', title: 'Вторая карточка'},
  {id: '3', title: 'Третья карточка'},
];

// const DATA: Order[] = [];

export const OrdersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Title title="Список заказов" />
      </View>
      {DATA.length > 0 ? (
        <FlatList
          data={DATA}
          renderItem={({item}) => <OrderCard title={item.title} />}
          keyExtractor={item => item.id}
          style={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyStateContainer}>
          <ReportSearchIcon />
          <Text style={styles.text}>Пока пусто</Text>
          <Text style={styles.prompting}>
            Здесь будет отображаться список заказов
          </Text>
        </View>
      )}
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
  listContainer: {
    flex: 1,
    left: 16,
    gap: 50,
  },
  emptyStateContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    textAlign: 'center',
    width: '50%',
  },
});
