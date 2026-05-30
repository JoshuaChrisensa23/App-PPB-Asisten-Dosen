import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import * as Location from "expo-location";
// import { AppleMaps, GoogleMaps } from "expo-maps";
import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '../../components/components/explore/Header';
import MapsView from '../../components/components/explore/MapsView';
import ListStores from '../../components/components/explore/bottomSheet/ListStores';
import { style_explore } from '../../components/styles/styleAppLatihan';

export default function Explore() {
  const bottomSheetRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  const snapPoints = useMemo(() => ["35%", "50%", "100%"], []);
  
  const handleSheetChange = (index) => {
    if (index === -1) {
      bottomSheetRef.current?.snapToIndex(0);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== "granted") {
        Alert.alert("Izin ditolak", "Aplikasi membutuhkan akses lokasi");
        return;
      }

      let userLocation = await Location.getLastKnownPositionAsync({});
      if (!userLocation) {
        userLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
      }
      setLocation(userLocation.coords);

      let addressData = await Location.reverseGeocodeAsync({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });

      if (addressData.length > 0) {
        setAddress(addressData[0]);
      }
    })();
  }, []);

  return (
    <View style={style_explore.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MapsView curent_location={location} />
        <Header />
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          enablePanDownToClose
          onChange={handleSheetChange}
          snapPoints={snapPoints}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              opacity={0.5}
              appearsOnIndex={1}
              disappearsOnIndex={0}
            />
          )}
          backgroundStyle={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "white",
          }}
        >
          <BottomSheetScrollView>
            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 15 }}>Explore Store</Text>
            {address && (
              <Text style={style_explore.subtitle}>
                Location:{" "}
                {(address?.city || address?.name || "-") + 
                  ", " +
                  (address?.subregion || address?.region || "-")}
              </Text>
            )}

            <View style={{ marginTop: 20 }}>
              <ListStores stores={[]} />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}