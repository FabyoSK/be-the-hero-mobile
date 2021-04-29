import { StatusBar } from "expo-status-bar";
import React from "react";
import { CauseContextProvider } from "./src/hooks/useCauses";
import AppStack from "./src/routes/AppStack";

import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Roboto_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <>
      <CauseContextProvider>
        <AppStack />
      </CauseContextProvider>
    </>
  );
  // }
}
