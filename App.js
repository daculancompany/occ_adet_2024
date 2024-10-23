import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Modal,
    ScrollView,
    TouchableOpacity,
    Switch,
    FlatList,
} from "react-native";

const ThreeColumnLayout = () => {
    return (
        <View style={styles.containerColumn}>
            <View style={styles.column}>
                <Text>Column 1</Text>
            </View>
            <View style={styles.column}>
                <Text>Column 2</Text>
            </View>
            <View style={styles.column}>
                <Text>Column 3</Text>
            </View>
        </View>
    );
};

const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "5", title: "Item 5" },
    { id: "6", title: "Item 6" },
    { id: "7", title: "Item 7" },
    { id: "8", title: "Item 8" },
    { id: "9", title: "Item 9" },
    { id: "10", title: "Item 10" },
];

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);

    const handlePress = () => {
        console.log(inputValue);
        Alert.alert("Button Pressed", `You entered: ${inputValue}`);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}  showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.label}>Enter something:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type here..."
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
                <Button title="Submit" onPress={handlePress} />

                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Enable Option:</Text>
                    {/* switch */}
                    <Switch
                        value={switchValue}
                        onValueChange={(value) => setSwitchValue(value)}
                    />
                </View>
                {/* TouchableOpacity */}
                <TouchableOpacity style={styles.button} onPress={toggleModal}>
                    <Text style={styles.buttonText}>Open Modal</Text>
                </TouchableOpacity>
                {/* modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                This is a Modal!
                            </Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={toggleModal}
                            >
                                <Text style={styles.buttonText}>
                                    Close Modal
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View
                    style={{
                        backgroundColor: "red",
                        flexDirection: "row",
                        width: "100%",
                    }}
                >
                    <View style={{ backgroundColor: "blue", width: "33%" }}>
                        <Text>Layout</Text>
                    </View>
                    <View style={{ backgroundColor: "green", width: "33%" }}>
                        <Text>Layout</Text>
                    </View>
                    <View style={{ backgroundColor: "blue", width: "33%" }}>
                        <Text>Layout</Text>
                    </View>
                </View>
                <ThreeColumnLayout />
                {/* flatlist */}
                <FlatList
                    data={data} // Data to be rendered
                    renderItem={renderItem} // Function to render each item
                    keyExtractor={(item) => item.id} // Unique key for each item
                    //horizontal={true}
                  showsVerticalScrollIndicator={false}
                />
                <FlatList
                    data={data} // Data to be rendered
                    renderItem={renderItem} // Function to render each item
                    keyExtractor={(item) => item.id} // Unique key for each item
                    horizontal={true}
                   showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 16,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: "100%",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: 300,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
    },
    buttonClose: {
        backgroundColor: "#f44336",
    },
    containerColumn: {
        flexDirection: "row", // Flexbox row direction for horizontal layout
        justifyContent: "space-between", // Spaces columns evenly
        padding: 10,
    },
    column: {
        padding: 20,
        backgroundColor: "#f1f1f1",
        alignItems: "center", // Centers text horizontally
        justifyContent: "center", // Centers text vertically
        borderWidth: 1,
        borderColor: "#ccc",
    },

    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
});
