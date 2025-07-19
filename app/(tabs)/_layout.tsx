import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { ThemeProvider } from '@/context/ThemeContext';
import React from 'react';

export default function Layout() {
  return (
    
    <ThemeProvider>
      <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#111' },
      })}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Profile" />
      <Tabs.Screen name="Settings" />
    </Tabs>
    </ThemeProvider>
  );
}

