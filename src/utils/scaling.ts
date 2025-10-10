import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const scaleW = width / BASE_WIDTH;
const scaleH = height / BASE_HEIGHT;

export const wp = (size: number) => Math.round(scaleW * size);
export const hp = (size: number) => Math.round(scaleH * size);
export const sp = (size: number) => Math.round(scaleW * size);
