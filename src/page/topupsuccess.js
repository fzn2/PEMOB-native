import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const topupsuccess = ({ navigation }) => {
    return (
        <View style={{ backgroundColoro: 'white', marginHorizontal: 30 }}>
            <View style={{ borderRadius: 100, paddingTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/img/Wallet.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 24, color: '#484848', marginTop: 20
                }}>Top Up Complete</Text>
                < Text style={{ fontFamily: 'roboto', fontWeight: '500', fontSize: 24, color: '#575757', marginTop: 10 }}>Rp 99.999.999</Text>
            </View>
            <View style={{ marginTop: 20, paddingVertical: 20, backgroundColor: '#4982C1', alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 18, color: 'white', marginTop: 10
                }}>23 November 2021</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 18, marginTop: 10 }}>VA Mandiri</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tab Page')} style={{ width: 281, marginTop: 20, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginHorizontal: 30 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Finish</Text>
            </TouchableOpacity>
        </View>
    )
}

export default topupsuccess

const styles = StyleSheet.create({})
