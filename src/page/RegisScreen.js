import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

const RegisScreen = ({ navigation }) => {
    const [mail, setMail] = useState()
    const [pass, setPass] = useState()
    const [nam, setNam] = useState()
    const [tlp, setTlp] = useState()
    return (
        <View style={{ alignItems: 'center', backgroundColor:'#FFFFFF',flex: 1 }}>
            <View style={{ backgroundColor: '#E8E8E8', marginBottom: 31, marginTop: 95 }}>
                <TextInput style={styles.input} value={mail} onChangeText={() => setMail()} placeholder='E-mail' />
            </View>
            <View style={{ backgroundColor: '#E8E8E8', marginBottom: 31 }}>
                <TextInput style={styles.input} value={pass} onChangeText={() => setPass()} placeholder='Password' />
            </View>
            <View style={{ backgroundColor: '#E8E8E8', marginBottom: 31 }}>
                <TextInput style={styles.input} value={nam} onChangeText={() => setNam()} placeholder='Name' />
            </View>
            <View style={{ backgroundColor: '#E8E8E8', marginBottom: 31 }}>
                <TextInput style={styles.input} value={tlp} onChangeText={() => setTlp()} placeholder='No Handphone' />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tab Page')} style={{ width: 281, marginTop: 10, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisScreen

const styles = StyleSheet.create({
    input: { fontFamily: 'roboto', width: 316, height: 48, borderWidth: 1, borderRadius: 4, paddingLeft: 10 }
})
