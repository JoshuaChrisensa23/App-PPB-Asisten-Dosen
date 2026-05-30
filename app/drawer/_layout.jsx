import { Drawer } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function DrawerLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Drawer
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="catalog" options={{ title: "Catalog" }} />
        <Drawer.Screen name="popular" options={{ title: "Popular" }} />
        <Drawer.Screen name="about" options={{ title: "About e-Catalog" }} />
      </Drawer>
    </>
  );
}
