// utils.js
import axios from "axios";

//"http://localhost/ADET-2024/crude-mobile/api.php"
//"http://192.168.155.169/ADET-2024/crude-mobile/api.php";
export const API_URL = "http://localhost/ADET-2024/crude-mobile/api.php";

// Function to fetch items from the API
export const fetchItems = async () => {
    try {
        // Use axios.post to send data in the body of the request
        const response = await axios.post(API_URL, {
            action: 'get-items'  // Send 'action' in the request body
        });
        
        // Check if the response is successful
        if (response.data.success) {
            return response.data.items;
        } else {
            console.error("Failed to fetch items:", response.data.message);
            return [];
        }
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
};



// Function to save a new item to the API
export const saveItem = async (name, email, address) => {
    try {
        const response = await axios.post(API_URL, { name, email, address,  action: 'save-item' });
        return response.data.success;
    } catch (error) {
        console.error("Error saving item:", error);
        return false;
    }
};

// Function to handle user login
export const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL, {
            action: "login", 
            email,
            password,
        });

        if (response.data.success) {
            return {
                success: true,
                name: response.data.name, 
                id: response.data.id,
            };
        } else {
            return {
                success: false,
                message: response.data.message || "Invalid credentials",
            };
        }
    } catch (error) {
        console.error("Error during login:", error);
        return {
            success: false,
            message: "An error occurred. Please try again later.",
        };
    }
};
