import React, {forwardRef, useRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInputProps,
} from 'react-native';
import CrossIcon from '@assets/svg/round-cross.svg';

interface InputProps extends TextInputProps {
  label?: string;
  prompting?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
  errorText: string;
}

export const Input = forwardRef<InputProps, InputProps>(
  (
    {label, prompting, value, onChangeText, error, errorText, ...props},
    ref,
  ) => {
    const localRef: React.Ref<TextInput> &
      React.Ref<React.PropsWithChildren<InputProps>> = useRef(null);

    const [isFocused, setIsFocused] = useState(false);

    const handleClear = () => onChangeText('');

    return (
      <View style={{gap: 8}}>
        <Text style={styles.label} children={label} />
        <View
          style={[
            styles.inputWrapper,
            isFocused && styles.inputFocused,
            error && styles.inputError,
          ]}>
          <TextInput
            value={value}
            style={styles.input}
            onChangeText={onChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            //@ts-ignore
            ref={ref || localRef}
            {...props}
          />
          {value.length > 0 && isFocused && (
            <TouchableOpacity onPress={handleClear}>
              <CrossIcon />
            </TouchableOpacity>
          )}
        </View>
        {error && <Text style={styles.errorText} children={errorText} />}
        <Text style={styles.label} children={prompting} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#E8ECF0',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 20,
  },
  inputFocused: {
    borderColor: '#0090FF',
  },
  inputError: {
    borderColor: 'red',
  },
  label: {
    fontSize: 13,
    lineHeight: 16,
    color: '#798391',
  },
  errorText: {
    color: 'red',
  },
});
