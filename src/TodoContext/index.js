import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {

        searchedTodos = todos

    } else {

        const searchText = searchValue.toLowerCase();

        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            return todoText.includes(searchText);
        });

    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos);
    };

    const toggleCompleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        todos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            toggleCompleteTodo,
            deleteTodo,
            openModal, 
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider };