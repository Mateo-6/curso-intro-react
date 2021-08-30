import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>

      <TodoCounter />
      <TodoSearch />

      <TodoList>

        {loading && <p> Cargando </p>}
        {error && <p> Ha ocurrido un error inesperado </p>}
        {(!loading && searchedTodos.length < 1) && <p>No hay ToDo's</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <p>
            <TodoForm/>
          </p>
        </Modal>
      )}

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

    </>
  );
}

export { AppUI };

