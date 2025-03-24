import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import products from "../../constants/products";
// const uploadProducts = async () => {
//   try {
//     for (const product of products) {
//       await addDoc(collection(db, "products"), product);
//       console.log(`Uploaded: ${product.name}`);
//     }
//     console.log("All products uploaded successfully!");
//   } catch (error) {
//     console.error("Error uploading products:", error);
//   }
// };

// uploadProducts();