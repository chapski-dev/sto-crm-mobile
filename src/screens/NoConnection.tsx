import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../ui/Button';
import {Text} from '../ui/Text';
import NoConnectionIcon from '../../assets/icons/no-connection.svg';

export const NoConnection = () => {
  const onAuthButtonPressHandler = () => {
    console.log('button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <NoConnectionIcon />
        <View style={{gap: 8}}>
          <Text
            children={'Нет соединения с интернетом!'}
            type="body"
            fontSize={17}
            fontWeight={500}
            textAlign="center"
            color="#203040"
          />
          <View>
            <Text
              children="Похоже, вы не подключены к интернету."
              type="body"
              fontSize={14}
              fontWeight="normal"
              textAlign="center"
              color="#798391"
            />
            <Text
              children="Повторите попытку."
              type="body"
              fontSize={14}
              fontWeight="normal"
              textAlign="center"
              color="#798391"
            />
          </View>
        </View>
      </View>

      <Button title={'Обновить'} onPress={onAuthButtonPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    gap: 16,
  },
  title: {
    alignItems: 'center',
  },
});
