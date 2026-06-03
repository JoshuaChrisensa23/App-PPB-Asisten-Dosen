import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AUTH_USER } from "../hooks/API";

const CORRECT_USERNAME = "mor_2314";
const CORRECT_PASSWORD = "83r5^_";

export default function SignIn() {
  const [username, setUsername] = useState(CORRECT_USERNAME);
  const [password, setPassword] = useState(CORRECT_PASSWORD);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    if (!username.trim()) {
      Alert.alert("Error", "Username cannot be empty");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Password cannot be empty");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    const results = await AUTH_USER({ username, password });
    console.log("Login response:", results);

    if (results.message) {
      Alert.alert("Error", results.message);
      setIsLoading(false);
      return;
    } else if (results.data && results.data.token) {
      try {
        const userData = {
          username: username,
          token: results.data.token,
          loginTime: new Date().toISOString(),
        };

        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        await AsyncStorage.setItem("authToken", results.data.token);

        setIsLoading(false);
        if (Platform.OS === "web") {
          alert(`Welcome ${username}!`);
          router.replace("/main-apps");
        } else {
          Alert.alert("Success", `Welcome ${username}!`, [
            {
              text: "OK",
              onPress: () => {
                router.replace("/main-apps");
              },
            },
          ]);
        }
      } catch (error) {
        console.error("Error saving user data:", error);
        Alert.alert("Error", "Failed to save user data");
        setIsLoading(false);
      }
    } else {
      Alert.alert("Error", "Invalid response from server");
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#f9f9f9" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 8, textAlign: "center", color: "#333" }}>
        Welcome Back
      </Text>
      <Text style={{ fontSize: 16, color: "#666", marginBottom: 32, textAlign: "center" }}>
        Sign in to continue discovering great books
      </Text>

      <TextInput
        style={{
          height: 50,
          borderColor: "#e0e0e0",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 16,
          marginBottom: 16,
          backgroundColor: "#fff",
          fontSize: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={{
          height: 50,
          borderColor: "#e0e0e0",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 16,
          marginBottom: 32,
          backgroundColor: "#fff",
          fontSize: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity
        onPress={handleSignIn}
        disabled={isLoading}
        style={{
          backgroundColor: "#006eff",
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
          shadowColor: "#006eff",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 4,
          opacity: isLoading ? 0.7 : 1,
        }}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Sign In
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
