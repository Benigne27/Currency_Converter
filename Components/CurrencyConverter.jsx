import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function CurrencyConverter() {
    const [value, setValue]= useState('')
    const [amount, setAmount]= useState('')
  const Convert=()=>{
    const newAmount=value*1300
    setAmount(newAmount.toFixed(3))  
  }
  return (
    <View style={styles.contain}>
         <Text style={styles.text}>Type the amount to convert to Rwandan Francs:</Text>
      <TextInput style={styles.input} keyboardType='numeric'
      placeholder='Enter the amount in Dollars'
      value={value}
      onChangeText={setValue}/>
      <Pressable style={styles.button} onPress={Convert}><Text style={styles.text2}>Convert to Rwandan Francs</Text></Pressable>
      <View >{amount?(<Text style={styles.text}>The amount in Rwandan Francs is: ${amount}</Text>):null}</View>
    </View>
  )
}

const styles = StyleSheet.create({
    contain:{
        width:'100%',
        height:40, 
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:300,
        height:'100%',
        backgroundColor:'#fff',
        borderRadius:8,
        paddingHorizontal:10
    },
    text:{
        color:'white',
        paddingVertical:50,
        fontSize:15,
        fontWeight:'bold'
      }, 
      text2:{
        color:'white',
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold'
      }, 
      button:{
        width:300,
            height:40,
            borderRadius:8,
            backgroundColor:'green',
            top:30,
            display:'flex',
            justifyContent:'center'
      }
})