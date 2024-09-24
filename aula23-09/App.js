import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  // Estados para armazenar peso, altura e resultado do IMC
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  // Função para calcular o IMC
  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // Converter altura para metros

    if (!pesoNum || !alturaNum) {
      Alert.alert('Erro', 'Por favor, insira valores válidos!');
      return;
    }

    const imcCalc = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalc.toFixed(2)); // Armazena o resultado com 2 casas decimais
  };

  // Função para limpar os campos e resetar o estado
  const limparCampos = () => {
    setPeso('');
    setAltura('');
    setImc(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      {/* Input para o peso */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
        placeholderTextColor="#aaa"
      />

      {/* Input para a altura */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        placeholderTextColor="#aaa"
      />

      {/* Botão para calcular o IMC */}
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {/* Botão para limpar os campos */}
      <TouchableOpacity style={styles.clearButton} onPress={limparCampos}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>

      {/* Exibir o resultado do IMC */}
      {imc && (
        <Text style={styles.resultado}>Seu IMC é: {imc}</Text>
      )}

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: '#61dafb',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#61dafb',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 12,
    width: '80%',
    color: '#fff',
    fontSize: 18,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#282c34',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
