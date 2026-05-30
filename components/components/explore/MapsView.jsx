import { Ionicons } from "@expo/vector-icons";
// import { AppleMaps, GoogleMaps } from "expo-maps";
import { Platform, Text, View } from "react-native";
import { AppleMaps, GoogleMaps } from "react-native-maps";
import { color_list, style_explore } from "../../styles/styleAppLatihan";

const MapsView = ({ curent_location, markersAddress = [] }) => {
  const cameraPosition = {
    coordinates: {
      latitude: curent_location?.latitude,
      longitude: curent_location?.longitude,
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
