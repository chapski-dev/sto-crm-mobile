import React, { useState } from 'react';
import { View, StyleSheet, Image, Modal } from 'react-native';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import NoAvatarIcon from '../../assets/icons/no-avatar.svg'

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ProfileScreen = () => {
  const isAvatarExist = true

	const navigation = useNavigation<AuthScreenNavigationProp>();

	const goToChangePhone  = () => {
		navigation.push('ChangePhoneScreen');
	}

  const [isPopUpShown, setIsPopUpShown] = useState(false)

  return (
    <View style={styles.wrapper}>

      <View style={styles.main}>
        <View style={styles.body}>
          <View style={styles.titleWrapper}>
            <Text children={'Профиль'} color={'black'} fontWeight={700} fontSize={36} />
          </View>
          {
            isAvatarExist 
            ?
            <Image style={styles.avatar} source={require('../../assets/pictures/valakas.png')} />
            :
            <NoAvatarIcon style={styles.avatar} />
          }
          <View style={styles.info}>
            <Text children={'+375 44 566 04 44'} color={'black'} fontSize={21} fontWeight={600} />
            <Text children={'УНП организации 796 213 310 130'} fontSize={17} fontWeight={400} color='#798391' />
          </View>
          <Button title='Изменить телефон' onPress={goToChangePhone} type='clear' textStyle={{color: '#0084EB', fontWeight: 400, fontSize: 17}} />
        </View>
        <Button title='Выйти из аккаунта' onPress={() => {setIsPopUpShown(true)}} type='clear' textStyle={{color: '#EB4221', fontWeight: 400, fontSize: 17}} />
      </View>

    <Modal visible={isPopUpShown} >
      <View style={styles.popupWrapper}>
        <View style={styles.popup}>
          <Text children={'Выйти из аккаунта'} color={'black'} fontWeight={600} fontSize={17} />
          <Text children={'Вы действительно хотите выйти из аккаунта?'} fontWeight={400} fontSize={14} textAlign='center' />
          <View style={styles.popupButtonsWrapper}>
            <Button title='Отмена' onPress={() => {setIsPopUpShown(false)}} wrapperStyle={{width: '50%'}} type='clear' textStyle={{color: '#0084EB', fontWeight: 400, fontSize: 14}} />
            <Button title='Выйти' onPress={() => {setIsPopUpShown(false)}} wrapperStyle={{width: '50%'}} type='clear' textStyle={{color: '#EB4221', fontWeight: 400, fontSize: 14}} />
          </View>
        </View> 
      </View>
    </Modal>

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
    height: 96,
    width: 96,
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