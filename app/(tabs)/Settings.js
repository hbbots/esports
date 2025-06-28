// app/Settings.js
import { ThemeContext } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
     <SafeAreaView style={{ flex: 1 }}>
    <View style={[styles.container, { backgroundColor: isDark ? '#111' : '#fafafa' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Settings</Text>

      <TouchableOpacity style={styles.option}>
        <View style={styles.iconLabel}>
          <Ionicons name="moon-outline" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Dark Mode</Text>
        </View>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.iconLabel}>
          <Ionicons name="notifications-outline" size={20} color={isDark ? '#fff' : '#000'} />
          <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Notifications</Text>
        </View>
        <Switch value={true} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Clear Chat History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={[styles.label, { color: 'red' }]}>Logout</Text>
      </TouchableOpacity>

       
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#444',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 18,
  },
});
