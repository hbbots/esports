import { ThemeContext } from '@/context/ThemeContext'; // optional, if you're using a theme
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';




export default function Home() {
 const router = useRouter();
  const { themeStyles } = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor:themeStyles.background}]}>
      <Text style={[styles.title,{color:themeStyles.text}]}>Hb chat</Text>
      <Text style={[styles.subtitle,{color:themeStyles.text}]}>
        Wuii chat with strangers ❤️😊
      </Text>

      


      <TouchableOpacity
        style={styles.button}
       onPress={() => router.push('/(screens)/chat')}

      >
        <Ionicons name="chatbubbles-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'tomato',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        elevation: 2,
      },
      buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
        marginLeft: 10,
      },
    })

//         Meet new people instantly. 
// Tap the button to start chatting with a stranger!