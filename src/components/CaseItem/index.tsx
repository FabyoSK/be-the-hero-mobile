import React, { useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";

import goIcon from "../../assets/go.png";
import { Card } from "../Card";
import styles from "./styles";

interface CaseItemProps {
  showDescription: boolean;
  showViewMore: boolean;
}
export function CaseItem({ showDescription, showViewMore }: CaseItemProps) {
  return (
    <Card>
      <View style={styles.caseHeader}>
        <View style={styles.caseInfo}>
          <Text style={styles.caseInfoTitle}>Caso:</Text>
          <Text style={styles.caseInfoText}>Example</Text>
        </View>
        <View style={styles.caseInfoONG}>
          <Text style={styles.caseInfoTitle}>ONG:</Text>
          <Text style={styles.caseInfoText}>Example</Text>
        </View>
      </View>
      {showDescription && (
        <View style={styles.caseInfo}>
          <Text style={styles.caseInfoTitle}>Descrição:</Text>
          <Text style={styles.caseInfoText}>Bla Bla</Text>
        </View>
      )}
      <View style={styles.caseInfo}>
        <Text style={styles.caseInfoTitle}>Valor:</Text>
        <Text style={styles.caseInfoText}>120</Text>
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
