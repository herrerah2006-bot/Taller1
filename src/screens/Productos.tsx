import React from 'react'
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

interface Prenda {
  id: string;
  prenda: string;
  precio: string;
  img: string;
}

const ROPA = [
  { id: '1', prenda: 'Camiseta Oversize', precio: '$25', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500' },
  { id: '2', prenda: 'Jean Classic', precio: '$45', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500' },
];
export const Productos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NUEVA COLECCIÓN</Text>
      <FlatList
        data={ROPA}
        numColumns={2} // <--- Configura esto primero para el diseño grid
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.imagen} />
            <Text style={styles.nombre}>{item.prenda}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
            <TouchableOpacity style={styles.boton}>
              <Text style={styles.textoBoton}>Añadir</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  card: { flex: 1, margin: 5, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center' },
  imagen: { width: 150, height: 150, borderRadius: 10, marginBottom: 10 }, 
  nombre: { fontSize: 16, fontWeight: 'bold' },
  precio: { fontSize: 14, color: 'green' },
  boton: { backgroundColor: '#000', padding: 8, borderRadius: 5, marginTop: 10 },
  textoBoton: { color: '#fff', fontWeight: 'bold' }
});
