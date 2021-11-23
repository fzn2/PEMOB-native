import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

const transferconfirm = ({ navigation }) => {
    const [trf, setTrf] = useState()
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderRadius: 100, marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/img/transferimg.png')} />
                <View style={{ backgroundColor: '#E8E8E8', marginBottom: 20, marginTop: 70 }}>
                    <TextInput style={styles.input} value={trf} onChangeText={() => setTrf()} placeholder='Nominal Transfer' />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontFamily: 'roboto', fontWeight: '400', fontSize: 16, color: 'black', marginTop: 20
                    }}>Receiver:</Text>
                    <Text style={{
                        fontFamily: 'roboto', fontWeight: '400', fontSize: 16, color: 'black', marginTop: 20, marginBottom: 20
                    }}>Fauzan Azrial</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('transfersuccess')} style={{ width: 281, marginTop: 10, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Transfer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default transferconfirm

const styles = StyleSheet.create({
    input: { fontFamily: 'roboto', width: 316, height: 48, borderWidth: 1, borderRadius: 4 }
})