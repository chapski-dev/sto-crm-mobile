import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text} from '../ui/Text';
import Status from '../ui/Status';
import {Button} from '../ui/Button';
import Camera from '../../assets/icons/camera.svg';


export default function OrderDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {order} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Text
            children="Изменить статус"
            type="body"
            fontWeight={400}
            fontSize={14}
            color="#0090FF"
          />
        </TouchableOpacity>),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
        <Text
          children={order.order_number}
          type="body"
          fontWeight={700}
          fontSize={32}
          color="#203040"
        />
        <View style={styles.orderMeta}>
          <Text
            children={order.date}
            type="body"
            fontWeight={400}
            fontSize={13}
            color="#798391"
          />
          <Status status={order.status} />
        </View>
        <Text
          children={order.carBrand}
          type="body"
          fontWeight={400}
          fontSize={17}
          color="#0084EB"
        />
        <View style={styles.infoBlock}>
            <Text
              children="Пробег"
              type="body"
              fontWeight={400}
              fontSize={15}
              style={{flex: 1,}}
              color="#798391"
            />
            <Text
              children={order.mileage}
              type="body"
              fontWeight={400}
              fontSize={15}
              style={{flex: 1,}}
              color="#203040"
            />
        </View>
        <View>
          <Text
            children="Заказчик"
            type="body"
            fontWeight={700}
            fontSize={24}
            color="#203040"
          />
          <View style={styles.costomerInformation}>
            <View style={styles.infoBlock}>
              <Text
                children="ФИО заказчика"
                type="body"
                fontWeight={400}
                fontSize={15}
                color="#798391"
                style={{flex: 1,}}
              />
              <Text
                children={order.customer_name}
                type="body"
                fontWeight={400}
                fontSize={15}
                style={{flex: 1,}}
                color="#203040"
              />
            </View>
            <View style={styles.infoBlock}>
              <Text
                children="Гараж/бокс"
                type="body"
                fontWeight={400}
                fontSize={15}
                style={{flex: 1,}}
                color="#798391"
              />
              <Text
                children={order.garage_box}
                type="body"
                fontWeight={400}
                fontSize={15}
                style={{flex: 1,}}
                color="#203040"
              />
            </View>
          </View>
          <Button
          title={'+375 44 566 04 44'}
          />
        </View>
        <View style={styles.works}>
          <Text
            children="Работы"
            type="body"
            fontWeight={700}
            fontSize={24}
            color="#203040"
          />
          <View style={{marginTop: 24,}}>
              <Text
                children={order.name_of_works}
                type="body"
                fontWeight={400}
                fontSize={15}
                color="#203040"
              />
              <View style={styles.workDetails}>
                <View style={{flex: 1,}}>
                  <Text
                    children="Кол-во"
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#798391"
                  />
                  <Text
                    children={order.quntity}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Норма, ч"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.norm_an_hour}
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Коэф-т"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.coefficient}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
              </View>
          </View>
          <View style={{marginTop: 24,}}>
              <Text
                children={order.name_of_works}
                type="body"
                fontWeight={400}
                fontSize={15}
                color="#203040"
              />
              <View style={styles.workDetails}>
                <View style={{flex: 1,}}>
                  <Text
                    children="Кол-во"
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#798391"
                  />
                  <Text
                    children={order.quntity}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Норма, ч"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.norm_an_hour}
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Коэф-т"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.coefficient}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
              </View>
          </View>
          <View style={{marginTop: 24,}}>
              <Text
                children={order.name_of_works}
                type="body"
                fontWeight={400}
                fontSize={15}
                color="#203040"
              />
              <View style={styles.workDetails}>
                <View style={{flex: 1,}}>
                  <Text
                    children="Кол-во"
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#798391"
                  />
                  <Text
                    children={order.quntity}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Норма, ч"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.norm_an_hour}
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Коэф-т"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.coefficient}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
              </View>
          </View>
        </View>
        <View>
          <Text
            children="Запчасти и материалы"
            type="body"
            fontWeight={700}
            fontSize={24}
            color="#203040"
          />
          <View style={{marginTop: 24,}}>
              <Text
                children={order.materials}
                type="body"
                fontWeight={400}
                fontSize={15}
                color="#203040"
              />
              <View style={styles.workDetails}>
                <View style={{flex: 1,}}>
                  <Text
                    children="Кол-во"
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#798391"
                  />
                  <Text
                    children={order.quntity}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Норма, ч"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.norm_an_hour}
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#203040"
                  />
                </View>
                <View style={{flex: 1,}}>
                  <Text
                    children="Коэф-т"
                    type="body"
                    fontWeight={400}
                    fontSize={13}
                    color="#798391"
                  />
                  <Text
                    children={order.coefficient}
                    type="body"
                    fontWeight={400}
                    fontSize={15}
                    color="#203040"
                  />
                </View>
              </View>
          </View>
        </View>
        <View style={{marginTop: 24,}}>
          <Text
            children="Давальческие запчасти и материалы"
            type="body"
            fontWeight={700}
            fontSize={24}
            color="#203040"
          />
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E8ECF0', gap: 4, paddingVertical: 16,}}>
            <Text
            children={order.provided_materials}
            type="body"
            fontWeight={400}
            fontSize={15}
            color="#203040"
            />
            <Text
            children={`кол-во ${order.quntity} шт`}
            type="body"
            fontWeight={400}
            fontSize={15}
            color="#798391"
            />
          </View>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#E8ECF0', gap: 4, paddingVertical: 16,}}>
            <View> 
              <Text
              children={order.provided_materials}
              type="body"
              fontWeight={400}
              fontSize={15}
              color="#203040"
              />
              <Text
              children={`кол-во ${order.quntity} шт`}
              type="body"
              fontWeight={400}
              fontSize={15}
              color="#798391"
              />
            </View>
          </View>
        </View>
        <View>
          <Text
            children='Фото'
            type="body"
            fontWeight={700}
            fontSize={24}
            style ={{paddingTop: 24, paddingBottom: 16,}}
            color="#203040"
          />
          <TouchableOpacity>
            <View style={styles.photoBlock}>
              <Camera />
              <Text
                children='Добавить фото'
                type="body"
                fontWeight={400}
                fontSize={14}
                textAlign="center"
                color="#0090FF"
              />
            </View>
          </TouchableOpacity>
        </View>
          <View>
            <Text
                children='Комментарии'
                type="body"
                fontWeight={700}
                fontSize={24}
                style={{marginTop: 32,}}
                color="#203040"
            />
            <Text
                children={order.comments}
                type="body"
                fontWeight={400}
                fontSize={15}
                style={{marginTop: 16, marginBottom: 32,}}
                color="#203040"
            />
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  controlPanel: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderMeta: {
    marginTop: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBlock: {
    marginTop: 16,
    marginBottom: 24,
    flexDirection: 'row',
  },
  costomerInformation: {
    gap: 8,
  },
  works: {
    marginVertical: 24,
  },
  workDetails: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8ECF0',

  },
  photoBlock: {
    width: 110, 
    height: 110, 
    backgroundColor: '#F0F4F8', 
    borderRadius: 12, 
    alignItems: 'center', 
    justifyContent: 'center', 
    alignContent: 'center',
  },
});
