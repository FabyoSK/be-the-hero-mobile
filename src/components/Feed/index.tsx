import React from "react";

import { ScrollView, Text, View } from "react-native";
import { useCause } from "../../hooks/useCauses";
import { CauseItem } from "../CauseItem";

import styles from "./styles";

export function Feed() {
  const { causes } = useCause();

  return (
    <ScrollView alwaysBounceVertical={false}>
      <View style={styles.welcome}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.text}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>
      </View>
      <View>
        {causes.map((cause) => {
          return (
            <CauseItem
              key={cause.id}
              cause={cause}
              showDescription={false}
              showViewMore={true}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
