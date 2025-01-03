import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export type ValueOf<T> = T[keyof T];

export type AsyncStorageValue = string | null | undefined;

export type MySVGProps = {fillPrimary?: string; fill?: string};

export type SVGComponent = FC<SvgProps & MySVGProps>;
