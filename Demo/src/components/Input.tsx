// ---------- Imports ---------- //
import React from 'react'
import { StyleSheet, TextInput, } from 'react-native'
import { Colors } from '../common/Colors'
// ---------- Global Variables Declaration ---------- //

// ---------- Input Props Interface ---------- //
// ---------- Input Component ---------- //
const Input = (props: any) => {
    console.log('props', props);

    // ---------- Variables Declaration---------- //
    // ---------- Life-Cycle Method---------- //
    // ---------- Function Declaration---------- //
    // ---------- Input Screen return function---------- //
    return (
        <TextInput
            style={[styles.container, props.extraStyle]}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.DarkGrey}
            secureTextEntry={props.secureTextEntry}
            numberOfLines={props.numberOfLines}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
            onSubmitEditing={props.onSubmitEditing}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.Black,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        padding: 5,
        textAlignVertical: 'top',
        marginVertical: 15
    },
})
export default Input