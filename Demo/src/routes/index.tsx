// ---------- Imports ---------- //
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Product from '../screens/product'
import Create from '../screens/product/create'
import Header from '../components/Header'
import { Strings } from '../common/Strings'
import { Colors } from '../common/Colors'
// ---------- Global Variables Declaration ---------- //

// ---------- AppRoutes Screen ---------- //
const AppRoutes = (props: any) => {
    // ---------- Variables Declaration---------- //
    // ---------- Life-Cycle Method---------- //
    const Stack = createStackNavigator()
    // ---------- Function Declaration---------- //
    // ---------- AppRoutes Screen return function---------- //
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: true, headerTitleAlign: 'left', headerTitle: Strings.UPayments, headerRight: () => <Header />, headerStyle: { backgroundColor: Colors.ScreenBG, shadowColor: 'transparent' }, }} />
                <Stack.Screen name='Product' component={Product} />
                <Stack.Screen name='Create' component={Create} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppRoutes