import React, { useState } from 'react';
import { LayoutChangeEvent, useWindowDimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

type Props = {
    children: React.ReactNode;
    scrollY: number;
    animation: Animatable.Animation;
    duration?: number;
    delay?: number;
};

export default function ScrollAwareAnimatableView({
    children,
    scrollY,
    animation,
    duration = 700,
    delay = 0,
}: Props) {
    const [elementY, setElementY] = useState(0);
    const { height: screenHeight } = useWindowDimensions();

    const handleLayout = (event: LayoutChangeEvent) => {
        const { y } = event.nativeEvent.layout;
        setElementY(y);
    };

    const isVisible = scrollY + screenHeight > elementY && scrollY < elementY + 200;

    return (
        <Animatable.View
            onLayout={handleLayout}
            animation={isVisible ? animation : undefined}
            duration={duration}
            delay={delay}
        >
            {children}
        </Animatable.View>
    );
};