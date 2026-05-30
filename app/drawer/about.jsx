import { StyleSheet, Text, View } from "react-native";
import ListBooks from "../../components/constants/listBooks.jsx";

export default function About() {
  const total = ListBooks.length;
  const freeCount = ListBooks.filter((b) => b.is_free).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About e-Catalog</Text>
      <Text style={styles.paragraph}>
        Welcome to the e-Catalog. This mini catalog contains {total} books
        showcasing summaries, ratings and availability. There are {freeCount}{" "}
        books available for free.
      </Text>
      <Text style={styles.paragraph}>
        Use the side menu to browse the full catalog or see popular titles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  paragraph: { fontSize: 15, color: "#333", marginBottom: 10, lineHeight: 20 },
});
