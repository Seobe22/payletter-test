import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screen/Home';
import Details from '../screen/Details';
import Payments from '../screen/Payments';

const Stack = createNativeStackNavigator();

const Stacks = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
                <Stack.Screen name="Details" component={Details} options={{headerShown : false}}/>
                <Stack.Screen name="Payments" component={Payments} options={{headerShown : false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacks;