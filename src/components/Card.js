import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Card = () => {
    return (

        <View style={{ backgroundColor: 'white', paddingVertical: 20, borderRadius: 10, position: 'relative', marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20, shadowColor: '#000', shadowOpacity: 2, shadowOffset: { width: 0, height: 1 }, shadowRadius: 5, elevation: 5 }}>
            <Image source={require('../Assets/icon/bolakbalik.png')} />
            <View style={{}}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 14, color: '#484848', marginLeft: 20, marginBottom: 10
                }}>Rp 99.000: </Text>
                < Text style={{ fontFamily: 'roboto', fontWeight: '400', fontSize: 14, color: '#575757', marginLeft: 20 }}>Transfer to 082123456789</Text>
            </View>
            < Text style={{ fontFamily: 'roboto', fontWeight: '400', fontSize: 14, color: '#575757', marginLeft: 20 }}>11/23/2021</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})
