import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import * as Animatable from 'react-native-animatable';

import CenteredText from "./components/CenteredText";
import ResponsiveButton from "./components/ResponsiveButton";
import Card from "./components/Card";
import ScrollAwareAnimatableView from "./components/ScrollAwareAnimatableView";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (e) => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };


  return (
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>

        <ScrollAwareAnimatableView scrollY={scrollY} animation='fadeInDown'>
          <CenteredText />
        </ScrollAwareAnimatableView>

        <ScrollAwareAnimatableView scrollY={scrollY} animation='zoomIn' delay={200}>
          <ResponsiveButton />
        </ScrollAwareAnimatableView>

        <ScrollAwareAnimatableView scrollY={scrollY} animation='slideInRight' delay={400}>
          <Card />
        </ScrollAwareAnimatableView>

      </ScrollView>
    </View>
  );
};