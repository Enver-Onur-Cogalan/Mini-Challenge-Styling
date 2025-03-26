import { Alert, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

export default function ResponsiveButton() {
    const { width } = useWindowDimensions();
    const buttonWidth = width * 0.8;

    const [pressCount, setPressCount] = useState(0);

    const handlePress = () => {
        const newCount = pressCount + 1;
        setPressCount(newCount);

        if (newCount === 5) {
            Alert.alert('You clicked 5 times and what did you get? 🙄');
            setPressCount(0);
        } else {
            Alert.alert('UUps! I told you to try me, not press me 😎');
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, { width: buttonWidth, height: buttonWidth * 0.3 }]}
            onPress={handlePress}
        >
            <Text style={styles.text}>Try Me!</Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 12,
        marginVertical: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },
});