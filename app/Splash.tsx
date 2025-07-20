import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, useColorScheme, View } from 'react-native';

export default function Splash() {
  const router = useRouter();
  const scheme = useColorScheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Login'); // Or wherever your first screen is
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, scheme === 'dark' ? styles.dark : styles.light]}>
      <Image
        source={
          scheme === 'dark'
            ? require('../assets/images/hb.jpg')
            : require('../assets/images/hb.jpg')
        }
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: '70%',
    height: '40%',
  },
});
