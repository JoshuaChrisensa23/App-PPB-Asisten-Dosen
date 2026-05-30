import { Text, View } from "react-native";
import TestBookC from "./testBookC";

export default function TestBookP() {
  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  };
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>This is Parent Component</Text>
      <TestBookC book={book} />
    </View>
  );
}
