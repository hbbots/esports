import { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeContext } from '@/context/ThemeContext';
const pic = require("@/assets/images/icon.png");



const Profile = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={[styles.container, { backgroundColor: themeStyles.background }]}>
      <Text style={[styles.header, { color: themeStyles.text }]}>Profile</Text>
    
    <Text style={[styles.title, { color: themeStyles.text }]}>
        Welcome to the Home Screen
      </Text>
    <View style={styles.imagecode}>
     <Image source={pic} style={styles.Image} />
     </View>
     
    </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",

    },
    header:{
        color:"yellow",
        fontSize:70,
        
        fontWeight:"100",
        textAlign:"center",
        
    },
    welcome:{
        color:"yellow",
        fontSize:20,
        marginTop:40,
        fontWeight:"100",
        textAlign:"center",
        
    },
    imagecode: {
    alignItems: 'center',
    marginVertical: 30,
    
  },
    Image:{
        height:200,
        width:200,
        borderRadius:200
    }
})