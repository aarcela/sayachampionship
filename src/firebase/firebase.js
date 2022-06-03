import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "dancers"), { data });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const loadData = async () => {
  const querySnapshot = await getDocs(collection(db, "dancers"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data().data,
    });
  });
  return data;
};
