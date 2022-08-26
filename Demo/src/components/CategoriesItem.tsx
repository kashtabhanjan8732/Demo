// ---------- Imports ---------- //
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../common/Colors'
// ---------- Global Variables Declaration ---------- //

// ---------- CategoriesItem Props Interface ---------- //
interface CategoriesItemProps {
    props: any
}

// ---------- CategoriesItem Component ---------- //
const CategoriesItem = (props: any) => {
    // ---------- Variables Declaration---------- //
    let { name, selected } = props.item
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- CategoriesItem Screen return function---------- //
    return (
        // console.log('props', props),
        <TouchableOpacity style={selected ? styles.activeContainer : styles.container} activeOpacity={0.5} onPress={props.onPress}>
            <Text style={selected ? styles.activeTitle : styles.title}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 'auto',
        marginHorizontal: 10,
        backgroundColor: Colors.Black,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    activeContainer: {
        height: 30,
        width: 'auto',
        marginHorizontal: 10,
        backgroundColor: Colors.White,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
        borderColor: Colors.Black,
        borderWidth: 1
    },
    title: {
        color: Colors.White
    },
    activeTitle: {
        color: Colors.Black
    },
})
export default CategoriesItem