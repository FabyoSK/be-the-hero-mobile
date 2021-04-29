import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 20,
  },
  causeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  causeInfo: {
    marginBottom: 20,
  },
  causeInfoONG: {
    marginRight: 60,
    marginBottom: 20,
  },
  causeInfoTitle: {
    fontSize: 15,
    color: Colors.titleSecondary,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  causeInfoText: {
    color: Colors.textPrimary,
    fontSize: 16,
  },
  viewMore: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderStyle: "solid",
    borderTopWidth: 2,
    borderColor: Colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewMoreText: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
