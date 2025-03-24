import { db, auth } from "../config/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

// Add product to cart
export const addToCart = async (product) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const cartRef = collection(db, "carts");
    await addDoc(cartRef, {
      userId: user.uid,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    console.log("✅ Product added to cart");
  } catch (error) {
    console.error("❌ Error adding to cart:", error);
  }
};

// Fetch cart items for the current user
export const fetchCartItems = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const cartRef = collection(db, "carts");
    const q = query(cartRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);

    const cartItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("✅ Cart items fetched:", cartItems);
    return cartItems;
  } catch (error) {
    console.error("❌ Error fetching cart items:", error);
    return [];
  }
};

// Remove item from cart
export const removeCartItem = async (cartItemId) => {
  try {
    const cartItemRef = doc(db, "carts", cartItemId);
    await deleteDoc(cartItemRef);
    console.log("✅ Item removed from cart");
  } catch (error) {
    console.error("❌ Error removing cart item:", error);
  }
};
