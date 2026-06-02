import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExpenseItem({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.descricao}>{data.descricao}</Text>
        <Text style={styles.categoria}>{data.categoria}</Text>
        <Text style={styles.data}>{data.data}</Text>
      </View>
      <View style={styles.valorContainer}>
        <Text style={styles.valor}>R$ {data.valor.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoria: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  data: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  valorContainer: {
    justifyContent: 'center',
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});