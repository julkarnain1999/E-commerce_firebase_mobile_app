import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("✅ Success", "Logged in successfully!");
      router.replace("/(tabs)"); // Redirect to the main app
    } catch (error) {
      Alert.alert("❌ Error", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg2.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View className="flex-1  p-4 ">
        <Text className="text-2xl font-bold text-center mt-10 text-[#a6a7de] ">
          Hi🙋‍♂️ I'm Julkarnain welcome to my sign-in page.
        </Text>
        <View className="flex-1 justify-center items-center p-4">
          <Text className="text-2xl font-bold mb-6 text-[#a6a7de]">
            Sign In
          </Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={"white"}
            value={email}
           typed-text="color: #a6a7de;"
            onChangeText={setEmail}
            className="w-full p-3 border border-[#a6a7de] rounded-lg mb-4 bg-transparent typed-text text-white"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"white"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="w-full p-3 border border-[#a6a7de] rounded-lg mb-4 bg-transparent typed-text text-white"
          />

          <TouchableOpacity
            onPress={handleSignIn}
            className="bg-[#1f07f5]  p-3 rounded-lg w-full"
          >
            <Text className="text-[#a6a7de]  text-center font-bold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/sign-up")}
            className="mt-4"
          >
            <Text className="text-center text-red-700">
              Don't have an account?
              <Text className="font-bold text-blue-600">Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
