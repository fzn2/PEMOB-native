import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const qrpay = ({ navigation }) => {
    return (
        <View style={{ marginTop: 150, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ width: 319, height: 319, marginTop: 10, backgroundColor: '#C4C4C4', paddingVertical: 10 }}>
                <View style={{ marginHorizontal: 135, marginVertical: 120 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('QR Payment Confirmation')} style={{ backgroundColor: '#C4C4C4', width: 50, height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../Assets/img/camera.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', marginTop: 5 }}></Text>
                </View>
                <Text></Text>
            </View>
        </View>
    )
}

export default qrpay

const styles = StyleSheet.create({})
