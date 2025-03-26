import React from "react";
import { ScrollView, View } from "react-native";
import CenteredText from "./components/CenteredText";
import ResponsiveButton from "./components/ResponsiveButton";
import Card from "./components/Card";

export default function App() {
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <CenteredText />
        <ResponsiveButton />
        <Card />
      </ScrollView>
    </View>
  );
};