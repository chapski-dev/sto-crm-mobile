import React, {FC, useMemo} from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

type TextType = keyof typeof styles;

type TextProps = RNTextProps & {
  type?: TextType;
  color?: string;
  textAlign?: TextStyle['textAlign'];
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: number;
};
// TODO: add theme colors
const Text: FC<TextProps> = ({
  type,
  style,
  color,
  textAlign,
  fontWeight,
  fontSize,
  ...rest
}) => {
  const styleUseMemo = useMemo(() => {
    return [
      styles[type ? type : 'body'],
      style,
      {
        color,
        textAlign,
        fontWeight,
        fontSize,
      },
    ];
  }, []);

  console.log(styleUseMemo)

  return <RNText {...rest} style={styleUseMemo} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 36,
    color: '#000',
  },
  label: {
    fontSize: 13,
    lineHeight: 16,
    color: '#798391',
  },
  body: {},
});

export {Text};
