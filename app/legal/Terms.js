import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native';


const Terms = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
      <ScrollView contentContainerStyle={[styles.container]}>
      <Text style={[styles.header, { color: themeStyles.text }]}>
        📄 Terms & Conditions – [Your App Name]
      </Text>
      <Text style={[styles.subHeader, { color: themeStyles.text }]}>
        Effective Date: [Insert Date]{"\n"}
        Last Updated: [Insert Date]
      </Text>

      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Welcome to [Your App Name], a platform to join, host, and manage gaming tournaments. By using our app, you agree to be bound by these Terms and Conditions.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>1. Eligibility</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • You must be at least 13 years old to use this app.{"\n"}
        • You must comply with all local laws and platform-specific rules (e.g., PSN, Xbox, PC, etc.).{"\n"}
        • We may ask for proof of age or identity for certain tournaments.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>2. User Conduct</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • You agree to use the app responsibly and respectfully.{"\n"}
        • You may not harass, cheat, spam, or abuse the system or other players.{"\n"}
        • Tournament hosts and players must follow fair play rules.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>3. Account & Content</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • You are responsible for all activities under your account.{"\n"}
        • We may suspend or ban accounts for violating rules or misconduct.{"\n"}
        • You grant us permission to use your username and stats for leaderboards or promotions.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>4. Tournament Rules</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • Each tournament may have its own specific rules.{"\n"}
        • Failure to follow rules may result in disqualification or bans.{"\n"}
        • Hosts are expected to manage tournaments fairly.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>5. Prizes & Rewards</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • Prizes are distributed based on the rules of each tournament.{"\n"}
        • We are not responsible for disputes between third-party hosts and players.{"\n"}
        • Any fraud related to rewards will result in account termination.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>6. Changes & Termination</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • We may update the app or these terms anytime.{"\n"}
        • Continued use after changes means you accept the updated terms.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>7. Limitation of Liability</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • We are not responsible for gameplay issues, internet problems, or third-party content.{"\n"}
        • Our app is provided "as is" without warranties.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>8. Governing Law</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • These terms are governed by the laws of [Your Country/State].
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingBottom: 60, // for extra scroll space
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});
