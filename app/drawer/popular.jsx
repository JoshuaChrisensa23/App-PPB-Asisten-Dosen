import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ListBooks from "../../components/constants/listBooks.jsx";

export default function Popular() {
  const top = [...ListBooks].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Catalog — Popular</Text>
      <FlatList
        data={top}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.cover} />
            <View style={styles.info}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.meta}>
                Rating: {item.rating} • {item.views} views
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  item: { flexDirection: "row", marginBottom: 12, alignItems: "center" },
  cover: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  info: { flex: 1 },
  bookTitle: { fontSize: 16, fontWeight: "600" },
  author: { fontSize: 13, color: "#666" },
  meta: { fontSize: 12, color: "#999", marginTop: 6 },
});
