import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getAllUsers = async () => {
  const userCollectionRef = collection(db, "users");

  const data = await getDocs(userCollectionRef);

  const allUsers = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return allUsers;
};
export const addUser = async (user) => {
  const userCollectionRef = collection(db, "users");
  await addDoc(userCollectionRef, user);
};
export const updateUser = async (id, userUpdated) => {
  const userDoc = doc(db, "users", id);
  await updateDoc(userDoc, userUpdated);
};

//not sure
export const getUserByID = async (id) => {
  const userDoc = doc(db, "users", id);
  return await getDoc(userDoc);
};

export const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};
