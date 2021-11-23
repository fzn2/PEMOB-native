import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const qrconfirm = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderRadius: 100, paddingTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/img/qr.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 24, color: '#484848', marginTop: 20
                }}>Rp 9.999.999</Text>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 21, marginTop: 4, width: 250, alignSelf: 'center' }} />
            <View style={{ marginTop: 20, paddingVertical: 20, backgroundColor: '#4982C1', alignItems: 'center', marginHorizontal: 30 }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 18, color: 'white', marginTop: 10
                }}>Payment To:</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 24, marginTop: 10 }}>CoaLALA</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 16, marginTop: 10 }}>Jl. Jalan No. 99</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('QR Payment Success')} style={{ width: 281, marginTop: 20, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginHorizontal: 60 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default qrconfirm

const styles = StyleSheet.create({})