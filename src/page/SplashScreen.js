import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('LoginScreen')
        }, 2500)
    })
    return (
        <View style={{ flex: 1, backgroundColor: '#005690', alignItems: 'center' }}>
            <Image source={require('../Assets/img/pngaaa1.png')} style={{ marginTop: 85, width: 175, height: 150 }} />
            <Text style={{ marginTop: 52, color: 'white', fontSize: 36, fontWeight: '300' }}>E-WALLET APPS</Text>
            <Text style={{ marginTop: 52, color: 'white', fontSize: 36, fontWeight: '300', width: 238, textAlign: 'center' }}>Final Project React Native</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
