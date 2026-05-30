import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { style_explore } from "../../styles/styleAppLatihan"

const Header = () => {
  return (
    <SafeAreaView style={style_explore.headerContainer} edges={["top"]} >
        <View style={style_explore.headerContent} >
            <TouchableOpacity onPress={() => router.push("/main-apps")}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Header