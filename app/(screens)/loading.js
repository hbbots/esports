// app/(screens)/loading.js
import { useRouter } from 'expo-router';
import { signInAnonymously } from 'firebase/auth';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { auth } from '../../firebaseConfig';
import { matchmaking } from '../../utils/matchmaking';

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      try {
        let uid;

        if (!auth.currentUser) {
          const userCredential = await signInAnonymously(auth);
          uid = userCredential.user.uid;
        } else {
          uid = auth.currentUser.uid;
        }

        const roomId = await matchmaking(uid);
        router.replace(`/(screens)/chat?roomId=${roomId}`);
      } catch (err) {
        console.error("Auth or matchmaking error", err);
      }
    };

    init();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#4e9bff" />
      <Text style={{ marginTop: 20 }}>Finding a stranger...</Text>
    </View>
  );
}



// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { ActivityIndicator, Text, View } from "react-native";

// import { signInAnonymously } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
// import { matchmaking } from "../../utils/matchmaking";

// export default function LoadingScreen() {
//   const router = useRouter();

//   useEffect(() => {
//     const init = async () => {
//       try {
//         let uid;

//         // ✅ Only sign in if not already signed in
//         if (!auth.currentUser) {
//           const userCredential = await signInAnonymously(auth);
//           uid = userCredential.user.uid;
//         } else {
//           uid = auth.currentUser.uid;
//         }

//         console.log("User ID:", uid);

//         // ✅ Start matchmaking
//         const roomId = await matchmaking(uid);

//         // ✅ Navigate to chat
//         router.replace(`/(screens)/chat?roomId=${roomId}`);
//       } catch (err) {
//         console.error("Auth or matchmaking error", err);
//       }
//     };

//     init();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <ActivityIndicator size="large" color="#4e9bff" />
//       <Text style={{ marginTop: 20 }}>Finding a stranger...</Text>
//     </View>
//   );
// }
