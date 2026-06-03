import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBooks from "../../constants/listBooks";
import { styles } from "../../styles/styleAppLatihan";
import BookCollections from "./bookCollections";

function SearchPage() {
  const [search, setSearch] = useState("");
  const books = ListBooks;

  const BookDaraMemori = useMemo(() => {
    let computeData = [...books];
    if (search) {
      computeData = computeData.filter((listData) => {
        return Object.keys(listData).some((key) => {
          try {
            const value = listData[key];
            return (
              value != null &&
              String(value).toLowerCase().includes(search.toLowerCase())
            );
          } catch (error) {
            console.error(`Error processing kef "${key}":`, error);
            return false;
          }
        });
      });
    }
    return computeData;
  }, [search, books]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <SearchBar value={search} setValue={setSearch} />
      <ScrollView style={{ flex: 1 }}>
        <BookCollections book={BookDaraMemori} />
      </ScrollView>
    </SafeAreaView>
  );
}

const SearchBar = ({ value, setValue }) => {
  return (
    <View style={styles.h_container}>
      <View style={style_searchBar.search_container}>
        <Ionicons name="search-outline" size={16} color="gray" />
        <TextInput
          style={{ flex: 1, marginLeft: 8 }}
          autoFocus
          placeholder="Search Here"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </View>
  );
};

export default SearchPage;
export { SearchBar };

const style_searchBar = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});
