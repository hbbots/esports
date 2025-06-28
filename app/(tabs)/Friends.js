import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Friends = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: themeStyles.background }]}>
        <Text style={[styles.header, { color: themeStyles.text }]}>Friends / Search</Text>
      </View>
    </SafeAreaView>
  );
};

export default Friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
