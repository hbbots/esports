import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { auth } from '../firebaseConfig';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const pressed = async () => {
  if (!email && !password) {
    setError("PLEASE ENTER EMAIL & PASSWORD");
  } else if (!email) {
    setError("PLEASE ENTER EMAIL");
  } else if (!password) {
    setError("PLEASE ENTER PASSWORD");
  } else {
    setError('');
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user.email);
      
      // ✅ Navigate manually to main screen
      router.replace("(tabs)/Home");
      console.log("🔁 Navigated to (tabs)");

    } catch (err) {
      console.error("Firebase error:", err.message);
      if (err.code === 'auth/user-not-found') {
        setError("No user found.");
      } else if (err.code === 'auth/wrong-password') {
        setError("Wrong password.");
      } else if (err.code === 'auth/invalid-email') {
        setError("Invalid email.");
      } else {
        setError("Login failed.");
      }
    }
  }
};
  return (
   
<LinearGradient
  colors={['#07D8F5', '#A54BEF', '#DF1AAF']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.gradient}
>

      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={pressed}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        
              <TouchableOpacity style={styles.nav}
               onPress={() => router.push('/Register')}>
                <Text style={styles.buttonText}>Create A Account</Text>
              </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffdd',
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#0039a6',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  errorText: {
    color: '#fff',
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
