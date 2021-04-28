import React from "react";

import { ScrollView, Text, View } from "react-native";
import { CaseItem } from "../CaseItem";

import styles from "./styles";

export function Feed() {
  return (
    <ScrollView alwaysBounceVertical={false}>
      <View style={styles.welcome}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.text}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>
      </View>
      <View>
        <CaseItem showDescription={false} showViewMore={true} />
        <CaseItem showDescription={false} showViewMore={true} />
        <CaseItem showDescription={false} showViewMore={true} />
        <CaseItem showDescription={false} showViewMore={true} />
        <CaseItem showDescription={false} showViewMore={true} />
        <CaseItem showDescription={false} showViewMore={true} />
        <CaseItem showDescription={false} showViewMore={true} />
      </View>
    </ScrollView>
  );
}
