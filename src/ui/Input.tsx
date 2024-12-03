import React, { FC, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CrossIcon from '../../assets/Icons/CrossIcon.svg';

interface InputProps {
  prompting: string;
  value: string;
  onChangeText: (text: string) => void;
  error: boolean;
  errorText: string;
}

const Input: FC<InputProps> = ({
  placeholder, 
  label, 
  prompting,
  value,
  onChangeText, 
  error,
  errorText
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChangeText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textWrapper}>{label}</Text>
      <View style={[styles.inputWrapper, isFocused && styles.inputFocused, error && styles.inputError]}>
        <TextInput 
          placeholder={placeholder} 
          value={value}
          style={styles.input}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {value.length > 0 && isFocused && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <CrossIcon />
          </TouchableOpacity>
        )}
      </View>
      {error ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : (
        <Text style={styles.textWrapper}>{prompting}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#E8ECF0',
    marginTop: 8,
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
  clearButton: {
    padding: 10,
  },
  textWrapper: {
    fontSize: 13,
    lineHeight: 16,
    color: '#798391',
  },
  errorText: {
    color: 'red',
  },
});

export default Input;



