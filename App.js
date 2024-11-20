import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { getSession } from "./storageUtils"; 

import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        // Check if there's an active session
        const checkSession = async () => {
            const session = await getSession();
            console.log(session)
            if (session && session.user_id) {
                setIsLoggedIn(true);  // User is logged in
            } else {
                setIsLoggedIn(false); // No active session
            }
        };
        checkSession();
    }, []);

    if (isLoggedIn === null) {
        // Loading state
        return null;
    }

    console.log({isLoggedIn})

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="AddItem" component={AddItemScreen} />
                    <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
