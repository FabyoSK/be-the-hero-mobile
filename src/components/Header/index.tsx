import React, { ReactNode } from "react";

import { Image, SafeAreaView, Text, View } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

interface HeaderProps {
  children: ReactNode;
}
export function Header({ children }: HeaderProps) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Image source={logoImg} style={styles.logoImg} />
      {children}
    </SafeAreaView>
  );
}
