import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import Card from '../components/Card'

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white', paddingTop: 35, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 20, color: '#484848', marginLeft: 20
                }}>Your Balance:</Text>
                < Text style={{ fontFamily: 'roboto', fontWeight: '500', fontSize: 36, color: '#575757', marginLeft: 20 }}>Rp 99.999.999</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20, paddingVertical: 20, backgroundColor: '#4982C1', borderRadius: 5, shadowColor: '#000', shadowOpacity: 2, shadowOffset: { width: 0, height: 1 }, shadowRadius: 5, elevation: 5 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Top Up')} style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Assets/icon/plus.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#FFFFFF', textAlign: 'center', marginTop: 5 }}>Top Up</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('QR Payment')} style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Assets/icon/qr.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#FFFFFF', textAlign: 'center', marginTop: 5 }}>QR Pay</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Transfer')} style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Assets/icon/arrow.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#FFFFFF', textAlign: 'center', marginTop: 5 }}>Transfer</Text>
                    </View>
                </View>
            </View>
            <Text style={{ color: '#000000', marginTop: 15, marginLeft: 20, fontFamily: 'roboto', fontWeight: '300', fontSize: 14, marginBottom: 10 }}>5 Latest Transaction</Text>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})
