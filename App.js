import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  const sumar = () => {
    const resultado = parseFloat(valor1) + parseFloat(valor2);
    alert(`El resultado de la suma es ${resultado}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Ingrese el primer valor'
        value={valor1}
        onChangeText={(text) => setValor1(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Ingrese el segundo valor'
        value={valor2}
        onChangeText={(text) => setValor2(text)}
      />
      <TouchableOpacity style={styles.button} onPress={sumar}>
        <Text style={styles.buttonText}>Sumar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
