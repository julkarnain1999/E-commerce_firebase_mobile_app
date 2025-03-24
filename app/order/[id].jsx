import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getOrderById } from "../firebase/firestore";

const OrderDetails = () => {
  const { id } = useLocalSearchParams(); // Get order ID from URL
  const [order, setOrder] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      console.log("🛠 Fetching order with ID:", id);
      if (!id) return;

      const data = await getOrderById(id);
      if (data) {
        console.log("✅ Order Data:", data);
        setOrder(data);
      } else {
        console.error("❌ Failed to fetch order details.");
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) return <Text className="text-center mt-4">Loading...</Text>;

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">
        📦 Order Details
      </Text>

      {/* Product Image */}
      <Image
        source={{ uri: order.image }}
        className="w-full h-64 rounded-lg"
        resizeMode="cover"
      />

      {/* Product Name & Price */}
      <Text className="text-xl font-bold mt-4">{order.name}</Text>
      <Text className="text-lg text-gray-600">${order.price}</Text>

      {/* Order Status */}
      <Text className="text-md font-bold mt-4">
        Status: <Text className="text-green-600">Confirmed ✅</Text>
      </Text>

      {/* Highlights */}
      {order.highlights && (
        <View className="mt-4">
          <Text className="text-lg font-bold">🔥 Highlights:</Text>
          {order.highlights.map((highlight, index) => (
            <Text key={index} className="text-gray-700">
              - {highlight}
            </Text>
          ))}
        </View>
      )}

      {/* Specifications */}
      {order.specifications && (
        <View className="mt-4">
          <Text className="text-lg font-bold">⚙️ Specifications:</Text>
          <Text className="text-gray-700">
            📱 Display: {order.specifications.display}
          </Text>
          <Text className="text-gray-700">
            📷 Camera: {order.specifications.camera}
          </Text>
          <Text className="text-gray-700">
            🔋 Battery: {order.specifications.battery}
          </Text>
          <Text className="text-gray-700">
            ⚡ Processor: {order.specifications.processor}
          </Text>
          <Text className="text-gray-700">
            💾 Storage: {order.specifications.storage}
          </Text>
          <Text className="text-gray-700">
            🖥️ OS: {order.specifications.os}
          </Text>
        </View>
      )}

      {/* Reviews Section */}
      {order.reviews && order.reviews.length > 0 && (
        <View className="mt-4">
          <Text className="text-lg font-bold">⭐ Customer Reviews:</Text>
          <FlatList
            data={order.reviews}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="bg-white p-3 rounded-lg shadow-md mt-2">
                <Text className="text-lg font-bold">{item.user}</Text>
                <Text className="text-yellow-500">⭐ {item.rating} / 5</Text>
                <Text className="text-gray-700">{item.comment}</Text>
              </View>
            )}
          />
        </View>
      )}

      {/* Go Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-blue-500 mt-6 p-3 rounded-lg"
      >
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderDetails;
