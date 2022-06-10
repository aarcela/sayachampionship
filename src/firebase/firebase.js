import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

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

export const detailData = async (dancerID) => {
  const docRef = doc(db, "dancers", dancerID);
  const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());
  return docSnap.data();
};

export const editData = async (docId, dancerData) => {
  console.log("Data Frebase", dancerData);
  const docRef = doc(db, "dancers", docId);
  await updateDoc(docRef, dancerData);
  return;
};

export const deleteData = async (docId) => {
  const docRef = doc(db, "dancers", docId);
  await deleteDoc(docRef);
  return;
};
