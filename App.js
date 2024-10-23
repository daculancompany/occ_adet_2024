import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
               // onPress={() => navigation.navigate("Details")}
             onPress={() => navigation.navigate('Details', { itemId: 42, otherParam: 'Passed Data' })}
            />
        </View>
    );
}


// function DetailsScreen() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Details Screen</Text>
//         </View>
//     );
// }

function DetailsScreen({ route, navigation }) {
    // Extract the parameters passed from the HomeScreen
    const { itemId, otherParam } = route.params;
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Item ID: {itemId}</Text>
        <Text>Other Param: {otherParam}</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

// Main App Component with Navigation
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
