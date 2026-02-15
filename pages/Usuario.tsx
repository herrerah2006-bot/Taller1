import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface UserData {
    cedula: string;
    nombre: string;
    correo: string;
    contrasena: string;
}

const camposFormulario = [
    { id: 'cedula', label: 'Cédula', teclado: 'numeric' },
    { id: 'nombre', label: 'Nombre Completo', teclado: 'default' },
    { id: 'correo', label: 'Correo Electrónico', teclado: 'email-address' },
    { id: 'contrasena', label: 'Contraseña', teclado: 'default' },
];

export const Usuario = () => {
    const [form, setForm] = useState<UserData>({
        cedula: '', nombre: '', correo: '', contrasena: ''
    });

    return (
     <View style={styles.container}>
      <Text style={styles.titulo}>Formulario</Text>

     {camposFormulario.map((item) => (
    <View key={item.id} style={styles.inputGroup}>
    <Text style={styles.label}>{item.label}</Text>
    <TextInput
    style={styles.input}
     placeholder={`Ingrese ${item.label}`}
    keyboardType={item.teclado as any}
    secureTextEntry={item.id === 'contrasena'}
    onChangeText={(valor) => setForm({ ...form, [item.id]: valor })} />
    </View> ))}
    </View>
    );
};
//usamos un poco de estilo simple como los bordes y hasi 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    inputGroup: {
        marginBottom: 15
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8
    }
});
