import { FlatList, Image, Text, View } from "react-native";
import styles from "../styles/styleApp";

const ProfilePage = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View key={user.id}>
          <Text style={styles.title}>{user.name}</Text>
          <View style={styles.infoContainerDesc}>
            <Text>Title: {user.title}</Text>
            <Text>Departement: {user.department}</Text>
            <Text>Email: {user.email}</Text>
          </View>
        </View>
        <Image source={{ uri: user.image }} resizeMode="cover" style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>Portofolio List</Text>
        <FlatList
          data={user.portofolio}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Image source={{ uri: item.image }} resizeMode="cover" style={styles.image} />
              <View style={styles.infoContainerProduct}>
                <Text style={styles.nameText}>Nama: {item.name}</Text>
                <Text style={styles.descText}>Code: {item.code}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ProfilePage;
