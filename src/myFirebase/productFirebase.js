import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
export const getAllProducts = async () => {
  const userCollectionRef = collection(db, "Products");
  const data = await getDocs(userCollectionRef);
  const allProduct = [data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))];
  return allProduct.data;
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
  const productDoc = doc(db, "Products", id);
  return productDoc;
};
export const deleteProduct = async (id) => {
  const ProductDoc = doc(db, "Products", id);
  await deleteDoc(ProductDoc);
};
