import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const profile = ({ navigation }) => {
    return (

        <View style={{backgroundColor:'#FFFFFF', flex: 1}}>
            {/* profile */}
            <View style={{ backgroundColor: '#005690', padding: 30, alignItems: 'center', }}>
                <View style={{ borderRadius: 110, width: 110, height: 110, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 23 }}>
                    <Image source={require('../Assets/img/profile.jpg')} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                </View>
                <Text style={{ fontSize: 18, fontWeight: '400', fontFamily: 'roboto', color: '#FFFFFF', marginBottom: 10 }}>Fauzan Azrial</Text>
                <Text style={{ fontSize: 18, fontWeight: '400', fontFamily: 'roboto', color: '#FFFFFF' }}>08123456789</Text>
            </View>
            {/* button edit */}
            <View style={{ marginHorizontal: 40 }}>
                <TouchableOpacity style={{ marginTop: 35, backgroundColor: '#4982C1', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', paddingVertical: 9, fontWeight: '600', fontFamily: 'roboto', color: 'white', fontSize: 18 }}>CHANGE PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 35, backgroundColor: '#4982C1', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', paddingVertical: 9, fontWeight: '600', fontFamily: 'roboto', color: 'white', fontSize: 18 }}>CHANGE PASSWORD</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ marginTop: 35, backgroundColor: '#4982C1', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', paddingVertical: 9, fontWeight: '600', fontFamily: 'roboto', color: 'white', fontSize: 18 }}>LOGOUT</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default profile

const styles = StyleSheet.create({})
