import React from "react";

import { ScrollView, Text, View } from "react-native";
import { Card } from "../Card";

import styles from "./styles";

export function Feed() {
  return (
    <View>
      <View style={styles.welcome}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.text}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>
        <ScrollView>
          <Card />
        </ScrollView>
      </View>
    </View>
  );
}
