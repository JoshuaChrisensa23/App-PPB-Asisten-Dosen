import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GET_USER_BY_USERNAME } from "../../components/hooks/API";
import { color_list } from "../../components/styles/styleAppLatihan";

export default function SettingsScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserProfile = useCallback(async (uname) => {
    setIsLoading(true);
    const response = await GET_USER_BY_USERNAME(uname);
    if (response.data) {
      setProfileData(response.data);
    } else {
      console.warn("Failed to load details:", response.message);
    }
    setIsLoading(false);
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");
      if (userDataString) {
        const parsed = JSON.parse(userDataString);
        setIsLoggedIn(true);
        setUsername(parsed.username);
        fetchUserProfile(parsed.username);
      } else {
        setIsLoggedIn(false);
        setUsername("");
        setProfileData(null);
      }
    } catch (e) {
      console.warn("Failed to read user data from storage", e);
    }
  }, [fetchUserProfile]);

  useFocusEffect(
    useCallback(() => {
      checkAuth();
    }, [checkAuth])
  );

  const performLogout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("userData");
      await AsyncStorage.removeItem("authToken");
      setIsLoggedIn(false);
      setProfileData(null);
      if (Platform.OS === "web") {
        alert("You have logged out successfully.");
      } else {
        Alert.alert("Success", "You have logged out successfully.");
      }
    } catch (e) {
      console.error("Error logging out:", e);
    }
  }, []);

  const handleLogout = useCallback(() => {
    if (Platform.OS === "web") {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        performLogout();
      }
    } else {
      Alert.alert(
        "Confirm Logout",
        "Are you sure you want to log out?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Logout",
            style: "destructive",
            onPress: performLogout,
          },
        ],
        { cancelable: true }
      );
    }
  }, [performLogout]);

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={localStyles.container}>
        <View style={localStyles.header}>
          <Text style={localStyles.headerTitle}>Settings</Text>
        </View>
        <View style={localStyles.ctaContainer}>
          <View style={localStyles.iconCircle}>
            <Ionicons name="person-circle-outline" size={72} color={color_list.green} />
          </View>
          <Text style={localStyles.ctaTitle}>You are not signed in</Text>
          <Text style={localStyles.ctaSubtitle}>
            Sign in to view your profile, manage your account settings, and customize your experience.
          </Text>
          <TouchableOpacity
            style={localStyles.signInButton}
            onPress={() => router.push("/signin")}
          >
            <Text style={localStyles.signInButtonText}>Sign In Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={localStyles.container}>
      <View style={localStyles.header}>
        <Text style={localStyles.headerTitle}>Account Settings</Text>
        <TouchableOpacity onPress={handleLogout} style={localStyles.logoutIconButton}>
          <Ionicons name="log-out-outline" size={24} color="#d9534f" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={localStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color={color_list.green} style={{ marginTop: 50 }} />
        ) : profileData ? (
          <View>
            {/* Avatar & Username Card */}
            <View style={[localStyles.card, localStyles.profileCard]}>
              <View style={localStyles.avatarCircle}>
                <Text style={localStyles.avatarText}>
                  {profileData.name?.firstname?.substring(0, 1).toUpperCase()}
                  {profileData.name?.lastname?.substring(0, 1).toUpperCase()}
                </Text>
              </View>
              <Text style={localStyles.profileName}>
                {profileData.name?.firstname ? `${profileData.name.firstname} ${profileData.name.lastname}` : username}
              </Text>
              <Text style={localStyles.profileUsername}>@{username}</Text>
            </View>

            {/* General Information Card */}
            <Text style={localStyles.sectionTitle}>General Info</Text>
            <View style={localStyles.card}>
              <View style={localStyles.infoRow}>
                <Ionicons name="mail-outline" size={20} color={color_list.green} style={localStyles.infoIcon} />
                <View>
                  <Text style={localStyles.infoLabel}>Email Address</Text>
                  <Text style={localStyles.infoValue}>{profileData.email}</Text>
                </View>
              </View>
              <View style={localStyles.infoRowDivider} />
              <View style={localStyles.infoRow}>
                <Ionicons name="call-outline" size={20} color={color_list.green} style={localStyles.infoIcon} />
                <View>
                  <Text style={localStyles.infoLabel}>Phone Number</Text>
                  <Text style={localStyles.infoValue}>{profileData.phone}</Text>
                </View>
              </View>
            </View>

            {/* Address Details Card */}
            <Text style={localStyles.sectionTitle}>Address Details</Text>
            <View style={localStyles.card}>
              <View style={localStyles.infoRow}>
                <Ionicons name="location-outline" size={20} color={color_list.green} style={localStyles.infoIcon} />
                <View>
                  <Text style={localStyles.infoLabel}>Street</Text>
                  <Text style={localStyles.infoValue}>
                    {profileData.address?.street} No. {profileData.address?.number}
                  </Text>
                </View>
              </View>
              <View style={localStyles.infoRowDivider} />
              <View style={localStyles.infoRow}>
                <Ionicons name="business-outline" size={20} color={color_list.green} style={localStyles.infoIcon} />
                <View>
                  <Text style={localStyles.infoLabel}>City</Text>
                  <Text style={localStyles.infoValue}>{profileData.address?.city}</Text>
                </View>
              </View>
              <View style={localStyles.infoRowDivider} />
              <View style={localStyles.infoRow}>
                <Ionicons name="mail-open-outline" size={20} color={color_list.green} style={localStyles.infoIcon} />
                <View>
                  <Text style={localStyles.infoLabel}>Zip Code</Text>
                  <Text style={localStyles.infoValue}>{profileData.address?.zipcode}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={localStyles.logoutButton} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={20} color="white" style={{ marginRight: 8 }} />
              <Text style={localStyles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={localStyles.errorContainer}>
            <Text style={localStyles.errorText}>Unable to load profile data.</Text>
            <TouchableOpacity style={localStyles.retryButton} onPress={() => fetchUserProfile(username)}>
              <Text style={localStyles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_list.cream,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e4de",
    backgroundColor: color_list.white,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  logoutIconButton: {
    padding: 4,
  },
  scrollContainer: {
    padding: 20,
  },
  ctaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 60,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: color_list.green_light,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  ctaSubtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  signInButton: {
    backgroundColor: color_list.green,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: color_list.green,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    backgroundColor: color_list.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  profileCard: {
    alignItems: "center",
    paddingVertical: 24,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: color_list.green,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  profileUsername: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 8,
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  infoIcon: {
    marginRight: 16,
    width: 24,
  },
  infoLabel: {
    fontSize: 12,
    color: "gray",
  },
  infoValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginTop: 2,
  },
  infoRowDivider: {
    height: 1,
    backgroundColor: "#f0eee7",
    marginVertical: 8,
  },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: "#d9534f",
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    shadowColor: "#d9534f",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  errorText: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: color_list.green,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  retryButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
