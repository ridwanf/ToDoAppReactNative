import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Button from './Button';
import Heading from './Heading';
import Input from './Input';
import TabBar from './TabBar';
import TodoList from './TodoList';

let todoIndex = 0;
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');
  // const [visibleTodos, setVisibleTodos] = useState([]);
  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) return;

    const todo = {
      title: inputValue,
      todoIndex,
      complete: false
    }

    todoIndex++
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    setInputValue('')

  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter(todo => todo.todoIndex !== index)
    setTodos(newTodos)
  }

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo) => {
      if(todo.todoIndex === index) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodos(newTodos)
  }

  const inputChange = text => { 
    setInputValue(text);
  };
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={text => inputChange(text)}
        />
        <TodoList 
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          type={type}
        />
        <Button submitTodo={submitTodo}/>
      </ScrollView>
      <TabBar type={type} setType={setType}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
