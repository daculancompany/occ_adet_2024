// screens/ItemDetailScreen.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Card } from "react-native-paper";
import axios from "axios";
import { API_URL } from "../utils";

function ItemDetailScreen({ route }) {
    const { itemId } = route.params; // Get the itemId from the params passed by the navigation
    const [item, setItem] = useState(null); // State to hold the fetched item details
    const [loading, setLoading] = useState(true); // Loading state while fetching data

    useEffect(() => {
        const fetchItemDetails = async () => {
            setLoading(true);  
            try {
                const response = await axios.post(API_URL, {
                    id: itemId,
                    action: 'get-item'  
                });
        
                if (response.data.success) {
                    setItem(response.data.item); 
                } else {
                    alert("Item not found");  
                }
            } catch (error) {
                console.error("Error fetching item details:", error); 
                alert("An error occurred while fetching item details");  
            } finally {
                setLoading(false);  
            }
        };
        

        fetchItemDetails();
    }, [itemId]);

    // Show a loading spinner until the data is fetched
    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {item ? (
                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.value}>{item.name}</Text>

                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{item.email}</Text>

                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>{item.address}</Text>
                    </Card.Content>
                </Card>
            ) : (
                <Text>No item details available.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    card: {
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        marginTop: 10,
    },
    value: {
        marginBottom: 10,
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ItemDetailScreen;
