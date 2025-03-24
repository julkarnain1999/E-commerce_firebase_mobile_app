import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("✅ Success", "Account created successfully!");
      router.replace("/(tabs)"); // Redirect to the main app
    } catch (error) {
      Alert.alert("❌ Error", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View className="flex-1  p-4 ">
        <Text className="text-2xl font-bold text-center mt-10 text-[#a6a7de] ">
          Hi🙋‍♂️ I'm Julkarnain welcome to my sign-up page.
        </Text>

        <View className="flex-1 justify-center items-center p-4 ">
          <Text className="text-2xl font-bold mb-6 text-[#a6a7de] ">
            Sign Up
          </Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={"white"}
            value={email}
            onChangeText={setEmail}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-transparent typed-text text-white"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"white"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-transparent typed-text text-white"
          />

          <TouchableOpacity
            onPress={handleSignUp}
            className="bg-[#1f07f5] p-3 rounded-lg w-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/sign-in")}
            className="mt-4"
          >
            <Text className="text-red-700 text-center">
              Already have an account?{" "}
              <Text className="text-[#1f07f5]"> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
