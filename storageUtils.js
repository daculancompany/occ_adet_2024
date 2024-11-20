import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save session data (user info, token, etc.)
const saveSession = async (sessionData) => {
    if (Platform.OS === "web") {
        // For Web, use localStorage
        localStorage.setItem("sessionData", JSON.stringify(sessionData));
    } else {
        // For Mobile, use AsyncStorage
        await AsyncStorage.setItem("sessionData", JSON.stringify(sessionData));
    }
};

// Get session data (user info, token, etc.)
const getSession = async () => {
    if (Platform.OS === "web") {
        // For Web, use localStorage
        const sessionData = localStorage.getItem("sessionData");
        return sessionData ? JSON.parse(sessionData) : null;
    } else {
        // For Mobile, use AsyncStorage
        const sessionData = await AsyncStorage.getItem("sessionData");
        return sessionData ? JSON.parse(sessionData) : null;
    }
};

// Remove session data (logout)
const removeSession = async () => {
    if (Platform.OS === "web") {
        // For Web, use localStorage
        localStorage.removeItem("sessionData");
    } else {
        // For Mobile, use AsyncStorage
        await AsyncStorage.removeItem("sessionData");
    }
};

export { saveSession, getSession, removeSession };
