import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchProductById, addToCart } from "../firebase/firestore";


const ProductDetails = () => {
  const { id } = useLocalSearchParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadProduct = async () => {
      console.log("🛠 Fetching product for ID:", id);
      const data = await fetchProductById(id);
      if (data) {
        console.log("✅ Product Loaded:", data);
        setProduct(data);
      } else {
        console.error("❌ Failed to fetch product.");
      }
    };
    loadProduct();
  }, [id]);

  if (!product) return <Text className="text-center mt-4">Loading...</Text>;  
  //add to cart
  const handleAddToCart = async () => {
    if (!product) return;

    await addToCart(product);
    alert("✅ Product added to cart!"); 
    router.push("/cart"); 
  };


  return (
    <ScrollView className="flex-1 p-4 bg-white ">
      {/* 🖼️ Product Image */}
      <Image
        source={{ uri: product.image }}
        className="w-full h-64 rounded-lg"
        resizeMode="cover"
      />

      {/* 🏷️ Product Name & Price */}
      <Text className="text-2xl font-bold mt-4">{product.name}</Text>
      <Text className="text-lg text-gray-600">${product.price}</Text>

      {/* 📌 Category */}
      <Text className="text-md text-gray-500 mt-2">
        Category: {product.category}
      </Text>

      {/* 🔥 Highlights */}
      <Text className="text-lg font-bold mt-4">Highlights</Text>
      <FlatList
        data={product.highlights}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text className="text-md text-gray-500">• {item}</Text>
        )}
      />

      {/* 📊 Specifications */}
      <Text className="text-lg font-bold mt-4 ">
        Specifications
      </Text>
      {product.specifications &&
        Object.entries(product.specifications).map(([key, value]) => (
          <Text key={key} className="text-md text-gray-500">
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </Text>
        ))}

      {/* ⭐ Reviews */}
      <Text className="text-lg font-bold mt-4">Reviews</Text>
      <FlatList
        data={product.reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="mt-2 p-3 bg-white rounded-lg shadow-md">
            <Text className="font-semibold">{item.user}</Text>
            <Text className="text-yellow-500">⭐ {item.rating}/5</Text>
            <Text className="text-gray-700">{item.comment}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="text-gray-400">No reviews yet.</Text>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />

      {/* 📌 Book Now Button */}
      <TouchableOpacity
        onPress={() => router.push(`/book/${id}`)}
        className="mt-3 p-3 mb-4 rounded-lg bg-blue-700 shadow-lg active:scale-95"
        activeOpacity={0.8} // Smooth press effect
      >
        <Text className="text-white text-center font-bold text-lg">
          🚀 Book Now
        </Text>
      </TouchableOpacity>

      {/* 🛒 Add to Cart Button */}
      <TouchableOpacity
        onPress={handleAddToCart}
        className="p-3 rounded-lg mb-7 bg-green-500 shadow-lg active:scale-95"
        activeOpacity={0.8} 
        
      >
        <Text className="text-white text-center font-bold text-lg">
          🛍️ Add to Cart
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetails;
