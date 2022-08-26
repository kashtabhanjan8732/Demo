// ---------- Imports ---------- //
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import { Colors } from '../common/Colors'
// ---------- Global Variables Declaration ---------- //

// ---------- Button Props Interface ---------- //
// ---------- Button Component ---------- //
const Button = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- Button Screen return function---------- //
    return (
        <TouchableOpacity style={[styles.container, props.extraStyle]} onPress={props.onPress} activeOpacity={0.5}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.White,
        borderWidth: 1,
        borderRadius: 12,
        height: 40,
        backgroundColor: Colors.Black,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    title: {
        color: Colors.White,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '600'
    },
})
export default Button