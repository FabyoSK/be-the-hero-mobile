import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 20,
  },
  caseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  caseInfo: {
    marginBottom: 20,
  },
  caseInfoONG: {
    marginRight: 60,
    marginBottom: 20,
  },
  caseInfoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.titleSecondary,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  caseInfoText: {
    color: Colors.textPrimary,
    fontSize: 16,
  },
  viewMore: {
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
