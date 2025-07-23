import { ThemeContext } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const router = useRouter();

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previous => !previous);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111' : '#fafafa' }]}>
      <Text style={[styles.header, { color: isDark ? '#fff' : '#000' }]}>Settings</Text>

      <TouchableOpacity style={styles.settings}>
        <View style={styles.iconLabel}>
          <Ionicons name="moon-outline" size={24} color={isDark ? 'yellow' : '#000'} />
          <Text style={[styles.settingstext, { color: isDark ? 'white' : '#000' }]}>
            Choose Theme
          </Text>
        </View>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: 'black', true: 'white' }}
          thumbColor={isDark ? 'yellow' : 'tomato'}
          ios_backgroundColor="tomato"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.settings}>
        <View style={styles.iconLabel}>
          <Ionicons name="notifications-outline" size={24} color={isDark ? '#008000' : '#000'} />
          <Text style={[styles.settingstext, { color: isDark ? 'white' : '#000' }]}>
            Notifications
          </Text>
        </View>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: 'tomato', true: 'tomato' }}
          thumbColor={isEnabled ? 'yellow' : 'white'}
        />
      </TouchableOpacity>


      <TouchableOpacity style={styles.settings} 

      onPress={() => router.push('/legal/Privacy')}>

        <View style={styles.iconLabel}>
         <Ionicons name="lock-closed" size={24} color={isDark ? 'white' : 'black'} />
          <Text style={[styles.settingstext, { color: isDark ? 'white' : '#000' }]}>
            Privacy & Policy
          </Text>
        </View>
      </TouchableOpacity>
     
     <TouchableOpacity
      onPress={() => router.push('/legal/Terms')}>

       
        <View style={styles.iconLabel}>


         <Ionicons name="document-text" size={24} color={isDark ?'white' : 'black'} />

          <Text style={[styles.settingstext, { color: isDark ? 'white' : '#000' }]}>
            Terms & Conditions
            
          </Text>
          
        </View>
      </TouchableOpacity>
     
      <Button
        title="Logout"
        color="tomato"
        onPress={async () => {
          try {
            await signOut(auth);
            router.replace("/Login");
            console.log("User signed out");
          } catch (error) {
            console.error("Logout error:", error.message);
          }
        }}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settings: {
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
    gap: 12,
  },
  settingstext: {
    fontSize: 18,
  },
});
