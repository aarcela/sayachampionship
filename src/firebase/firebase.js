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

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const storage = getStorage();

export const addData = async (data, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), { data });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const loadData = async (collectionName) => {
  console.log(collectionName);
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data().data,
    });
  });
  return data;
};

export const detailData = async (docID, collectionName) => {
  const docRef = doc(db, collectionName, docID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const editData = async (docId, data, collectionName) => {
  console.log("Edit: ", docId, data);
  const docRef = doc(db, collectionName, docId);
  const newData = Object(data);
  await updateDoc(docRef, { data: newData });
  return;
};

export const deleteData = async (docId, collectionName) => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
  return;
};

export const uploadFile = async (file) => {
  const storageRef = await ref(storage, `/profileImages/${file.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  await uploadTask;
  const url = await getDownloadURL(storageRef);
  console.log(url);
  return url;
};
