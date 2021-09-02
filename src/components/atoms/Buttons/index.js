import React from 'react'
import { ProgressViewIOSComponent, StyleSheet, Text, TextPropTypes, TouchableOpacity, View } from 'react-native'

export default function Buttons({ type, title, onPress }) {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
        borderRadius: 10,
    }),
    text: (type) => ({
        padding: 10,
        fontFamily: 'nunito-semibold',
        textAlign: 'center',
        fontSize: 18,
        color: type === 'secondary' ? 'black' : 'white',
    })
})
