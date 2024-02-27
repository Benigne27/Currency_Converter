import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import CurrencyConverter from './Components/CurrencyConverter';
import { useState } from 'react';

export default function App() {
  
  return (
    <View style={styles.container}>
    
      <StatusBar style="light" />
     
      <CurrencyConverter/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop:200,
    paddingHorizontal:20
  },
  
});
