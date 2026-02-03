import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
  ImageBackground,
  Image
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton } from "react-native-paper";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useTodos } from "../context/TodoContext";
import {Task} from "../components/Task";
import { SafeAreaView } from 'react-native-safe-area-context';
import LightBackgroundSvg from "../assets/BackgroundSvg.js";
import DarkBackgroundSvg from "../assets/DarkBackgroundSvg.js";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext.js';

export default function HomePage() {

  const { t } = useTranslation();
   const { theme} = useTheme();
  const styles = createStyles(theme);
  // const SvgComponent = isDarkMode ? DarkBackgroundSvg : LightBackgroundSvg;

  const {
    tasks,
    DailyTasks,
    generalTasks,
    addTodo,
    deleteTodo,
    update,
    loadTasks,
    toggleCheck,
    clearTasks,
    formattedDate, 
    username
  } = useTodos();

  const route = useRoute();
  const { type: taskType } = route.params;

  const [date, setDate] = useState(new Date().toDateString());
  const [todo, setTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState("");
  const time = new Date().getHours();

  const dateParts = date.split(" ");
  const day = dateParts[0];
  const shortDate = dateParts.slice(1).join(" ");


  useFocusEffect(
    React.useCallback(() => {
      const handleTasks =  () => {
         loadTasks(taskType); 
      };
      handleTasks();
    }, [taskType])
  );


  const handleAdd = () => {
  addTodo(todo, taskType);
  setTodo('');
};

const handleEdit = (title) => {
  setEditingTodo(title);
  setTodo(title);
};

const handleUpdate = () => {
  update(editingTodo, todo);
  setEditingTodo('');
  setTodo('');
};

  return (
    <View style={styles.container}>
      {/* <SvgComponent style={StyleSheet.absoluteFill} /> */}
      <SafeAreaView style={styles.container}>
        <View style={styles.taskWrapper}>
          {time < 12 ? (
            <Text style={styles.sectionTitle}>{t('Good Morning')} {username} 👋</Text>
          ) : (
            <Text style={styles.sectionTitle}>{t('Good Evening')} {username} 👋</Text>
          )}
         <View style={{flexDirection:'row'}}>
            <Image source={taskType=='D'?require('../assets/planner.png'):require('../assets/checklist.png')} style={{ width: 35, height: 35 }} />
            <Text style={styles.sectionTitle2}>{taskType=='D'?t('Daily'):t('my tasks')}</Text>
          </View>
 <Text style={styles.sectionTitle3}>{day}, {formattedDate}</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writTaskWrapper}
          >
            <TextInput
              style={styles.input}
              placeholder={t('taskPlaceholder')}
              onChangeText={text => setTodo(text)}
              value={todo}
            />
            <TouchableOpacity onPress={editingTodo ? handleUpdate: handleAdd} disabled={!todo.trim()}>
              <IconButton icon="plus-circle-outline" size={40} iconColor="#314f3dff" />
            </TouchableOpacity>   
          </KeyboardAvoidingView>
        </View>

        <View style={styles.footer}>
          <ScrollView style={styles.scrollView}  
                      showsVerticalScrollIndicator={false}>
            <View style={styles.items}>
              {(taskType=='D'? DailyTasks:generalTasks).map(([id, title, check, count, type]) => (
                <Task
                  key={id}
                  text={title}
                  check={Boolean(check)}
                  toggleCheck={() => toggleCheck(title, check)} 
                  edit={() => handleEdit(title)}
                  deleteTodo={() => deleteTodo(title)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#bcce96ff',
   backgroundColor: 'transparent',
  },

  scrollView: {
    //backgroundColor: 'white',
    marginHorizontal: 1,
  },
  footer: {
    flex: 1,
   // paddingBottom:125,
   paddingBottom: 90,
    backgroundColor: theme.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    //borderRadius:50,
    paddingTop: 15,
    paddingHorizontal: 20,
    opacity: 0.7,
},
  taskWrapper:{
    paddingTop:'10%',
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:25,
    //fontWeight:'bold',
    color: theme.text,
    marginTop:'2%',
    marginBottom:'2%',
   // textAlign: 'center',
  },
  sectionTitle2:{
    fontSize:25,
    paddingTop:5,
    fontWeight: 'bold',
    marginLeft:'3%',
    color: theme.text,
  },
  sectionTitle3:{
    fontSize:16,
    fontWeight: 'normal',
    marginLeft:'1%',
    color: theme.text,
  },
  items:{
    marginTop:'2%',
    paddingHorizontal:'2%',
  },
  writTaskWrapper:{
    marginTop:'1%',
    //bottom: '3%' ,
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
    borderColor:'#314f3dff',
    borderWidth:2,
    width:'85%',
    height:40,
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

});

 

