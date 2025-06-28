// app/_layout.js
import { ThemeProvider } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    
    <ThemeProvider>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Friends') {
              iconName = focused ? 'people-outline' : 'people-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#111' },
        })}
      >
        <Tabs.Screen name="home" options={{ title: 'HOME' }} />
        <Tabs.Screen name="Profile" options={{ title: 'Profile' }} />
        <Tabs.Screen name="Friends" options={{ title: 'Friends' }} />
        <Tabs.Screen name="Settings" options={{ title: 'Settings' }} />
      
      </Tabs>
    </ThemeProvider>
  );
}
  