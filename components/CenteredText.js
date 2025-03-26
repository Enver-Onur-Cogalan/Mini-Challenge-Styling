import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FadeInView from './animations/FadeInView';

export default function CenteredText() {
    return (
        <FadeInView style={styles.container}>
            <Text style={styles.text}>Hello 👋 I am developer</Text>
        </FadeInView>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '800',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#eee',
        margin: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
