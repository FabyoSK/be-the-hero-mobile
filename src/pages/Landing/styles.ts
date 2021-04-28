import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  casesText: {
    color: Colors.textPrimary,
  },

  casesNumber: {
    color: Colors.titleSecondary,
  },
});

export default styles;
