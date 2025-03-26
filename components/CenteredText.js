import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CenteredText() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello 👋 I am developer</Text>
        </View>
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
