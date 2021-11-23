import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text } from 'react-native'

const Topup = ({ navigation }) => {
    const [top, setTop] = useState()
    return (
        <View>
            <View style={{ borderRadius: 100, marginTop: 70, justifyContent: 'center', alignItems: 'center',}}>
                <Image source={require('../Assets/img/Wallet.png')} />
                <View style={{ backgroundColor: '#E8E8E8', marginBottom: 20, marginTop: 50 }}>
                    <TextInput style={styles.input} value={top} onChangeText={() => setTop()} placeholder='Nominal Top Up' />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Topupsuccess')} style={{ width: 281, marginTop: 10, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Topup

const styles = StyleSheet.create({
    input: { fontFamily: 'roboto', width: 316, height: 48, borderWidth: 1, borderRadius: 4 }
})
