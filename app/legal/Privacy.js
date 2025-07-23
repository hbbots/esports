import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { StyleSheet,SafeAreaView, Text , ScrollView } from 'react-native';



const Privacy = () => {
const { themeStyles } = useContext(ThemeContext); 
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
      <ScrollView contentContainerStyle={[styles.container]}>
      <Text style={[styles.header, { color: themeStyles.text }]}>
        🔒 Privacy Policy – [HB esports]
      </Text>
      <Text style={[styles.subHeader, { color: themeStyles.text }]}>
        Effective Date: [21/07/2025]{"\n"}
        Last Updated: [28/07/2025]
      </Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Your privacy matters to us. This policy explains what data we collect and how we use it.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>1. Data We Collect</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • Account info: Username, email, avatar (if used).{"\n"}
        • Gameplay data: Tournament participation, results, and scores.{"\n"}
        • Device info: OS version, device type, IP address.{"\n"}
        • Usage data: Screens viewed, session length, crash reports.{"\n"}
        • Chat messages (if your app has messaging features).
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>2. Why We Collect It</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • Run and manage tournaments.{"\n"}
        • Match users and track progress.{"\n"}
        • Prevent cheating, fraud, or abuse.{"\n"}
        • Improve the app’s performance and UX.{"\n"}
        • Send updates or support responses.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>3. Data Sharing</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        We do not sell your data. We may share data with:{"\n"}
        • Tournament hosts (only relevant info).{"\n"}
        • Firebase/analytics services (anonymized data).{"\n"}
        • Law enforcement, if required.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>4. Data Security</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        We use Firebase and other industry-standard tools to protect your data. However, no system is 100% secure.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>5. Your Rights</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        • You can request to view or delete your data.{"\n"}
        • You can opt out of optional notifications or analytics (if available).
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>6. Children’s Privacy</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        Our app is not intended for users under 13. We do not knowingly collect data from children.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>7. Updates to This Policy</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        This policy may be updated periodically. We'll notify you of significant changes.
      </Text>

      <Text style={[styles.sectionTitle, { color: themeStyles.text }]}>8. Contact</Text>
      <Text style={[styles.paragraph, { color: themeStyles.text }]}>
        For any questions, email us at:{"\n"}
        📧 [Your email]{"\n"}
        🌐 [Your website or social page]
      </Text>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Privacy

const styles = StyleSheet.create({
   container: {
    padding: 40,
    paddingBottom: 60, // for extra scroll space
  },
    header:{
      fontSize:27,
      fontWeight:'bold',
      marginBottom:12
    },
    subHeader:{
      fontSize:17,
      marginBottom:12,
      
    },
    sectionTitle:{
      fontSize:22,
      marginTop:20,
    fontWeight: '600',
     marginBottom:12
    },
    paragraph:{
      fontSize: 16,
    lineHeight: 24,
    marginBottom:13,
    marginTop:12
    }
   



// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subHeader: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginTop: 20,
//     marginBottom: 8,
//   },
//   paragraph: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
})