import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  console.log(systemTheme)
  const [theme, setTheme] = useState(systemTheme || 'light');

  // Load saved theme on first load
  useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem('appTheme');
      if (savedTheme) setTheme(savedTheme);
    })();
  }, []);

  // Toggle light/dark mode
  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('appTheme', newTheme);
  };

  // Theme color definitions
  const themeColors = {
    light: {
      background: '#FFFFFF',
      text: '#000000',
      card: '#F5F5F5',
      border: '#E0E0E0',
      
    },
    dark: {
      background: '#121212',
      text: '#FFFFFF',
      card: '#1F1F1F',
      border: '#333333',
     
    },
  };

  // Select current theme style
  const themeStyles = themeColors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
