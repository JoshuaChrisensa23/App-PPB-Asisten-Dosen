import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { color_list, style_explore } from "../../styles/styleAppLatihan";

const MapsView = () => {
  return (
    <View style={[style_explore.map, style_explore.mapFallback]}>
      <Ionicons name="map-outline" size={80} color={color_list.green} />
      <Text style={style_explore.mapFallbackText}>Map View Unavailable</Text>
      <Text style={style_explore.mapFallbacksubtext}>
        Maps are only available on Android and iOS devices
      </Text>
      <Text style={style_explore.mapFallbackHint}>
        Please run this app on a mobile device or emulator
      </Text>
    </View>
  );
};

export default MapsView;
