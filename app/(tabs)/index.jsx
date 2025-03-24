import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  
  ImageBackground
} from "react-native";
import { useRouter } from "expo-router";
import { fetchProducts } from "../firebase/firestore"




const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../../assets/images/homeBg.png")}
      className="flex-1 w-full"
      resizeMode="cover"
    >
      
        <View className="flex-1 items-center justify-center p-4">
          <Text className="text-4xl text-white font-bold">Welcome to</Text>
          <Text className="text-5xl text-white font-bold">E-Commerce Mobile App</Text>

          <View className="flex-1 p-2">
            <TextInput
              className="border border-gray-400 rounded-lg p-2 mb-4 typed-text text-white"
              placeholderTextColor="#a6a7de"   
              placeholder="Search for products..."
              value={search}
              onChangeText={setSearch}
              clearButtonMode="while-editing"

            />

            <FlatList
              data={filteredProducts}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => router.push(`/product/${item.id}`)}
                  className="w-1/2 p-1"
                >
                  <View className="rounded-lg p-2 ">
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-40 rounded-lg"
                    />
                    <Text className="text-lg font-semibold mt-2 text-white">
                      {item.name}
                    </Text>
                    <Text className=" text-blue-600">${item.price}</Text>
                    <Text className="text-sm text-gray-500">
                      Category: {item.category}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View className="flex-row justify-center w-full">
              <Text className="text-white text-center w-full">
                {products.length} products found
              </Text>
            </View>
          </View>
        </View>
      
    </ImageBackground>
  );
};

export default HomeScreen;
