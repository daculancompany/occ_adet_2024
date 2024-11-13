import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, List, Text } from "react-native-paper";

const NameList = () => {
    const [names, setNames] = useState([]); 
    const [newName, setNewName] = useState(""); 
    const [active, setAc] = useState(false)

    // useEffect(() =>{
    //     setNewName("new name");
    // },[])
    

    const addName = () => {
        if (newName.trim()) { 
            setNames((prevNames) => [...prevNames, newName]);
            setNewName("");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Enter Name"
                value={newName}
                onChangeText={(text)=> setNewName(text)}
                style={styles.input}
            />
            <Button mode="contained" onPress={addName} style={styles.button}>
                Add Name
            </Button>
            <Text>Active : {active ? 'user is active' : 'Inactive user'}</Text>
            <Button mode="contained" onPress={() => setAc(!active)} style={styles.button}>
            set {active ? 'INactive' : 'Active'}
            </Button>

            <Text style={styles.title}>Names List:</Text>
            <ScrollView   style={styles.listContainer}>
                {names.map((name, index) => (
                    <List.Item
                        key={index}
                        title={name}
                        left={(props) => (
                            <List.Icon {...props} icon="account" />
                        )}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    listContainer: {
        marginTop: 16,
    },
});

export default NameList;
