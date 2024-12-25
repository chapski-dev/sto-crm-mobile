import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

export const ProfileScreen = () => {
  const [isAvatarExist, setIsAvatarExist] = useState<boolean>(true)

  type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

	const navigation = useNavigation<AuthScreenNavigationProp>();

	const changePhoneHandler = () => {
		navigation.push('ChangePhoneScreen');
	}

  const [isPopUpShown, setIsPopUpShown] = useState<boolean>(false)

  return (
    <View style={styles.wrapper}>

      <View style={styles.main}>
        <View style={styles.body}>
          <View style={styles.titleWrapper}>
            <Text children={'Профиль'} type='body' fontWeight={700} fontSize={36} color='black' />
          </View>
          <Image style={styles.avatar} source={isAvatarExist ? require('../../assets/icons/valakas.png') : require('../../assets/icons/noAvatar.png')} />
          <View style={styles.info}>
            <Text children={'+375 44 566 04 44'} fontSize={21} fontWeight={600} color='black' />
            <Text children={'УНП организации 796 213 310 130'} fontSize={17} fontWeight={400} color='#798391' />
          </View>
          <Button title='Изменить телефон' onPress={changePhoneHandler} buttonStyle={{backgroundColor: 'none'}} textStyle={{color: '#0084EB', fontWeight: 400, fontSize: 17}} />
        </View>
        <Button title='Выйти из аккаунта' onPress={() => {setIsPopUpShown(true)}} buttonStyle={{backgroundColor: 'none'}} textStyle={{color: '#EB4221', fontWeight: 400, fontSize: 17}} />
      </View>

    {isPopUpShown ? 
    <View style={styles.popupWrapper}>
      <View style={styles.popup}>
        <Text children={'Выйти из аккаунта'} fontWeight={600} fontSize={17} color='black' />
        <Text children={'Вы действительно хотите выйти из аккаунта?'} type='body' fontWeight={400} fontSize={14} color='black' textAlign='center' />
        <View style={styles.popupButtonsWrapper}>
          <Button title='Отмена' onPress={() => {setIsPopUpShown(false)}} wrapperStyle={{width: '50%'}} buttonStyle={{backgroundColor: 'none'}} textStyle={{color: '#0084EB', fontWeight: 400, fontSize: 14}} />
          <Button title='Выйти' onPress={() => {setIsPopUpShown(false)}} wrapperStyle={{width: '50%'}} buttonStyle={{backgroundColor: 'none'}} textStyle={{color: '#EB4221', fontWeight: 400, fontSize: 14}} />
        </View>
      </View> 
    </View>
    : ''}

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },
  main: {
    paddingTop: 70,
    paddingBottom: 25,
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
  popupWrapper: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    paddingHorizontal: 55,
    paddingVertical: 15,
    width: '70%',
    borderRadius: 16,
    alignItems: 'center',
    gap: 10,
  },
  popupButtonsWrapper: {
    flexDirection: 'row'
  }
})