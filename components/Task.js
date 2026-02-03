import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import{Button, IconButton} from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import { useTodos } from '../context/TodoContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';



export function Task({ id, text, check, edit, deleteTodo }) {
 const { toggleCheck } = useTodos ();
 const isChecked = Boolean(check);
 const { t } = useTranslation();
  return (
    <View style={styles.item}>
         {/* <LinearGradient
      colors={['#FFDEE9', '#C7CEEA']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[StyleSheet.absoluteFill , styles.rounded]}
    >
    </LinearGradient> */}
      <View style={styles.itemLeft}>
        <TouchableOpacity
          onPress={() => toggleCheck(text, isChecked)}
          style={isChecked ? styles.checked : styles.unchecked}
        />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={isChecked ? styles.taskTextDone : styles.itemText}>
          {text}
        </Text>
      </View>
      <View style={styles.part2}>
        <AntDesign
          name="edit"
          color="#000000ff"
          size={20}
          style={styles.icon}
          onPress={edit}
        />
        <AntDesign
          name="delete"
          color="#000000ff"
          size={20}
          style={styles.icon}
          onPress={deleteTodo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: '#fff' ,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'space-between',
    marginBottom:10,
    //borderWidth: 2,
    borderRadius: 15 ,
   // borderColor: '#8fb8ca',
   // elevation: 4, // Android
    //shadowColor: '#bcce96ff', // iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //shadowOffset: { width: 0, height: 2 },
  },
  itemTextContainer:{
    flex: 1,
    marginRight: 12,
  },
  rounded:{
     borderRadius: 15 ,
     borderColor: '#FFDEE9',
     borderWidth: 2,
      },
  itemLeft:{
    flexDirection:'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  }, 
  part2:{
    flexDirection:'row',
    alignItems: 'center',
  },
  icon:{
    paddingHorizontal:5,
  },
  itemText:{
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
    backgroundColor:'#314f3dff',
    borderWidth:1,
    //opacity:0.5,
    borderRadius:5,
    marginRight: 5,
    borderColor:'#314f3dff',
  },
  unchecked:{
    width:20 ,
    height:20,
    borderColor:'#000000ff',
    borderWidth:2,
    //opacity:0.5,
    borderRadius:5,
    marginRight: 5,
  },
});