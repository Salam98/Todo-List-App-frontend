import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Colab() {
  return (
    <View>
        <Text style={styles.sectionTitle}> Colabrative Tasks </Text>
        <Text style={styles.sectionTitle}> Stay tuned... </Text>
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'E8EAED',
    },
    scrollView: {
      backgroundColor: '#fff',
      marginHorizontal: 5,
    },
    taskWrapper:{
      paddingTop:70,
      paddingHorizontal:20,
    },
    sectionTitle:{
      fontSize:24,
      fontWeight:'bold',
      textAlign: 'center',
      padding: 100 ,
    },
})