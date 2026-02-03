// context/TodoContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Keyboard } from 'react-native';
import api from '../utils/api';
import { useTranslation } from 'react-i18next';



const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [date, setDate] = useState(new Date().toDateString());
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTodo, setEditTodo] = useState('');
  const [DailyTasks,setDailyTasks]= useState([]);
  const [generalTasks,setGeneralTasks]= useState([]);
  const [streak, setStreak] = useState(0);
  const [taskType, setTaskType] = useState('');
  const dateParts = date.split(' ');
  const day = dateParts[0];
  const formattedDate = dateParts.slice(1).join(' ');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [token, setToken] = useState('');


  const { t } = useTranslation();
  const clearTasks = () => setTasks([]);
  const loadTasks = async (taskType) => {
    setTaskType(taskType);
    try {
      const response = await api.get(`/api/todos/savedTodos`, { params: { type: taskType }});
      const loaded = response.data.tasks.map(e => [e.id, e.todo, e.check, e.count, e.type]);
      setTasks(loaded);
      setStreak(response.data.streak);
      setEmail(response.data.email);
      setUsername(response.data.username);
      console.log('response:', response.data);
      if(taskType==='D'){
        setDailyTasks(loaded);
      }else{
        setGeneralTasks(loaded);
      }
    } catch (error) {
      console.log('load error', error);
    }
  };


  const addTodo = (todo, taskType) => {
    if (tasks.some((array) => array.includes(todo)) || todo=='') {
      Alert.alert('Alert', 'You already have this task (;', [{ text: 'Ok' }]);
    } else {
      const newTodo= [
        new Date().getTime(),
        todo,
        false,
        0,
        taskType];
      Keyboard.dismiss();
      setTasks([...tasks, newTodo]);
      taskType=== 'D' ? setDailyTasks([...DailyTasks, newTodo]) : setGeneralTasks([...generalTasks, newTodo]);
      setTodo(null);
      try {
         api.post(`/api/addTodos`, {
          todo,
          check: false,
          count: 0,
          type: taskType,
        });
      } catch (err) {
        console.log('add error', err.message);
      }
    }
  };

  const deleteTodo = (d_todo) => {
    try {
      api.post(`/api/todos/delete`, { todo: d_todo });
      const newTasks = tasks.filter(([id, title]) => title !== d_todo);
      setTasks(newTasks);
      taskType==='D' ? setDailyTasks(newTasks) : setGeneralTasks(newTasks);

    } catch (error) {
      console.log('delete error', error.message);
    }
  };


  const update = (editingTodo, todo) => {
    const updatedTodo= tasks.map((item) => {
    if (item[1]==editingTodo){
      api.post(`/api/todos/update`,
      { 
        todoToEdit:editingTodo, 
        editedTodo:todo,
      })
      .catch(error => {console.log(error);})
      return [item[0], todo, item[2], item[3], item[4]];
    }
    return item
  });
  setTasks(updatedTodo);
  taskType==='D' ? setDailyTasks(updatedTodo) : setGeneralTasks(updatedTodo);
  setEditTodo('');
  setTodo('');
  };

  const toggleCheck = async (todo, currentCheck) =>  {
    try {
     const response = await api.post(`/api/todos/checked`,{todo:todo,todoCheck:!currentCheck})
     setStreak(response.data.streak);
     setTasks(prev =>
        prev.map(task =>
          task[1] === todo ? [task[0], task[1], !currentCheck, task[3], task[4]] : task
        )
      );
   (taskType === 'D' ? setDailyTasks : setGeneralTasks)(
  prev =>
    prev.map(task =>
      task[1] === todo
        ? [task[0], task[1], !currentCheck, task[3], task[4]]
        : task
    )
);
    } catch (err) {
      console.log('toggle error', err);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        date,
        day,
        formattedDate,
        tasks,
        setTasks,
        todo,
        setTodo,
        addTodo,
        deleteTodo,
        update,
        clearTasks,
        loadTasks,
        toggleCheck,
        DailyTasks,
        generalTasks,
        streak, 
        username,setUsername,
        email,
        token,setToken
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos  = () => useContext(TodoContext);
