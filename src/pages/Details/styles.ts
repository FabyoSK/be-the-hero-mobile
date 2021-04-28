import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.titleSecondary,
    marginBottom: 10,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 16,
  },
  buttonsContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "46%",
    borderRadius: 10,
    padding: 20,
    backgroundColor: Colors.red,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default styles;
