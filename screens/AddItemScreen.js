// screens/AddItemScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { saveItem } from '../utils';

function AddItemScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async () => {
    if (name && email && address) {
      const success = await saveItem(name, email, address);
      if (success) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Failed to save item');
      }
    } else {
      Alert.alert('Validation Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode=""
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default AddItemScreen;
