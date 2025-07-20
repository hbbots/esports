import { ThemeContext } from '@/context/ThemeContext';
import { db } from '@/firebaseConfig';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TournamentDetails() {
  const { id } = useLocalSearchParams();
  const { themeStyles } = useContext(ThemeContext);
  const [tournament, setTournament] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchTournament = async () => {
      const docRef = doc(db, 'tournaments', id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setTournament({ id: snapshot.id, ...snapshot.data() });
      }
    };
    fetchTournament();
  }, [id]);

  if (!tournament) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
        <Text style={{ color: themeStyles.text, padding: 20 }}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open link:', err));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={[styles.card, { backgroundColor: themeStyles.card }]}>
          <Text style={[styles.title, { color: themeStyles.text }]}>🔖 {tournament.title}</Text>

         
          <Text style={[styles.game, { color: themeStyles.text }]}>
  🎮 Game:  {tournament.game} 
</Text>

       <Text style={[styles.label, { color: themeStyles.detailsColor }]}>
            📖 Details: {tournament.description}
          </Text>


          <Text style={[styles.label, { color: themeStyles.maxPlayersColor }]}>
            👥 Max Players:
          </Text>
          <Text style={[styles.value, styles.italic, { color: themeStyles.text }]}>
            {tournament.maxPlayers}
          </Text>


          <Text style={[styles.label, { color: themeStyles.prizeColor }]}>
            🏆 Prize Pool:
          </Text>
          <Text style={[styles.value, { color: themeStyles.text }]}>
            <Text style={styles.bold}>₹{tournament.prize}</Text>
          </Text>

          <Text style={[styles.label, { color: themeStyles.feeColor }]}>
            💸 Entry Fee:
          </Text>
          <Text style={[styles.value, { color: themeStyles.text }]}>
            <Text style={styles.underline}>₹{tournament.fee}</Text>
          </Text>

          <Text style={[styles.label, { color: themeStyles.dateColor }]}>
            📅 Date:
          </Text>
          <Text style={[styles.value, { color: themeStyles.text }]}>
            <Text style={styles.bold}>
              {new Date(tournament.date.seconds * 1000).toDateString()}
            </Text>
          </Text>

          <Text style={[styles.label, { color: themeStyles.verifiedColor }]}>
            ✅ Verified:
          </Text>
          <Text style={[styles.value, styles.italic, { color: themeStyles.text }]}>NO</Text>
          

          <View style={styles.linksContainer}>
            {tournament.whatsappLink && (
              <TouchableOpacity style={styles.buttonwhatsapp} onPress={() => openLink(tournament.whatsappLink)}>
                <Text style={styles.buttonText}>📱 WhatsApp</Text>
              </TouchableOpacity>
            )}

            {tournament.instagramLink && (
              <TouchableOpacity style={styles.buttoninstagram} onPress={() => openLink(tournament.instagramLink)}>
                <Text style={styles.buttonText}>📸 Instagram</Text>
              </TouchableOpacity>
            )}

            {tournament.discordLink && (
              <TouchableOpacity style={styles.button} onPress={() => openLink(tournament.discordLink)}>
                <Text style={styles.buttonText}>🎮 Discord</Text>
              </TouchableOpacity>
              
            )}

            <Text style={[styles.disclaimer, { color: themeStyles.text }]}>
  ⚠️ Disclaimer: This tournament is hosted by a third party. We are not responsible for any winnings, payments, or disputes. Please join at your own risk and verify details with the host before participating.
</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
    game: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
    textTransform:'capitalize'
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
  },
  disclaimer: {
  fontSize: 13,
  marginTop: 30,
  fontStyle: 'italic',
  textAlign: 'center',
  opacity: 0.8,
  lineHeight: 18,
},

  value: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 4,
    marginBottom: 4,
  },
  linksContainer: {
    marginTop: 24,
  },
  buttonwhatsapp: {
    backgroundColor: '#19dc51ff',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttoninstagram: {
    backgroundColor: '#ff00f7ff',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
