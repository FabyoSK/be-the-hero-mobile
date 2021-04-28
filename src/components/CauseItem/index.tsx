import React, { useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import goIcon from "../../assets/go.png";
import { formatPrice } from "../../util/format";
import { Card } from "../Card";
import styles from "./styles";

interface CauseItemProps {
  cause: {
    id: string;
    name: string;
    description: string;
    value: string;
    organization_id: string;
    organization_name: string;
  };
  showDescription: boolean;
  showViewMore: boolean;
}
export function CauseItem({
  showDescription,
  showViewMore,
  cause,
}: CauseItemProps) {
  return (
    <Card>
      <View style={styles.causeHeader}>
        <View style={styles.causeInfo}>
          <Text style={styles.causeInfoTitle}>Caso:</Text>
          <Text style={styles.causeInfoText}>{cause.name}</Text>
        </View>
        <View style={styles.causeInfoONG}>
          <Text style={styles.causeInfoTitle}>ONG:</Text>
          <Text style={styles.causeInfoText}>{cause.organization_name}</Text>
        </View>
      </View>
      {showDescription && (
        <View style={styles.causeInfo}>
          <Text style={styles.causeInfoTitle}>Descrição:</Text>
          <Text style={styles.causeInfoText}>{cause.description}</Text>
        </View>
      )}
      <View style={styles.causeInfo}>
        <Text style={styles.causeInfoTitle}>Valor:</Text>
        <Text style={styles.causeInfoText}>
          {formatPrice(Number(cause.value))}
        </Text>
      </View>
      {showViewMore && (
        <TouchableOpacity style={styles.viewMore}>
          <Text style={styles.viewMoreText}>Ver mais detalhes:</Text>
          <Image source={goIcon} />
        </TouchableOpacity>
      )}
    </Card>
  );
}
