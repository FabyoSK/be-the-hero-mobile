import { StatusBar } from "expo-status-bar";
import React from "react";
import { Details } from "./src/pages/Details";
import { Landing } from "./src/pages/Landing";

export default function App() {
  return (
    <>
      <Details />
      <StatusBar style="auto" />
    </>
  );
}
