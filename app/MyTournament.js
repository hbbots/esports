

import { ThemeContext } from '@/context/ThemeContext';
import { useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { auth, db } from '../firebaseConfig';

export default function MyTournaments() {
  const { themeStyles } = useContext(ThemeContext);
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const user = auth.currentUser;
  

  useEffect(() => {
    const fetchTournaments = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, 'tournaments'),
          where('createdBy', '==', user.uid)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTournaments(data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (tournaments.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No tournaments created yet.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeStyles.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
         <Text style={[styles.header, { color: themeStyles.text }]}>🔖 My Tournaments</Text>
        {tournaments.map(item => (
          <TouchableOpacity
  key={item.id}
  onPress={() => router.push(`/tournament/${item.id}`)}
  style={[styles.card, { backgroundColor: themeStyles.card }]}
>
  <Text style={[styles.title, { color: themeStyles.text }]}>🔖 {item.title}</Text>
  <Text style={[styles.subtitle, { color: themeStyles.common }]}>🎮 Game: {item.game}</Text>

  <Text style={[styles.date, { color: themeStyles.dateColor }]}>
    📅 Date: {item.date?.toDate?.().toLocaleDateString?.() ?? 'No date'}
  </Text>

  {item.maxPlayers && (
    <Text style={[styles.subtitle, { color: themeStyles.maxPlayersColor }]}>
      👥 Max Players: {item.maxPlayers}
    </Text>
  )}

  {item.prize && (
    <Text style={[styles.subtitle, { color: themeStyles.prizeColor }]}>
      🏆 Prize Pool: ₹ {item.prize}
    </Text>
  )}

  {item.fee && (
    <Text style={[styles.subtitle, { color: themeStyles.verifiedColor }]}>
      💸 Entry Fee: ₹ {item.fee}
    </Text>
  )}
</TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:60,
    marginTop:20,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:7
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    fontWeight:700,
    marginBottom:7,
    textTransform:'capitalize'
  },
  date: {
    fontSize: 14,
    marginTop: 5,
    fontWeight:700,
  },
  centered: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});
