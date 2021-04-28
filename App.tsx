import { StatusBar } from "expo-status-bar";
import React from "react";
import { CauseContextProvider } from "./src/hooks/useCauses";

import { Details } from "./src/pages/Details";
import { Landing } from "./src/pages/Landing";

export default function App() {
  return (
    <CauseContextProvider>
      <Landing />
      <StatusBar style="auto" />
    </CauseContextProvider>
  );
}
