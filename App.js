import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import MainScreen from './app/screens/MainScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <MainScreen></MainScreen>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
