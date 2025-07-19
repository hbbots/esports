<<<<<<< HEAD
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
=======



import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
>>>>>>> 608141fa4b5cc12423271228ad3a57c4572997bd
    </ThemeProvider>
  );
}



<<<<<<< HEAD
=======
// // app/_layout.tsx
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <NavThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="(screens)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </NavThemeProvider>
//   );
// }


>>>>>>> 608141fa4b5cc12423271228ad3a57c4572997bd
