import { ThemeContext } from '@/context/ThemeContext';
import { db } from '@/firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateTournament() {
  const [title, setTitle] = useState('');
  const [game, setGame] = useState('pubg');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [maxPlayers, setMaxPlayers] = useState('');
  const [whatsappLink, setWhatsappLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [otherLink, setOtherLink] = useState('');
  const [fee , setfee] = useState('');
  const [prize, setprize] = useState('');
  const [error , setError] = useState('');

  const { themeStyles, theme } = useContext(ThemeContext);

  const handleCreate = async () => {
    if (!title || !game || !date || !maxPlayers) {
      return setError("Missing fields, Please fill in all required fields.");
    }

    try {
      const user = getAuth().currentUser;
      if (!user) throw new Error('User not logged in');

      await addDoc(collection(db, 'tournaments'), {
        title,
        game: game.toLowerCase(),
        description,
        date,
        fee,
        prize,
        maxPlayers: Number(maxPlayers),
        createdBy: user.uid,
        createdAt: serverTimestamp(),
        whatsappLink,
        instagramLink,
        otherLink,
      });

      Alert.alert('✅ Success', 'Tournament created successfully');

      setError("ADDED SUCCESSFULLY");

      setTitle('');
      setGame('pubg');
      setDescription('');
      setDate(new Date());
      setMaxPlayers('');
      setWhatsappLink('');
      setInstagramLink('');
      setOtherLink('');
      setfee('');
      setprize('');
    } catch (err) {
      Alert.alert('Error', (err as Error).message);
    }
  };

  const commonInputStyle = {
    backgroundColor: themeStyles.input,
    color: themeStyles.inputtext,
    borderColor: themeStyles.borderin,
  };

  const placeholderTextColor = theme === 'dark' ? '#aaa' : '#444';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        key={theme}
        contentContainerStyle={[styles.container, { backgroundColor: themeStyles.background }]}
      >
        <Text style={[styles.heading, { color: themeStyles.text }]}>🏆 Create Tournament</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          placeholder="Tournament Title"
          placeholderTextColor={placeholderTextColor}
          value={title}
          onChangeText={setTitle}
          style={[styles.input, commonInputStyle]}
        />

        <Text style={[styles.label, { color: themeStyles.text }]}>Select Game</Text>
        <Picker
          selectedValue={game}
          onValueChange={(itemValue) => setGame(itemValue)}
          style={[styles.picker, {
            backgroundColor: themeStyles.input,
            color: themeStyles.inputtext,
            borderColor: themeStyles.borderin,
          }]}
        >
          <Picker.Item label="PUBG Mobile" value="pubg" />
          <Picker.Item label="Free Fire" value="free fire" />
          <Picker.Item label="Call of Duty" value="cod" />
          <Picker.Item label="Fortnite" value="fortnite" />
          <Picker.Item label="Ludo King" value="ludo king" />
          <Picker.Item label="eFootball" value="efootball" />
          <Picker.Item label="EA FC Mobile" value="ea fc mobile" />
        </Picker>

        <TextInput
          placeholder="Description"
          placeholderTextColor={placeholderTextColor}
          value={description}
          onChangeText={setDescription}
          multiline
          style={[styles.input, { height: 80 }, commonInputStyle]}
        />

        <TextInput
          placeholder="Entry Fee"
          placeholderTextColor={placeholderTextColor}
          value={fee}
          onChangeText={setfee}
          keyboardType="numeric"
          style={[styles.input, commonInputStyle]}
        />

        <TextInput
          placeholder="Prize Pool"
          placeholderTextColor={placeholderTextColor}
          value={prize}
          onChangeText={setprize}
          keyboardType="numeric"
          style={[styles.input, commonInputStyle]}
        />

        <Text style={[styles.label, { color: themeStyles.text }]}>Tournament Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={[styles.input, commonInputStyle, { justifyContent: 'center', height: 50 }]}
        >
          <Text style={{ color: themeStyles.inputtext }}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        <TextInput
          placeholder="Max Players"
          placeholderTextColor={placeholderTextColor}
          value={maxPlayers}
          onChangeText={setMaxPlayers}
          keyboardType="numeric"
          style={[styles.input, commonInputStyle]}
        />

        <Text style={[styles.label, { color: themeStyles.text }]}>External Links</Text>
        <TextInput
          placeholder="WhatsApp Link"
          placeholderTextColor={placeholderTextColor}
          value={whatsappLink}
          onChangeText={setWhatsappLink}
          style={[styles.input, commonInputStyle]}
        />
        <TextInput
          placeholder="Instagram Link"
          placeholderTextColor={placeholderTextColor}
          value={instagramLink}
          onChangeText={setInstagramLink}
          style={[styles.input, commonInputStyle]}
        />
        <TextInput
          placeholder="Other Link (e.g., UPI, Discord)"
          placeholderTextColor={placeholderTextColor}
          value={otherLink}
          onChangeText={setOtherLink}
          style={[styles.input, commonInputStyle]}
        />

        <Button title="Create Tournament" onPress={handleCreate} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  picker: {
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
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
