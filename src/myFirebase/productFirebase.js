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

export const getAllProducts = async () => {

  const userCollectionRef = collection(db,"Products");

  const data = await getDocs(userCollectionRef);

  const allProduct = data.docs.map((doc) => ({ ...doc.data(),id: doc.id }));
  return allProduct;
};
export const addProduct = async (product) => {
  const userCollectionRef = collection(db, "Products");
  await addDoc(userCollectionRef, product);
};
export const updateProduct = async (id, productUpdated) => {
  const ProductDoc = doc(db, "Products", id);
  await updateDoc(ProductDoc, productUpdated);
};

//not sure
export const getProductByID = async (id) => {
  const productRef = doc(db,"Products", id);
 return await getDoc(productRef);
   
};

export const deleteProduct = async (id) => {
  const ProductDoc = doc(db, "Products", id);
  await deleteDoc(ProductDoc);
};
