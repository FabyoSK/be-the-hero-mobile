import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import { Header } from "../../components/Header";
import { Feed } from "../../components/Feed";
import styles from "./styles";

export function Landing() {
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Text>Total de 43 casos</Text>
      </Header>
      <Feed />
    </SafeAreaView>
  );
}
