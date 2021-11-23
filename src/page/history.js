import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Card from '../components/Card'

const history = () => {
    return (
        <ScrollView>
            <View style={{ paddingVertical: 20 }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
        </ScrollView>
    )
}

export default history

const styles = StyleSheet.create({})
