import { Text, View } from "react-native";

export default function TestBookC({ book }) {
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Year: {book.year}</Text>
    </View>
  );
}
