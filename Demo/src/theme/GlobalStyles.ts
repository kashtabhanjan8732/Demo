import { StyleSheet } from 'react-native'
import { Colors } from '../common/Colors'

export const GlobalStyles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    container: {
        flex: 1,
        // backgroundColor: Colors.White,
        backgroundColor: Colors.ScreenBG,
    },
    // ----------------------- Common Styles ----------------------- //
    addBtn: {
        bottom: '5%',
        alignSelf: 'flex-end',
        end: '5%'
    },
    // ----------------------- Home Styles ----------------------- //
    homeCategoriesCon: {
        marginTop: 10,
        // backgroundColor: 'red',
        // height: 40
    },
    // ---------------------- Product Styles ---------------------- //
    productImage: {
        resizeMode: 'cover',
        flex: 1
    },
    productBottomCon: {
        flex: 1,
        backgroundColor: Colors.Black,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        marginTop: 30,
        shadowColor: Colors.Black,
        shadowOffset: {
            width: 3,
            height: -10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    proBottomInnerCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    productTitle: {
        color: Colors.White,
        lineHeight: 22,
        fontSize: 20,
        fontWeight: '600',
    },
    productPrice: {
        color: Colors.White,
        lineHeight: 16,
        fontSize: 14,
        fontWeight: '600',
    },
    productDesc: {
        color: Colors.White,
        lineHeight: 16,
        fontSize: 14,
    },
    // ---------------------- Create Styles ---------------------- //
    createContainer: {
        paddingHorizontal: 5,
        flex: 1
    },
    createDescInput: {
        height: 100,
    },
    createAPBtn: {
        width: '27%',
        position: 'absolute',
        bottom: 0
    }
})
export default GlobalStyles