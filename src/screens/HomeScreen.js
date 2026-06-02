import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import ExpenseItem from '../components/ExpenseItem';
import { getGastos } from '../database/database';

export default function HomeScreen({ navigation }) {
  const [gastos, setGastos] = useState([]);
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      carregarGastos();
    }, [])
  );

  const carregarGastos = () => {
    const dados = getGastos();
    setGastos(dados);
    
    const valorTotal = dados.reduce((acc, curr) => acc + curr.valor, 0);
    setTotal(valorTotal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalText}>Total Gasto:</Text>
        <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
      </View>

      <FlatList
        data={gastos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ExpenseItem data={item} />}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddExpense')}
      >
        <Text style={styles.addButtonText}>+ Adicionar Gasto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    alignItems: 'center',
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
  },
  totalValue: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  addButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});