import { Ionicons } from "@expo/vector-icons";
// import { AppleMaps, GoogleMaps } from "expo-maps";
import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import { AppleMaps, GoogleMaps } from "react-native-maps";
import * as Location from "expo-location";
import { color_list, style_explore } from "../../styles/styleAppLatihan";

const MapsView = ({ curent_location, markersAddress = [] }) => {
  const [location, setLocation] = useState(curent_location ?? null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (curent_location) {
      setLocation(curent_location);
      return;
    }

    (async () => {
      try {
        setLoadingLocation(true);
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLoadingLocation(false);
          return;
        }

        const pos = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });

        const coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        if (mounted) setLocation(coords);
      } catch (e) {
        // swallow; map will fallback
      } finally {
        if (mounted) setLoadingLocation(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [curent_location]);

  const cameraPosition = {
    coordinates: {
      latitude: location?.latitude,
      longitude: location?.longitude,
    },
    zoom: 13,
  };

  //   const [mapError, setMapError] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState("");

  if (Platform.OS === "web") {
    return (
      <View style={[style_explore.map, style_explore.mapFallback]}>
        <Ionicons name="map-outline" size={80} color={color_list.green} />
        <Text style={style_explore.mapFallbackText}>Map View Unavailable</Text>
        <Text style={style_explore.mapFallbacksubtext}>
          Maps are only available on Android and IOS devices
        </Text>
        <Text style={style_explore.mapFallbackHint}>
          Please run this app on a mobile device or emulator
        </Text>
      </View>
    );
  }
  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        cameraPosition={cameraPosition}
        markers={markersAddress}
        showsUserLocation={true}
        showsCompass={true}
      />
    );
  } else if (Platform.OS === "android") {
    return (
      <GoogleMaps.View
        style={{ flex: 1 }}
        cameraPosition={cameraPosition}
        markers={markersAddress}
        showsUserLocation={true}
        showsCompass={true}
      />
    );
  }

  return (
    <View style={[style_explore.map, style_explore.mapFallback]}>
      <Ionicons name="map-outline" size={80} color={color_list.green} />
      <Text style={style_explore.mapFallbackText}>Map View Unavailable</Text>
      <Text style={style_explore.mapFallbacksubtext}>Unsupported Platform</Text>
    </View>
  );
};

export default MapsView;
