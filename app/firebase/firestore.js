import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { app, auth } from "../config/firebaseConfig";

const db = getFirestore(app);

// Fetch all products
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return [];
  }
};

// Fetch a single product by Firestore-generated ID (FIXED)
export const fetchProductById = async (id) => {
  try {
    console.log("🔎 Searching for product with id:", id);

    const querySnapshot = await getDocs(collection(db, "products"));
    let foundProduct = null;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.id === Number(id)) {
        foundProduct = { docId: doc.id, ...data }; // Include Firestore doc ID
      }
    });

    if (foundProduct) {
      console.log("✅ Product found:", foundProduct);
      return foundProduct;
    } else {
      console.error("❌ Product not found!");
      return null;
    }
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return null;
  }
};

// Fetch cart items from Firestore
export const getCartItems = async () => {
  const cartRef = collection(db, "users", auth.currentUser.uid, "cart");
  const cartSnapshot = await getDocs(cartRef);
  return cartSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add product to cart
export const addToCart = async (product) => {
  const cartRef = collection(db, "users", auth.currentUser.uid, "cart");
  await addDoc(cartRef, product);
};

export const removeFromCart = async (productId) => {
  const cartItemRef = doc(db, "users", auth.currentUser.uid, "cart", productId);
  await deleteDoc(cartItemRef);
};

export const confirmOrder = async (cart) => {
  const ordersRef = collection(db, "users", auth.currentUser.uid, "orders");

  for (const item of cart) {
    await addDoc(ordersRef, item);
  }

  const cartRef = collection(db, "users", auth.currentUser.uid, "cart");
  const cartSnapshot = await getDocs(cartRef);
  cartSnapshot.forEach(async (doc) => await deleteDoc(doc.ref));
};


export const getOrderById = async (orderId) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("❌ User not logged in.");
      return null;
    }

    const orderRef = doc(db, "users", user.uid, "orders", orderId);
    const orderSnap = await getDoc(orderRef);

    if (orderSnap.exists()) {
      return { id: orderSnap.id, ...orderSnap.data() };
    } else {
      console.error("❌ Order not found.");
      return null;
    }
  } catch (error) {
    console.error("❌ Error fetching order:", error);
    return null;
  }
};
export const getOrders = async () => {
  const querySnapshot = await getDocs(collection(db, "orders"));
  return querySnapshot.docs.map((doc) => ({
    docId: doc.id, // Ensure this is included
    ...doc.data(),
  }));
};

