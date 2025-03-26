import React from "react";
import { ScrollView, View } from "react-native";
import CenteredText from "./components/CenteredText";
import ResponsiveButton from "./components/ResponsiveButton";
import Card from "./components/Card";
import FadeInView from "./components/animations/FadeInView";

export default function App() {
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <FadeInView>
          <CenteredText />
        </FadeInView>

        <FadeInView>
          <ResponsiveButton />
        </FadeInView>

        <FadeInView>
          <Card />
        </FadeInView>
      </ScrollView>
    </View>
  );
};