// app/game/[id].tsx
import { ThemeContext } from '@/context/ThemeContext';
import { db } from '@/firebaseConfig';
import * as Linking from 'expo-linking';
import { router, useLocalSearchParams } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function GameDetail() {
  const { id, title, image, game } = useLocalSearchParams();
  const { themeStyles } = useContext(ThemeContext);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      if (!game) return;

      try {
        const q = query(
          collection(db, 'tournaments'),
          where('game', '==', game.toLowerCase())
        );
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTournaments(results);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    fetchTournaments();
  }, [game]);

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
      
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: image as string }} style={styles.image} />
        <Text style={[styles.title, { color: themeStyles.text }]}>{title}</Text>

        {tournaments.length === 0 ? (
          <Text style={[styles.details, { color: themeStyles.text }]}>
            No tournaments available for {title} yet.
          </Text>
        ) : (
          <>
            <Text style={[styles.subtitle, { color: themeStyles.text }]}>
              Available Tournaments
            </Text>

            {tournaments.map((tournament) => (
              <TouchableOpacity
                key={tournament.id}
                style={[styles.card, { backgroundColor: themeStyles.card }]}
                onPress={() => router.push(`/tournament/${tournament.id}`)}
              >
                <Text style={[styles.tournamentTitle, { color: themeStyles.text }]}>
                 🔖 {tournament.title}
                </Text>
                <Text style={{ color: themeStyles.detailsColor, marginBottom: 9 , fontSize: 16, fontWeight: 'bold' }}>
                 📖  Details:  {tournament.description}
                </Text>
                <Text style={{ color: themeStyles.maxPlayersColor, fontSize: 16, fontWeight: 'bold', marginBottom:11 }}>
                  👥 Max Players: {tournament.maxPlayers}
                </Text>
                 <Text style={{ color: themeStyles.prizeColor, fontSize: 16, fontWeight: 'bold', marginBottom: 11 }}>
                  🏆  Prize Pool:  ₹{tournament.prize}
                </Text>
                 <Text style={{ color: themeStyles.feeColor, fontSize: 16, fontWeight: 'bold', marginBottom:11}}>
                  💸  Entry Fee:  ₹{tournament.fee}
                </Text>
                <Text style={{ color: themeStyles.dateColor, fontSize: 15, fontWeight: 'bold',marginBottom:11 }}>
                  📅  Date: {new Date(tournament.date.seconds * 1000).toDateString()}
                </Text>
               <Text style={{ color: themeStyles.verifiedColor, fontSize: 16, fontWeight: 'bold', marginBottom:1}}>
                 ✅  Verified:  NO
                </Text>
                

                {/* Social Buttons */}
                <ScrollView horizontal style={{ marginTop: 10 }}>
                  {tournament.whatsapp && (
                    <TouchableOpacity
                      style={[styles.socialBtn, { backgroundColor: '#25D366' }]}
                      onPress={() => openLink(tournament.whatsapp)}
                    >
                      <Text style={styles.socialBtnText}>📱 WhatsApp</Text>
                    </TouchableOpacity>
                  )}
                  {tournament.instagram && (
                    <TouchableOpacity
                      style={[styles.socialBtn, { backgroundColor: '#e70484ff' }]}
                      onPress={() => openLink(tournament.instagram)}
                    >
                      <Text style={styles.socialBtnText}>📸 Instagram</Text>
                    </TouchableOpacity>
                  )}
                  {tournament.discord && (
                    <TouchableOpacity
                      style={[styles.socialBtn, { backgroundColor: '#5865F2' }]}
                      onPress={() => openLink(tournament.discord)}
                    >
                      <Text style={styles.socialBtnText}>🎮 Discord</Text>
                    </TouchableOpacity>
                  )}
                </ScrollView>
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 20,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tournamentTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    textAlign:'center',
    textDecorationLine: 'underline',
    textDecorationColor:'tomato'

  },
  socialBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    marginRight: 10,
  },
  socialBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
