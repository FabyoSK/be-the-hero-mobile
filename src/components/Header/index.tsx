import React, { ReactNode } from "react";

import { Image, View } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Image source={logoImg} style={styles.logoImg} />
      {children}
    </View>
  );
}
