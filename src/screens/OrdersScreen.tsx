import React, {useCallback} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import ReportSearchIcon from '../../assets/icons/report-search.svg';
import {OrderCard} from '../ui/OrderCard';
import {Text} from '../ui/Text';
import {useNavigation} from '@react-navigation/native';

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
  mileage: string;
  customer_name: string;
  garage_box: string;
  name_of_works: string;
  quntity: string;
  norm_an_hour: string;
  coefficient: string;
  materials: string;
  provided_materials: string;
  comments: string;
}

const DATA: Order[] = [
  {
    id: '1',
    order_number: '№231128162535',
    status: OrderStatus.InProgress,
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
    mileage: '163 131 км',
    customer_name: 'Гуриновичь Алексей Валентиновичь',
    garage_box: '5',
    name_of_works: 'Замена уплотнительных колец',
    quntity: '6',
    norm_an_hour: '4',
    coefficient: '3',
    materials: 'Масло моторное синтетическое Lukoil 3149287 "Genesis Armortech HK 5W-30", 4л',
    provided_materials: 'Рулевая рейка в сборе Honda Fit GD2 65000km',
    comments: 'Заменить уплотнительные кольца, провести электронную диагностику автоматической коробки передач. Выполнить ремонт рулевой рейки автомобиля, с заменой изношенных деталей и проведением необходимых регулировок.',
  },
  {
    id: '2',
    order_number: '№231128162535',
    status: OrderStatus.ClientRefused,
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
    mileage: '163 131 км',
    customer_name: 'Гуриновичь Алексей Валентиновичь',
    garage_box: '5',
    name_of_works: 'Замена уплотнительных колец',
    quntity: '6',
    norm_an_hour: '4',
    coefficient: '3',
    materials: 'Масло моторное синтетическое Lukoil 3149287 "Genesis Armortech HK 5W-30", 4л',
    provided_materials: 'Рулевая рейка в сборе Honda Fit GD2 65000km',
    comments: 'Заменить уплотнительные кольца, провести электронную диагностику автоматической коробки передач. Выполнить ремонт рулевой рейки автомобиля, с заменой изношенных деталей и проведением необходимых регулировок.',
  },
  {
    id: '3',
    order_number: '№231128162535',
    status: OrderStatus.Completed,
    date: '24 дек. 2023',
    carBrand: 'Honda Jazz III Рестайлинг, Хэтчбек 5 дв. 8682 AX-3',
    mileage: '163 131 км',
    customer_name: 'Гуриновичь Алексей Валентиновичь',
    garage_box: '5',
    name_of_works: 'Замена уплотнительных колец',
    quntity: '6',
    norm_an_hour: '4',
    coefficient: '3',
    materials: 'Масло моторное синтетическое Lukoil 3149287 "Genesis Armortech HK 5W-30", 4л',
    provided_materials: 'Рулевая рейка в сборе Honda Fit GD2 65000km',
    comments: 'Заменить уплотнительные кольца, провести электронную диагностику автоматической коробки передач. Выполнить ремонт рулевой рейки автомобиля, с заменой изношенных деталей и проведением необходимых регулировок.',
  },
];

export const OrdersScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleOrderPress = (item: Order) => {
    navigation.navigate('OrderDetail', {order: item});
  };

  const renderItem = useCallback(
    ({item}: {item: Order}) => (
      <TouchableOpacity onPress={() => handleOrderPress(item)}>
        <OrderCard
          order_number={item.order_number}
          status={item.status}
          date={item.date}
          carBrand={item.carBrand}
        />
      </TouchableOpacity>
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

