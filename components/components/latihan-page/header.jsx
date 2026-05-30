import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../../styles/styleAppLatihan";

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.h_container}>
      <View>
        <Text style={styles.sub_title}>Good Morning</Text>
        <Text style={styles.title}>Discover Books</Text>
      </View>
      <View style={{flexDirection: "row", gap: 10}}>
        <TouchableOpacity
          style={[styles.btn_icon, styles.shadow]}
          onPress={() => router.push('/search')}
        >
            <Ionicons name='search-outline' size={24} color="gray"/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn_icon, styles.shadow]}>
            <Ionicons name='notifications-outline' size={24} color="gray"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header