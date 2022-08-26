// ---------- Imports ---------- //
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import GlobalStyles from '../../theme/GlobalStyles'
// ---------- Global Variables Declaration ---------- //

// ---------- Product Screen ---------- //
const Product = (props: any) => {
    // ---------- Variables Declaration---------- //
    const { data } = props.route.params
    const { avatar, description, price, name } = data
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- Product Screen return function---------- //
    return (
        console.log('data', data),
        <SafeAreaView style={GlobalStyles.container}>
            <View style={GlobalStyles.container}>
                <Image style={GlobalStyles.productImage} source={{ uri: avatar }} />
                <View style={GlobalStyles.productBottomCon}>
                    <View style={GlobalStyles.proBottomInnerCon}>
                        <Text style={GlobalStyles.productTitle}>{name}</Text>
                        <Text style={GlobalStyles.productPrice}>${price}</Text>
                    </View>
                    <Text style={GlobalStyles.productDesc}>{description}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Product