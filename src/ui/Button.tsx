import React, { FC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

interface PropsType extends ViewProps {
  disabled: boolean;
  loading: boolean;
  title: string;
  onPress: () => void;
  wrapperStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonDisabledStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: FC<PropsType> = ({
  disabled,
  loading,
  title,
  onPress,
  wrapperStyle,
  buttonStyle,
  buttonDisabledStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TouchableOpacity
        style={
          disabled
            ? [
                styles.button,
                styles.buttonDisabled,
                buttonStyle,
                buttonDisabledStyle,
              ]
            : [styles.button, buttonStyle]
        }
        disabled={disabled}
        onPress={onPress}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#0090FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
