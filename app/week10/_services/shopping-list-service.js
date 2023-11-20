import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const items = [];
    const collectionRef = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        data: doc.data()
      };

      items.push(item);
    });

    return items;
  } catch (error) {
    console.error("Error retrieving items:", error);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}