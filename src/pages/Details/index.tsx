import React from "react";

import {
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CaseItem } from "../../components/CauseItem";
import { Card } from "../../components/Card";

import styles from "./styles";

import backIcon from "../../assets/back.png";

export function Details() {
  // // const { goBack } = useNavigation();

  // function handleGoBack() {
  //   goBack();
  // }
  function handleGoToWhatsApp() {}
  function handleGoToEmail() {}

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <TouchableOpacity>
          <Image source={backIcon} />
        </TouchableOpacity>
      </Header>
      <View>
        <CaseItem showDescription={true} showViewMore={true} />
        <Card>
          <Text style={styles.title}>Salve o dia!</Text>
          <Text style={styles.title}>Seja o herói</Text>
          <Text style={styles.text}>Entre em Contato</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGoToWhatsApp}
            >
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleGoToEmail}>
              <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
