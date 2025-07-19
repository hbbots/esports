// app/_layout.tsx
import { ThemeProvider } from '@/context/ThemeContext';
import { Stack } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Image, useColorScheme, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { auth } from '../firebaseConfig';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);
  const [progress, setProgress] = useState(0);
  const scheme = useColorScheme();

  const splashImage = scheme === 'dark'
     ? require('../assets/images/hb.jpg') // 🌙 Add your dark splash image here
   : require('../assets/images/hb.jpg'); // ☀️ Add your light splash image here
  
       

  // Fake animated progress bar
  useEffect(() => {
    let interval: any;
    if (isLoggedIn === null) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 0.02;
          return next >= 0.95 ? 0.95 : next;
        });
      }, 40);
    }
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  // Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      console.log('User is', user ? 'logged in' : 'logged out');
    });

    return unsubscribe;
  }, []);

  // Show splash screen with image and progress bar
  if (isLoggedIn === null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: scheme === 'dark' ? '#000' : '#fff',
        }}
      >
        <Image
          source={splashImage}
          resizeMode="contain"
          style={{ width: '80%', height: '35%', marginBottom: 40 }}
        />
        <Progress.Bar
          progress={progress}
          width={200}
          color={scheme === 'dark' ? '#00bcd4' : '#1e88e5'}
          unfilledColor={scheme === 'dark' ? '#333' : '#ccc'}
          borderWidth={0}
          height={8}
          borderRadius={10}
        />
      </View>
    );
  }

  // Main app layout
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <>
            <Stack.Screen name="Login" />
            <Stack.Screen name="Register" />
          </>
        )}
      </Stack>
    </ThemeProvider>
  );
}



