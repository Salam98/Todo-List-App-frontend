import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import{Button, IconButton} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import axios from 'axios';
import BaseURL from '../env';



export function Task(props){
  
const [isSelected, setSelection] = useState(!!+props.check);
const todoName = props.text ;


useEffect( ()=>{
  axios.post(`${BaseURL}/api/todos/checked`,{todoName:todoName,todoCheck:isSelected})
        .then(response => {})
        .catch(error => {});
},[isSelected],props.reset)

return (
  <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity 
          value={props.check}
          onValueChange={setSelection}
          onPress={()=>setSelection(!isSelected)}
          style= {isSelected?styles.checked:styles.unchecked}>
        </TouchableOpacity>
        <Text style= {isSelected?styles.taskTextDone:styles.itemText}> {props.text} </Text> 
      </View>
      <View style={styles.part2}>
      <AntDesign 
        name="edit" 
        color='black'
        size={20}
        style={styles.icon}
        onPress={props.edit}
      />
       <AntDesign 
        name="delete" 
        color='black'
        size={20}
        style={styles.icon}
        onPress={props.deleteTodo}
      />
      </View>
  </View>
)}

const styles = StyleSheet.create({
  item:{
    backgroundColor: '#cec2e4',
    padding: 15,
    borderRadius:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
  },
  itemLeft:{
    flexDirection:'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  }, 
  part2:{
    flexDirection:'row',
  },
  icon:{
    paddingHorizontal:5,
  },
  itemText:{
    maxWidth:'100%',
    flexWrap: 'wrap',
  },
  taskTextDone: {
    color: "gray",
    textDecorationLine: "line-through",
    flexWrap: 'wrap',
  },
  checked:{
    width:20,
    height:20,
    backgroundColor:'gray',
    borderWidth:1,
    opacity:0.5,
    borderRadius:5,
    marginRight: 5,
    borderColor:'gray',
  },
  unchecked:{
    width:20 ,
    height:20,
    borderColor:'#16247d',
    borderWidth:2,
    opacity:0.5,
    borderRadius:5,
    marginRight: 5,
  },
});