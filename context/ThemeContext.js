import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme || 'light');

  // Load saved theme on mount
  useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem('appTheme');
      if (savedTheme) setTheme(savedTheme);
    })();
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('appTheme', newTheme);
  };

  const tintColorLight = '#0a7ea4';
  const tintColorDark = '#fff';

  const themeColors = {
    light: {
      text: '#1a1a1a',
      background: '#f2f2f2',
      tint: tintColorLight,
      icon: '#000000',
      tabIconDefault: '#a0a4ac',
      tabIconSelected: tintColorLight,
      card: '#F5F5F5',
      border: '#d0d0d0',
      common: '#FF6347',
      input: '#F5F5F5',
      inputtext: '#333333',
      borderin: '#2C2C2C',
      detailsColor: '#fc0093ff',
      maxPlayersColor: '#00695C',
      prizeColor: '#F57C00',
      feeColor: '#F57C00',
      dateColor: '#D84315',
      verifiedColor: '#388E3C',
    },
    dark: {
      text: '#f5f5f5',
      background: '#121212',
      tint: tintColorDark,
      icon: '#ffffff',
      tabIconDefault: '#616b75',
      tabIconSelected: '#00bcd4',
      card: '#1E1E1E',
      border: '#2c2c2e',
      common: '#FF6347',
      input: '#1E1E1E',
      inputtext: '#f5f5f5',
      borderin: '#3a3a3a',
      detailsColor: '#06fab9ff',
      maxPlayersColor: '#fa066cff',
      prizeColor: '#FFD700',
      feeColor: '#FFD700',
      dateColor: '#00fff2ff',
      verifiedColor: '#00f700ff',
    },
  };

  const themeStyles = themeColors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
