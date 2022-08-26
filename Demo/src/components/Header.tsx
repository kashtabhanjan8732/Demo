// ---------- Imports ---------- //
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Colors } from '../common/Colors'
import { Images } from '../common/Images'
// ---------- Global Variables Declaration ---------- //

// ---------- Header Props Interface ---------- //
interface HeaderProps {
    props: any
}

// ---------- Header Component ---------- //
const Header = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- Header Screen return function---------- //
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images.Search} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        paddingEnd: 10
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    }
})
export default Header