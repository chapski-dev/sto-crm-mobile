import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../ui/Button';
import {Text} from '../ui/Text';
import NoConnectionIcon from '../../assets/icons/no-connection.svg';

export const NoConnection = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAuthButtonPressHandler = () => {
    console.log('button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <NoConnectionIcon />

        <View>
          <Text
            children={'Нет соединения с интернетом!'}
            type="body"
            fontSize={17}
            fontWeight={500}
            textAlign="center"
            color="#203040"
          />
        </View>

        <Text
          children={'Похоже, вы не подключены к интернету.'}
          type="body"
          fontSize={14}
          fontWeight="normal"
          textAlign="center"
          color="#798391"
        />
        <Text
          children={'Повторите попытку.'}
          type="body"
          fontSize={14}
          fontWeight="normal"
          textAlign="center"
          color="#798391"
        />
      </View>

      <Button
        disabled={disabledButton}
        loading={loading}
        title={'Обновить'}
        onPress={onAuthButtonPressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  body: {
    height: '93%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
  },
});
