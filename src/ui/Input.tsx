import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CrossIcon from '../Icons/CrossIcon.svg';
import { Label } from "./Text";

const Input = ({ placeholder, props1, props2 }) => {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setInputText('');
  };

  const isError = inputText.length > 0 && inputText.length < 12;

  return (
    <View style={styles.container}>
      <Label props={props1} />
      <TextInput 
        placeholder={placeholder} 
        value={inputText}
        style={[styles.input, isFocused && styles.inputFocused, isError && styles.inputError]}
        onChangeText={setInputText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isError ? (
        <Text style={styles.errorText}>Error</Text>
      ) : (
        <Label props={props2} />
      )}
      {inputText.length > 0 && isFocused && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <CrossIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 15,
    paddingLeft: 20,
    marginTop: 8,
    borderColor: '#E8ECF0',
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: '#0090FF',
  },
  inputError: {
    borderColor: 'red',
  },
  clearButton: {
    position: 'absolute',
    right: 25,
    top: 38,
  },
  errorText: {
     color: 'red',
  },
});

export default Input;
