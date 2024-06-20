import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard,Button,ScrollView,SafeAreaView,Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{IconButton} from 'react-native-paper';
import {Task} from './Task';
import axios from 'axios';
import BaseURL from '../env';
import { Platform } from 'react-native';


export default function HomePage() {

  const[date, setDate] = useState(new Date());
  const[todo, setTodo] = useState();
  const[tasks,setTasks]= useState([]);
  const[editTodo,seteditTodo]= useState();

  useEffect(() => {
    if(tasks.length==0)
      {
        axios.get(`${BaseURL}/api/todos/savedTodos`)
        .then(response => {
             response.data.forEach(element => setTasks((list)=>[...list,[element.id,element.todo,element.check]]));
        })
         .catch(error => {console.log(error);
      });
    }
    else{}
  },[]);


  const addTodo = () =>
  {
    if(tasks.some((array) => array.includes(todo)) || todo==' ')
    {
      Alert.alert('Alert','you already have this task (;',[{text: 'Ok'}]);
    }
    else{
        const newTodo= [
        id= new Date().getTime(),
        title= todo,
        check= false,
      ];
      Keyboard.dismiss();
      setTasks([...tasks,newTodo]);
      setTodo(null);
      axios.post(`${BaseURL}/api/todos`,
          {
              todo: todo,
              check: false,
          }
      )
      .then(function (response) {})
      .catch(function (err) {console.log(err.response); })
    };
  };

function deleteTodo(d_todo) {
  axios.post(`${BaseURL}/api/todos/delete`,{ todo:d_todo})
  .then(response=>{
    const newTasks= tasks.filter(([id,title,done]) => title !== d_todo);
    setTasks(newTasks);
  })
  .catch(error => {console.log(error);});
};

function edit(todo){
  seteditTodo(todo);
  setTodo(todo);
  console.log(todo);
  console.log(editTodo);
};

function update(){
  const updatedTodo= tasks.map((item) => {
    if (item[1]==editTodo){
      console.log(editTodo);
      console.log(todo);
      axios.post(`${BaseURL}/api/todos/update`,
      { 
        todoToEdit:editTodo, 
        editedTodo:todo,
      })
      .then()
      .catch(error => {console.log(error);})
      return [todo,title=todo];
    }
    return item
  });
  setTasks(updatedTodo);
  seteditTodo(null);
  setTodo(null);
}


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <View style ={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Hello Sam! </Text>
        <Text style={styles.sectionTitle2}>{date.toDateString()}</Text>
        <KeyboardAvoidingView
          behavior= {Platform.OS==='ios'?'padding':'height'}
          style={styles.writTaskWrapper}
        >
        <TextInput style={styles.input} placeholder={'New Day...New Tasks'} onChangeText={(text)=>setTodo(text)} value={todo} ></TextInput>
        {
          editTodo?
          <TouchableOpacity onPress={todo===null?null:()=>update()}>
          <IconButton
          icon ='plus-circle-outline'
          size={35}
          iconColor='#ae99d2'
          />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={todo===null?null:()=>addTodo()}>
          <IconButton
          icon ='plus-circle-outline'
          size={35}
          iconColor='#ae99d2'
          />
          </TouchableOpacity>
        }
        </KeyboardAvoidingView>

      </View>

      <ScrollView style={styles.scrollView}>
      <View style={styles.items}>
        {
          tasks.map(([id,title,done])=>{
            return <Task  key={id} text={title} check={done} edit={()=>edit(title)} deleteTodo={()=>deleteTodo(title)}/>
          })
        }
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'E8EAED',
  },
  uncheckType:{
    marginTop:'3%',
    bottom: '3%' ,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  checkAll:{
    flexDirection: "row",
    justifyContent:'space-between',
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
  },
  sectionTitle2:{
    fontSize:20,
    paddingTop:30,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  items:{
    marginTop:'2%',
    paddingHorizontal:'3%',
  },
  writTaskWrapper:{
    //position:'absolute',
    marginTop:'10%',
    bottom: '3%' ,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingHorizontal:20,
    paddingVertical:'1%',
    backgroundColor:'#FFF',
    borderRadius:10,
    borderColor:'#ae99d2',
    borderWidth:2,
    width:'85%',
  },
  addWrapper:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    height:60,
    width:60,
    borderWidth:1,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "green",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
  },
  item:{
    backgroundColor: '#FFC1CC',
    padding: 15,
    borderRadius:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
  },
  itemLeft:{
    flexDirection:'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
 

