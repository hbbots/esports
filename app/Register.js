import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { auth } from '../firebaseConfig'; // adjust path based on your setup

const router = useRouter();

const genders = ['👨 Male', '👩 Female', '🏳️‍🌈 Other'];
 
const RegistrationScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] =useState('')
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleRegister = async () => {
  if (!fullName) {
    setError("PLEASE ENTER YOUR NAME");
    return;
  } else if (!email) {
    setError("PLEASE ENTER EMAIL");
    return;
  } else if (!gender) {
    setError("ADD GENDER");
    return;

  }  else if(!phone) {
      setError("Please Enter Phone Number")
      return;
  } else if (!password) {
    setError("PLEASE ENTER PASSWORD");
    return;
  } else if (!confirmPassword) {
    setError("PLEASE CONFIRM PASSWORD");
    return;
  } else if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User registered:", user.email);
    setError("USER REGISTERED SUCCESSFULLY");

    // Reset form fields
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setGender('');
    setPhone('')

    // ✅ NO NEED for manual navigation here — let auth listener handle screen change
  } catch (err) {
    console.error("Firebase error log:", err.message);
    if (err.code === 'auth/email-already-in-use') {
      setError("Email already in use.");
    } else if (err.code === 'auth/invalid-email') {
      setError("Invalid email format.");
    } else if (err.code === 'auth/weak-password') {
      setError("Password must be at least 6 characters.");
    } else {
      setError("Registration failed.");
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

       <View style={styles.inputWrapper}>
      <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      </View>

        <View style={styles.inputWrapper}>
      <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
 <View style={styles.inputWrapper}>
      <Ionicons name="call-outline" size={20} color="#666" style={styles.icon} />
      
      <TextInput
      style={styles.input}
      placeholder='Phone'
      value={phone}
      onChangeText={setPhone}
      keyboardType="phone-pad"
      />
</View>
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderContainer}>
        {genders.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.genderButton,
              gender === item && styles.genderButtonSelected,
            ]}
            onPress={() => setGender(item)}
          >
            <Text
              style={[
                styles.genderText,
                gender === item && styles.genderTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

        <View style={styles.inputWrapper}>
      <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
</View>
  <View style={styles.inputWrapper}>
      <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nav}
       onPress={() => router.push('/Login')}>
        <Text style={styles.buttonText}>Already have a Account</Text>
      </TouchableOpacity>

    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  
  header: {
   fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
   flex: 1,
    height: 50,
    fontSize: 16,
    color: 'black',
    // height: 50,
    // backgroundColor: '#fff',
    // borderRadius: 13,
    // paddingHorizontal: 16,
    // marginBottom: 16,
    // fontWeight:'bold',
    // borderColor: '#ccc',
    // borderWidth: 1,
  },
  icon: {
    marginRight: 10,
    color:"red",
    fontSize:23,
  },
  inputWrapper:{
    flexDirection:'row',
     alignItems: 'center',
    backgroundColor: '#ffffffdd',
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: 'white',
     padding: 3,
    marginHorizontal: 4,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  genderButton: {
    flex: 1,
    padding: 12,
    marginHorizontal: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 13,
    alignItems: 'center',
  },
  genderButtonSelected: {
    backgroundColor: '#4285f4',
  },
  genderText: {
    color: '#333',
    fontWeight: '500',
  },
  genderTextSelected: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#0039a6',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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

export default RegistrationScreen;
