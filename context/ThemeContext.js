import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ThemeContext = createContext();


export const lightTheme = {
  background: '#ffffff',
  cardBackground: '#f5f5f5',
  text: '#000000',
  textSecondary: '#666666',
  tabBar: '#abc4ba',
  tabBarInactive: '#000000',
  tabBarActive: '#ffffff',
  border: '#e0e0e0',
  primary: '#abc4ba',
  error: '#ff3b30',
  success: '#34c759',
};

export const darkTheme = {
  background: '#121212',
  cardBackground: '#1e1e1e',
  text: '#ffffff',
  textSecondary: '#b3b3b3',
  tabBar: '#2c2c2c',
  tabBarInactive: '#888888',
  tabBarActive: '#ffffff',
  border: '#333333',
  primary: '#abc4ba',
  error: '#ff453a',
  success: '#32d74b',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setIsDarkMode(savedTheme === 'dark');
      }
    } catch (error) {
      console.log('Error loading theme:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};