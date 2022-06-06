import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, deleteTodo, toggleComplete, type}) => {
  const getVisibleTodos = () => {
    switch (type) {
      case 'All':
        return todos.map((todo, i) => {
          return (
            <Todo
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              key={todo.todoIndex}
              todo={todo}
            />
          );
        });
      case 'Complete':
        return todos
          .filter(t => t.complete)
          .map((todo, i) => {
            return (
              <Todo
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                key={todo.todoIndex}
                todo={todo}
              />
            );
          });
      case 'Active':
        return todos
          .filter(t => !t.complete)
          .map((todo, i) => {
            return (
              <Todo
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                key={todo.todoIndex}
                todo={todo}
              />
            );
          });
    }
  };

  return <View>
    {
      getVisibleTodos()
    }
  </View>;
};

export default TodoList;
