import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  ScrollView,
  ImageBackground
} from "react-native";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const firestore = getFirestore();
  const authInstance = getAuth();
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = authInstance.currentUser;
        if (currentUser) {
          const userRef = doc(firestore, "users", currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUser(userSnap.data());
          } else {
            setUser({
              name: currentUser.displayName,
              email: currentUser.email,
              photoURL: null,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert("✅ Signed Out", "You have been logged out.");
      router.replace("/(auth)/sign-in"); // Redirect to Sign-In Page
    } catch (error) {
      Alert.alert("❌ Error", error.message);
    }
  };

  if (loading) {
    return (
      // Loading Indicator
   
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#F44336" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/images/productBg.png")}
      className="flex-1 w-full"
      resizeMode="cover"
    >
      <ScrollView className="flex-1 bg-transparent">
        <View className="flex-1 items-center bg-transparent p-4">
          {/* Profile Image */}
          <Image
            source={{
              uri:
                user?.photoURL ||
                "https://media.licdn.com/dms/image/v2/D5603AQF8Cuf2bXlc1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720038788229?e=1748476800&v=beta&t=SgnwMVH8yHoAjWQYDsmvzy4h9ut_9x6gctGDx5dOt0U",
            }}
            className="w-24 h-24 rounded-full mt-6"
          />

          {/* User Info */}
          <Text className="text-2xl font-bold mt-4">
            {user?.name || "User Name"}
          </Text>
          <Text className="text-lg text-gray-600">
            {user?.email || "No Email"}

          </Text>

          {/* Edit Profile Button */}
          <TouchableOpacity
            onPress={() => Alert.alert("🚧 Feature Coming Soon!")}
            className="bg-gray-100 p-3 w-full rounded-lg mt-6 border-2 border-blue-500"
            activeOpacity={0.8}
          >
            <Text className="text-blue-500  rounded-lg  mb-2 text-center font-bold text-lg">
              Edit Profile
            </Text>
          </TouchableOpacity>

          {/* Sign Out Button */}
          <TouchableOpacity
            onPress={handleSignOut}
            className="bg-red-500 p-3 w-full rounded-lg mt-4 border-2 border-red-500"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center font-bold text-lg mb-2 ">
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-4 left-4 p-2 bg-gray-200 rounded-full"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
