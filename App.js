// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import BasicReact from "./screens/BasicReact";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/* <Stack.Screen name="BasicReact" component={BasicReact} />  */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="AddItem" component={AddItemScreen} />
                    <Stack.Screen
                        name="ItemDetail"
                        component={ItemDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
    BasicReact;
}
