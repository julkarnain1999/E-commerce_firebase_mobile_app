import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import {
  getCartItems,
  removeFromCart,
  confirmOrder,
} from "../firebase/firestore";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    const items = await getCartItems();
    setCart(items);
  };

  const handleRemove = async (productId) => {
    await removeFromCart(productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleConfirmOrder = async () => {
    if (cart.length === 0) {
      alert("❌ No items in the cart to confirm.");
      return;
    }

    console.log("🛍 Confirming order for items:", cart);

    await confirmOrder(cart);

    // ✅ Refresh cart after confirming order
    setCart([]);

    alert("🎉 Order confirmed!");
    router.push("/history"); // Navigate to history page
  };

  return (
    <ImageBackground 
    source={require("../../assets/images/cart.png")}
    className="flex-1 w-full"
    resizeMode="cover"
    >
      <View className="flex-1 p-4 bg-transparent">
        <Text className="text-2xl font-bold text-center mb-4 text-white">
          🛒 Your Cart
        </Text>

        {cart.length === 0 ? (
          <Text className="text-center text-gray-500">Your cart is empty.</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="bg-white p-3 rounded-lg shadow-md mb-3">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-40 rounded-lg"
                />
                <Text className="text-xl font-bold mt-2">{item.name}</Text>
                <Text className="text-lg text-gray-600">${item.price}</Text>

                <TouchableOpacity
                  onPress={() => handleRemove(item.id)}
                  className="bg-red-500 mt-2 p-2 rounded-lg"
                >
                  <Text className="text-white text-center font-bold">
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}

        {cart.length > 0 && (
          <TouchableOpacity
            onPress={handleConfirmOrder}
            className="bg-green-500 mt-5 p-3 rounded-lg"
          >
            <Text className="text-white text-center font-bold text-lg">
              Confirm Order
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default Cart;
