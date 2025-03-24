import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchProductById } from "../firebase/firestore";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../config/firebaseConfig"; // Import your Firebase config

const db = getFirestore(app); // Initialize Firestore

const BookingPage = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      if (data) setProduct(data);
    };
    loadProduct();
  }, [id]);

  const handleBooking = async () => {
    if (!product) return;

    try {
      await addDoc(collection(db, "bookings"), {
        productId: product.id,
        productName: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        bookedAt: new Date().toISOString(),
      });

      Alert.alert("✅ Booking Confirmed!", "Your booking has been saved.");
      router.push("/"); // Navigate to Home after booking
    } catch (error) {
      console.error("❌ Error saving booking:", error);
      Alert.alert("❌ Booking Failed", "Please try again.");
    }
  };

  if (!product) return <Text className="text-center mt-4">Loading...</Text>;

  return (
    <View className="flex-1 p-4 bg-gray-100">
      {/* 🖼️ Product Image */}
      <Image
        source={{ uri: product.image }}
        className="w-full h-64 rounded-lg"
      />

      {/* 📌 Booking Details */}
      <Text className="text-2xl font-bold mt-4">{product.name}</Text>
      <Text className="text-lg text-gray-600">${product.price}</Text>

      <Text className="text-md text-gray-500 mt-2">
        Category: {product.category}
      </Text>

      <Text className="text-lg font-bold mt-4">Booking Details</Text>
      <Text className="text-gray-700">Selected product: {product.name}</Text>

      {/* ✅ Confirm Booking Button */}
      <TouchableOpacity
        onPress={handleBooking} // Store booking in Firestore
        className="bg-green-500 mt-4 p-3 rounded-lg"
      >
        <Text className="text-white text-center font-bold text-lg">
          Confirm Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingPage;
