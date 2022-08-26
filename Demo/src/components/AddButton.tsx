// ---------- Imports ---------- //
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../common/Colors'
import { Images } from '../common/Images'
// ---------- Global Variables Declaration ---------- //

// ---------- AddButton Props Interface ---------- //

// ---------- AddButton Component ---------- //
const AddButton = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- AddButton Screen return function---------- //
    return (
        <TouchableOpacity style={[styles.container, props.extraStyle]} onPress={props.onPress} activeOpacity={0.5}>
            <Image style={styles.image} source={Images.Plus} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        backgroundColor: Colors.White,
        padding: 15,
        borderRadius: 30,
        borderColor: Colors.Black,
        borderWidth: 1,
        position: 'absolute',
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.Black
    }
})
export default AddButton