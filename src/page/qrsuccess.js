import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const qrsuccess = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderRadius: 100, paddingTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/img/qr.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 24, color: '#484848', marginTop: 20
                }}>Payment Complete!</Text>
                < Text style={{ fontFamily: 'roboto', fontWeight: '500', fontSize: 24, color: '#575757', marginTop: 10 }}>Rp 9.999.999</Text>
            </View>
            <View style={{ marginTop: 20, paddingVertical: 20, backgroundColor: '#4982C1', alignItems: 'center', marginHorizontal: 30 }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 18, color: 'white', marginTop: 10
                }}>23 November 2021</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 18, marginTop: 10 }}>CoaLALA</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 18, marginTop: 10 }}>Jl. Jalan No. 99</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tab Page')} style={{ width: 281, marginTop: 20, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginHorizontal: 60 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Finish</Text>
            </TouchableOpacity>
        </View>
    )
}

export default qrsuccess

const styles = StyleSheet.create({})