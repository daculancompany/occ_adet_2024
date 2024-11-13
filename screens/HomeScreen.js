import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Card, Text, Avatar } from "react-native-paper";
import { fetchItems } from "../utils";

function HomeScreen({ navigation }) {
    const [items, setItems] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const loadItems = async () => {
        setRefreshing(true);
        const data = await fetchItems();
        setItems(data);
        setRefreshing(false);
    };

    useEffect(() => {
        loadItems();
        const unsubscribe = navigation.addListener("focus", loadItems);
        return unsubscribe;
    }, [navigation]);

    const renderItem = ({ item }) => (
        <Card
            style={styles.card}
            onPress={() =>
                navigation.navigate("ItemDetail", { itemId: item.id, })
            }
        >
            <Card.Content style={styles.cardContent}>
                <Avatar.Text
                    size={40}
                    label={item.name.charAt(0)}
                    style={styles.avatar}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                </View>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No items added.</Text>}
                refreshing={refreshing} // To show the refresh indicator
                onRefresh={loadItems} // Trigger loadItems when pull-to-refresh is used
                showsVerticalScrollIndicator={false} 
            />
            <Button
                mode="contained"
                style={styles.addButton}
                onPress={() => navigation.navigate("AddItem")}
            >
                Add New Item
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    addButton: {
        marginTop: 20,
    },
    card: {
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#6200ee",
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "#6b6b6b",
    },
    address: {
        fontSize: 12,
        color: "#6b6b6b",
    },
});

export default HomeScreen;
