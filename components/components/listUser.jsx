import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/styleApp";

const ListUser = ({ users, onUserPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>List User</Text>
        <Text>Total User: {users.length}</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} activeOpacity={0.5} style={styles.card} onPress={() => onUserPress && onUserPress(item)}>
            <View key={item.id}>
              <Image source={{ uri: item.image }} resizeMode="cover" style={styles.imageList} />
              <View style={styles.infoContainerDesc}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.descText}>Title: {item.title}</Text>
                <Text style={styles.descText}>Departement: {item.department}</Text>
                <Text style={styles.descText}>Email: {item.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListUser;
