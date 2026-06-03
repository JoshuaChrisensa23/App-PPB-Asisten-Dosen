import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styleAppLatihan";

const Header = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  const checkLoginStatus = useCallback(async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");
      if (userDataString === null) {
        setUserData({ username: "Discover Books" });
      } else {
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
      }
    } catch (error) {
      console.warn("Error checking login status", error);
      setUserData({ username: "Discover Books" });
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      checkLoginStatus();
    }, [checkLoginStatus])
  );

  return (
    <View style={styles.h_container}>
      <View>
        {/* <Text style={styles.sub_title}>Good Morning</Text>
        <Text style={styles.title}>Discover Books</Text> */}
        <Text style={styles.sub_title}>Good Morning</Text>
        <Text style={styles.title}>
          {userData?.username || "Discover Books"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={[styles.btn_icon, styles.shadow]}
          onPress={() => router.push("/search")}
        >
          <Ionicons name="search-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn_icon, styles.shadow]}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
