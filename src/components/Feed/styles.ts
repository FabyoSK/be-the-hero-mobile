import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const styles = StyleSheet.create({
  welcome: {
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "Roboto_700Bold",
    color: Colors.titlePrimary,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    maxWidth: 300,
    color: Colors.textPrimary,
    marginBottom: 10,
  },
});

export default styles;
