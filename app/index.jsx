import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  // return <Redirect href="/modules/Main" />;
  // return <Redirect href="/modules/praktikum" />;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "end",
        padding: 20,
        flexDirection: "reverse-column",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Landing Page
      </Text>
      <Link href={"/main-apps"} push asChild>
        <Button title="Get Started" />
      </Link>
    </View>
  );
}
