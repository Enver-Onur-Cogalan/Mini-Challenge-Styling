import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={styles.card}>
            <Image
                source={require('../assets/sample.jpg')}
                style={styles.image}
                resizeMode='cover'
            />
            <Text style={styles.title}>My Career</Text>
            <Text style={styles.description}>
                Thank you to everyone who supports me ❤️‍🔥 {'\n '}Stay tuned for my next projects.
            </Text>
        </View>
    );
}



const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        margin: 10,
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    description: {
        fontSize: 30,
        color: '#666',
        fontStyle: 'italic',
    },
});