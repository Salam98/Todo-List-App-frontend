import i18n from 'i18next';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const changeLanguage = async (lang) => {
  await AsyncStorage.setItem('language', lang);

  await i18n.changeLanguage(lang);

  const isRTL = lang === 'ar';
  I18nManager.forceRTL(isRTL);

  await Updates.reloadAsync();
};