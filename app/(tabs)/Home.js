import { ThemeContext } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const allGames = [
  {
    id: '1',
    title: 'PUBG Mobile',
    image: 'https://tse4.mm.bing.net/th/id/OIP.KG86f7mBrjCSd-wV-QaoJgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    game: 'pubg',
  },
  {
    id: '2',
    title: 'Free Fire',
    image: 'https://tournova.games/blog/files/uploads/2024/11/Top-esports-games-mobile.-5.webp',
    game: 'free fire',
  },
  {
    id: '3',
    title: 'Call of Duty',
    image: 'https://www.internerdz.com.br/wp-content/uploads/2020/04/CODmobile22.png',
    game: 'cod',
  },
  {
    id: '4',
    title: 'Fortnite',
    image: 'https://static.beebom.com/wp-content/uploads/2024/03/Fortnite-Chapter-5-Season-2-Myths-and-Mortals-Cover.jpg?quality=75&strip=all',
    game: 'fortnite',
  },
  {
    id: '5',
    title: 'EA Sports FC Mobile Soccer',
    image: 'https://static.beebom.com/wp-content/uploads/2024/04/EA-Sports-FC-mobile-best-multiplayer-android-games.jpg?quality=75&strip=all',
    game: 'ea fc mobile',
  },
  {
    id: '6',
    title: 'eFootball',
    image: 'https://www.konami.com/efootball/s/img/share/efootball2024_mainvisual_messi.jpg?v=513',
    game: 'efootball',
  },
  {
    id: '7',
    title: 'Ludo King',
    image: 'https://th.bing.com/th/id/OIP.Y82SFiLzbbnBDsdweDuyQwHaHa?w=105&h=104&c=7&bgcl=8d4898&r=0&o=6&dpr=1.3&pid=13.1',
    game: 'ludo king',
  },
];

export default function GameHomeScreen() {
  const router = useRouter();
  const { themeStyles } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = allGames.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
      <ScrollView style={[styles.container, { backgroundColor: themeStyles.background }]}>
        <Text style={[styles.title, { color: themeStyles.text }]}>🎮 Game Tournaments</Text>

        <View
          style={[
            styles.searchWrapper,
            {
              backgroundColor: themeStyles.card,
              borderColor: themeStyles.border,
            },
          ]}
        >
          <Ionicons
            name="search"
            size={20}
            color={themeStyles.icon}
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Search games..."
            placeholderTextColor={themeStyles.icon}
            style={[
              styles.searchInput,
              {
                backgroundColor: themeStyles.card,
                color: themeStyles.text,
                borderColor: themeStyles.border,
              },
            ]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {filteredGames.map((game) => (
            <TouchableOpacity
              key={game.id}
              style={[styles.gameCard, { backgroundColor: themeStyles.card }]}
              onPress={() =>
                router.push({
                  pathname: '/game/[id]',
                  params: {
                    id: game.id,
                    title: game.title,
                    image: game.image,
                    game: game.game, // ✅ send proper game key
                  },
                })
              }
            >
              <Image source={{ uri: game.image }} style={styles.gameImage} />
              <Text style={[styles.gameTitle, { color: themeStyles.text }]}>{game.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

<View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>🔥 Featured Tournament</Text>
        <View style={[styles.featureCard, { backgroundColor: themeStyles.card }]}>
          <Image
            source={{
              uri: 'https://tournova.games/blog/files/uploads/2024/11/Top-esports-games-mobile.-5.webp',
            }}
            style={styles.featureImage}
          />
          <View style={styles.featureContent}>
            <Text style={[styles.featureTitle, { color: themeStyles.text }]}>Free Fire Showdown</Text>
            <Text style={[styles.featureDetails, { color: themeStyles.text }]}>
              Prize: ₹10,000 • Entry: ₹50
            </Text>
            <TouchableOpacity style={[styles.joinBtn, { backgroundColor: themeStyles.common}]}>
              <Text style={{ color: themeStyles.background, fontWeight: '600' }}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.primaryBtn,
            {
             backgroundColor: '#0a84ff',
             borderColor: themeStyles.text,
             borderWidth: 1,
            },
          ]}
           onPress={() => router.push('/CreateTournament')}
        >
          <Text style={[styles.btnText, 
            { color: themeStyles.text }]}>🏆 Create Tournament</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.secondaryBtn,
            {
              backgroundColor: themeStyles.common,
              borderColor: themeStyles.text,
            },
          ]}
        
        >
          
          <Text style={[styles.btnText, { color: themeStyles.text }]}>📄 My Tournaments</Text>
        </TouchableOpacity>
      </View>
        {/* You can keep your Featured section or buttons here */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  carousel: {
    marginBottom: 20,
  },
  gameCard: {
    marginRight: 12,
    borderRadius: 15,
    overflow: 'hidden',
    width: 150,
  },
  gameImage: {
    width: '100%',
    height: 105,
  },
  gameTitle: {
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
  },

    sectionTitle: { color: '#fff', fontSize: 20, marginBottom: 10 },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#2c2c2e',
    borderRadius: 15,
    overflow: 'hidden',
  },
  featureImage: { width: 120, height: 120 },
  featureContent: { padding: 10, flex: 1 },
  featureTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  featureDetails: { color: '#ccc', marginVertical: 5 },
    joinBtn: {
    backgroundColor: '#ff4c29',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  joinText: { color: '#fff', fontWeight: 'bold' },
  buttons: {
    marginTop: 25,
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: '#0a84ff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryBtn: {
    backgroundColor: '#2c2c2e',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
