import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50, // Memberikan jarak dari atas layar (notch)
    marginBottom: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", // Membagi jarak seimbang antar kolom
    paddingHorizontal: 10,
  },
  card: {
    width: "45%",
    backgroundColor: "lightblue",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginBottom: 10,
  },
  imageList: {
    width: 130,
    height: 130,
    borderRadius: 16,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
  },
  infoContainerDesc: {
    flexDirection: "column",
    padding: 8,
  },
  infoContainerProduct: {
    flexDirection: "column",
    borderTopWidth: 2,
    borderColor: "#006effff",
    padding: 8,
    alignItems: "center",
  },
  nameText: {
    color: "#000000ff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  descText: {
    fontSize: 12,
    color: "#000000ff",
  },
  productName: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
  },
  productText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#006effff",
    width: "25%",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
