import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export const getAllOrders = async () => {

    const userCollectionRef = collection(db,"FinishedOrders");
  
    const data = await getDocs(userCollectionRef);
  
    const allOrders = data.docs.map((doc) => ({ ...doc.data(),id: doc.id }));
    return allOrders;
  };
  