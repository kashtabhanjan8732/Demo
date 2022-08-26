// ---------- Imports ---------- //
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../common/Colors'
import { Images } from '../common/Images'
// ---------- Global Variables Declaration ---------- //

// ---------- ProductItem Props Interface ---------- //
interface ProductItemProps {
    props: any
}

// ---------- ProductItem Component ---------- //
const ProductItem = (props: any) => {
    // ---------- Variables Declaration---------- //
    let { name, avatar, price } = props.item
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- ProductItem Screen return function---------- //
    return (
        // console.log('props', props.item),
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={props.onPress}>
            <Image style={styles.image} source={{ uri: avatar }} />
            <View style={styles.bottomCon}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.price}>{'$'}{price}</Text>
                </View>
                <Image style={styles.icon} source={Images.Plus} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 150,
        margin: 10,
        backgroundColor: Colors.White,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    image: {
        resizeMode: 'contain',
        height: 175,
        width: 150,
    },
    bottomCon: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.Black,
        borderRadius: 10,
        padding: 5,
        width: '100%'
    },
    title: {
        color: Colors.White,
        flex: 1,
        fontSize: 12,
        lineHeight: 16,
        // width: 'auto'
    },
    price: {
        color: Colors.White,
        flex: 1,
        fontSize: 12,
        lineHeight: 16,
    },
    icon: {
        resizeMode: 'contain',
        height: 15,
        width: 15,
        alignSelf: 'flex-end'
    }
})
export default ProductItem