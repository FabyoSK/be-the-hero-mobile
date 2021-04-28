import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import { Header } from "../../components/Header";
import { Feed } from "../../components/Feed";
import styles from "./styles";
import { useCause } from "../../hooks/useCauses";

export function Landing() {
  const { causes } = useCause();

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Text style={styles.casesText}>
          Total de
          <Text style={styles.casesNumber}> {causes.length} casos</Text>
        </Text>
      </Header>
      <Feed />
    </SafeAreaView>
  );
}
