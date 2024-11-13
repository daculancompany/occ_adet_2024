// utils.js
import axios from "axios";

//"http://localhost/ADET-2024/crude-mobile/api.php"
//"http://192.168.155.169/ADET-2024/crude-mobile/api.php";
export const API_URL = "http://localhost/ADET-2024/crude-mobile/api.php";

// Function to fetch items from the API
export const fetchItems = async () => {
    try {
        const response = await axios.get(API_URL);
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
        const response = await axios.post(API_URL, { name, email, address });
        return response.data.success;
    } catch (error) {
        console.error("Error saving item:", error);
        return false;
    }
};
