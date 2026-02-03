import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from './ThemeContext.js';
import LightBackgroundSvg from '../assets/BackgroundSvg';
import DarkBackgroundSvg from '../assets/DarkBackgroundSvg';

export default function AppBackground({ children }) {
  const { isDarkMode} = useTheme();
  const BackgroundSvg = isDarkMode ? DarkBackgroundSvg : LightBackgroundSvg;
  return (
    <View style={styles.container}>
      <BackgroundSvg style={StyleSheet.absoluteFill} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
