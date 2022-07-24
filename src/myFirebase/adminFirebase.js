import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllAdmins = async () => {
  const adminCollectionRef = collection(db, "admins");

  const data = await getDocs(adminCollectionRef);

  const alllAdmins = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return alllAdmins;
};
