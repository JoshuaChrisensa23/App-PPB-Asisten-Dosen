import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          router.replace("/main-apps");
        } else {
          router.replace("/signin");
        }
      } catch (error) {
        console.warn("Error checking auth status on index:", error);
        router.replace("/signin");
      }
    };
    checkAuthStatus();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f6f1" }}>
      <ActivityIndicator size="large" color="#49745e" />
    </View>
  );
}
