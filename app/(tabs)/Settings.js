import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import { ThemeContext } from '@/context/ThemeContext';

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
         <Ionicons name="moon-outline"  size={24} color={isDark ? 'yellow' : '#000'}  />
          <Text 
      style={[
        styles.settingstext, 
        { color: isDark ? 'white' : '#000' }
      ]}
    >
      Choose Theme
    </Text>
  </View>
       <Switch
  value={isDark}
  onValueChange={toggleTheme}
   trackColor={{
    false: 'black', // Light gray for light mode
    true: 'white',  // Green for dark mode
  }}
  thumbColor={isDark ? 'yellow' : 'tomato'}
  ios_backgroundColor="tomato"

/>
 
    </TouchableOpacity>

     <TouchableOpacity style={styles.settings}>
  <View style={styles.iconLabel}>
    <Ionicons 
      name="notifications-outline" 
      size={24} 
      color={isDark ? '#008000' : '#000'} 
    />
    <Text 
      style={[
        styles.settingstext, 
        { color: isDark ? 'white' : '#000' }
      ]}
    >
      Notifications
    </Text>
  </View>
  <Switch
    value={isEnabled}
    onValueChange={toggleSwitch}
     trackColor={{ false: 'tomato', true: 'tomato' }} // Background color of the switch
  thumbColor={isEnabled ? 'yellow' : 'white'}   />
         
</TouchableOpacity>

     
 <Button
  title="Logout"
  color={isDark ? 'tomato' : 'tomato'}
  onPress={async () => {
    try {
      await signOut(auth);
      router.replace("/Login"); // ⬅️ Force redirect to Login
      console.log("User signed out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  }}
/>
    
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "black",
    // centers horizontally
    padding: 20,
    gap: 20,
 
},

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white"
  },
  
  settings:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#444',
  },

  iconLabel:{
 flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  
  },
  settingstext:{
    fontSize: 18,
    color:"yellow"
  },
logouttext:{
    color:"red",
     fontSize: 18,
},

//   button:{
//     flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'tomato',
//         paddingVertical: 14,
//         paddingHorizontal: 30,
//         borderRadius: 10,
//         elevation: 2,
//   },
//   buttonText:{
//   fontSize: 18,
//         color: '#fff',
//         fontWeight: '600',
//         marginLeft: 10,
//   }
})