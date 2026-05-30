import { useState } from "react";
import { Button, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListUser from "../../components/components/listUser";
import ProfilePage from "../../components/components/profilePage";
import { dataUser } from "../../components/constants/dataUser";

export default function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={{ flex: 1 }}>
        {selectedUser ? (
          <View style={{ flex: 1 }}>
            <Button
              title="Back"
              onPress={() => setSelectedUser(null)}
              color="#007BFF"
            />
            <ProfilePage user={selectedUser} />
          </View>
        ) : (
          <ListUser
            users={dataUser}
            onUserPress={(user) => setSelectedUser(user)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
