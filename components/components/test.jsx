import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Latihan5() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Count: {count}</Text>
      <View>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>

      <View>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Name: </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus
        />
      </View>
      {name && <ViewName name={name} />}
    </SafeAreaView>
  );
}

const ViewName = ({ name }) => {
  return (
    <View>
        <Text style={{ fontSize: 24 }}>Hello, {name}!</Text>
    </View>
  );
}
