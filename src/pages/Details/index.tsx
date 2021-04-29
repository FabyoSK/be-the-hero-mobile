import React, { useEffect } from "react";

import {
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CauseItem } from "../../components/CauseItem";
import { Card } from "../../components/Card";

import styles from "./styles";

import backIcon from "../../assets/back.png";
import { useCause } from "../../hooks/useCauses";

export function Details(props: any) {
  const { goBack } = useNavigation();
  const { getOrganization, organization } = useCause();

  const detailedCause = props.route.params.cause;

  function handleGoBack() {
    goBack();
  }

  useEffect(() => {
    getOrganization(detailedCause.organization_name);
  }, []);

  function handleGoToWhatsApp() {
    if (organization) {
      alert("A Error has occurred. Please try again");
      return;
    }
    Linking.openURL(`whatsapp://send?phone=${organization?.whatsApp}`);
  }
  function handleGoToEmail() {
    if (organization) {
      alert("A Error has occurred. Please try again");
      return;
    }
    Linking.openURL(`mailto://${organization?.email}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={backIcon} />
        </TouchableOpacity>
      </Header>
      <View>
        <CauseItem
          showDescription={true}
          showViewMore={false}
          cause={detailedCause}
        />
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
