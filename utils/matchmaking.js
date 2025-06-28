// utils/matchmaking.js
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function matchmaking(userId) {
  const queueRef = collection(db, "matchQueue");
  const snapshot = await getDocs(queueRef);

  for (let docSnap of snapshot.docs) {
    const partnerId = docSnap.id;
    if (partnerId !== userId) {
      await deleteDoc(doc(db, "matchQueue", partnerId));
      const room = await addDoc(collection(db, "rooms"), {
        users: [userId, partnerId],
        createdAt: new Date(),
      });
      return room.id;
    }
  }

  await setDoc(doc(db, "matchQueue", userId), {
    createdAt: new Date(),
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null); // Timeout fallback
    }, 10000);
  });
}
