
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

const LoginScreen = ({ navigation }) => {
    const [mail, setMail] = useState()
    const [pass, setPass] = useState()
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#FFFFFF' }}>
            <View style={{ marginTop: 50, borderRadius: 100, padding: 40, backgroundColor: '#005690', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/logo/pngaaa2.png')} />
            </View>
            <Text style={{ marginTop: 30, fontSize: 30, fontWeight: '500', fontFamily: 'roboto', color: '#4982C1', marginBottom: 30 }}> E-Wallet</Text>
            <View style={{ backgroundColor: '#FFFFFF', marginBottom: 20 }}>
                <TextInput style={styles.input} value={mail} onChangeText={() => setMail()} placeholder='E-mail' />
            </View>
            <View style={{ backgroundColor: '#FFFFFF', marginBottom: 20 }}>
                <TextInput style={styles.input} value={pass} onChangeText={() => setPass()} placeholder='Password' />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tab Page')} style={{ width: 150, marginTop: 10, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Account Registration')} style={{ width: 150, marginTop: 10, paddingVertical: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: 'grey', fontWeight: 'bold', fontSize: 15 }}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    input: { fontFamily: 'roboto', width: 316, height: 48, borderWidth: 1, borderRadius: 4 }
})
