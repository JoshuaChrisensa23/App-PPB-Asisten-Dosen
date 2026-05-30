import { StyleSheet } from "react-native";

const color_list = {
  orange: "#e8ab30",
  green: "#49745e",
  green_light: "#49745e35",
  cream: "#f8f6f1",
  white: "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_list.cream,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  sub_title: {
    fontSize: 16,
    color: "gray",
  },
  h_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  btn_icon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: color_list.white,
    alignItems: "center",
    justifyContent: "center",
  },
  new_com_container: {
    borderRadius: 10,
    backgroundColor: color_list.green,
    padding: 20,
  },
  new_book_img: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  new_book_title: {
    color: color_list.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  new_book_text: {
    color: color_list.white,
    fontSize: 13,
    lineHeight: 16,
  },
  circle_premium: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: color_list.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_read: {
    width: 150,
    paddingVertical: 8,
    backgroundColor: color_list.white,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_read_text: {
    fontSize: 14,
    color: color_list.green,
  },
  container_book_collection: {
    flex: 1,
    marginTop: 10,
  },
  container_book_collections_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  book_grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 20,
  },
  book_card: {
    width: "48%",
    backgroundColor: color_list.white,
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  book_card_img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  circle_premium_small: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: color_list.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  book_card_title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 4,
    minHeight: 34,
  },
  book_card_author: {
    fontSize: 12,
    color: "gray",
    marginBottom: 8,
  },
  book_card_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  book_card_rating: {
    fontSize: 12,
    color: "black",
    marginLeft: 4,
    fontWeight: "600",
  },
  book_card_views: {
    fontSize: 12,
    color: "gray",
    marginLeft: 4,
  },
});

const style_explore = StyleSheet.create({
  // Header Styles
  headerContainer: {
    backgroundColor: color_list.white,
    paddingHorizontal: 20,
    paddingBottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  // Explore Page Styles
  container: {
    flex: 1,
    backgroundColor: color_list.cream,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
    paddingHorizontal: 15,
  },

  // MapsView Styles
  map: {
    flex: 1,
  },
  mapFallback: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_list.cream,
    padding: 20,
  },
  mapFallbackText: {
    fontSize: 20,
    fontWeight: "bold",
    color: color_list.green,
    marginTop: 15,
  },
  mapFallbacksubtext: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginTop: 8,
  },
  mapFallbackHint: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 8,
  },

  // ListStores Styles
  storeContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: color_list.white,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  storeIconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color_list.green_light,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  storeContentWrapper: {
    flex: 1,
  },
  storeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 4,
  },
  storeRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  storeRatingText: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    marginLeft: 4,
  },
  storeSubtext: {
    fontSize: 12,
    color: "gray",
  },
});

export { color_list, style_explore, styles };
