'use Client'

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView, Image } from 'react-native';

export default function FormularioScreen() {

  return (
    <ScrollView style={styles.principal} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../assets/Ted.jpg')}
         
        />
        <Text style={styles.name}>Mike Villegas</Text>
        <Text style={styles.career}>Ing. Sistemas Computacionales</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Correo</Text>
          <TextInput style={styles.input} placeholder="Imgresa Gmail" />

          <Text style={styles.label}>Tel</Text>
          <TextInput style={styles.input} placeholder="Ingresa Numero" />
        </View>

        <Button title="Guardar"  />
      </View>
    </ScrollView>
















    //<ScrollView>
    //  <View>
    //    {number.map((num, index) => <Text key={index}>{num}</Text>)}    //Map que imprime todo el array de los numeros
    //    <Button title="Rotar" onPress={rotate} />                       //Boton que llama a la funcion rotate para rotar el array de numeros
    //    <TextInput value={text} onChangeText={setText} />               //Input de texto que actualiza el estado text con el valor ingresado por el usuario
    //    <Text>{text}</Text>                                             //Texto que imprime el valor del estado text
//
    //    <FlatList
    //      data={datos}
    //      keyExtractor={(item) => item.id}
    //      renderItem={ item  => (
    //        <Text>{item.nombre}</Text>
    //      )}
    //    />
//
    //  </View>
    //</ScrollView>
   

    //<View style={styles.container}>
    //  <Text>Open up App.js to start working on your app!</Text>
    //  <Text>Contador: {count}</Text>
    //  
    //  <Button onPress={() => setCount(count + 1)} title="Aumentar" />
    //  <Button onPress={() => setCount(count - 1)} title="Disminuir" />
    //  
//
//
    //  <Button onPress={() => alert('Button pressed!')} title="Press me" />
    //  <StatusBar style="auto" />
    //</View>



  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#ce9c27',
    alignItems: 'center',      
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  career: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
  },
});