import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

export const ProfileScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.body}>
        <View style={styles.titleWrapper}>
          <Text children={'Профиль'} type='body' fontWeight={700} fontSize={36} color='black' />
        </View>
        <Image style={styles.avatar} source={require('../../assets/icons/kit.jpg')} />
        <View style={styles.info}>
          <Text children={'+375 44 566 04 44'} fontSize={21} fontWeight={600} color='black' />
          <Text children={'УНП организации 796 213 310 130'} fontSize={17} fontWeight={400} color='#798391' />
        </View>
        <Button disabled={false} loading={false} title='Изменить телефон' onPress={() => {}} buttonStyle={{backgroundColor: 'none'}} textStyle={{color: '#0084EB', fontWeight: 400, fontSize: 17}}  />
      </View>
      <Button disabled={false} loading={false} title='Выйти из аккаунта' onPress={() => {}} buttonStyle={{backgroundColor: 'none', paddingBottom: 25}} textStyle={{color: '#EB4221', fontWeight: 400, fontSize: 17}} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 70,
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    width: '100%',
    alignItems: 'flex-start',
  },
  body: {
    width: '100%',
    height: '45%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    alignItems: 'center'
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 150,
  },
})