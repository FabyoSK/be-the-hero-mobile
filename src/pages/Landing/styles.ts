import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  casesText: {
    color: Colors.textPrimary,
    fontSize: 16,
  },

  casesNumber: {
    color: Colors.titleSecondary,
    fontSize: 16,
  },
});

export default styles;
