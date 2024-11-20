import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, ActivityIndicator } from "react-native-paper";
import axios from "axios";
import { login } from "../utils";
import { saveSession } from "../storageUtils";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        setLoading(true);

        const response = await login(email, password);

        if (response.success) {
            setLoading(false);
            const user_id = response.id; 
            const name = response.name; 
            await saveSession({ user_id: user_id, name: name });
    
            // Redirect to the Home screen after successful login
            navigation.replace("Home");
        } else {
            setLoading(false);
            Alert.alert("Error", response.message || "Invalid credentials");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                style={styles.input}
                secureTextEntry
            />
            {loading ? (
                <ActivityIndicator animating={true} />
            ) : (
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={styles.button}
                >
                    Login
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
});

export default LoginScreen;
