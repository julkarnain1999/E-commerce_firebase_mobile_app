import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { getOrders } from "../firebase/firestore";

const History = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const orderData = await getOrders(); // Fetch orders from Firestore
      setOrders(orderData);
    };
    fetchOrders();
  }, []);

  return (
    <ImageBackground  
    source={require('../../assets/images/history.png')}
    className="flex-1 w-full"
    resizeMode="cover"
    blurRadius={10}
    >
      <View className="flex-1 p-4 bg-transparent">
        <Text className="text-2xl font-bold text-center mb-4 text-[#a6a7de]">
          📜 Order History
        </Text>

        {orders.length === 0 ? (
          <Text className="text-center text-gray-500">No orders found.</Text>
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.docId}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(`/order/${item.docId}`)} // Navigate to order details page
                className="bg-white p-3 rounded-lg shadow-md mb-3"
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-40 rounded-lg"
                />
                <Text className="text-xl font-bold mt-2">{item.name}</Text>
                <Text className="text-lg text-gray-600">${item.price}</Text>
                <Text className="text-sm text-gray-500">
                  Category: {item.category}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default History;
