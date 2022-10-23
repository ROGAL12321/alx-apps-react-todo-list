import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 1. Stworz formularz, ktory posiada pole title i guzik do submitowania formularza. (aby dodac zadanie do listy)
// 2. Stworz listę, która będzie przetrzymywała zadanie do wyswietlenia (tylko jedno)
// 3. przy uzyciu funkcji map, spraw zeby mozna bylo dodawac wiele zadan
// 4. dodaj hook useEffect i dane odczytuj i zapisuj do localStorage :)

// Zadanie domowe

// 5*. Zrob obsluge endpointa https://jsonplaceholder.typicode.com/todos do pobierania TODOS
// 6*. dodaj json-server i zrob obsluge API

function TodoList() {
  const [todoInputValue, setTodoInputValue] = useState('');
  // const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([]);
  const [currentTime, setCurrentTime] = useState(null);

  // useEffect - wbudowany hook do asynchronicznosci

  // przeznaczenie
  // 1. zapytania http
  // 2. ustawienie komponentow (timer, stoper, poczatkowa konfiguracja)

  // Opis
  // pusta tablica [] oznacza, ze funkcja odpali tylko tylko raz, po pierwszym renderze

  // useEffect(() => {
  //   getTime(); // pierwsze wywolanie (zeby nie bylo opoznienia)
  //   // setInterval odpala sie co sekunde
  //   setInterval(() => {
  //     // co sekunde update czasu
  //     getTime();
  //   }, 1000)
  // }, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(!todos) return;
    setTodos(todos);
  }, [])

  const getTime = () => {
    // obiekt Date jest to wbudowany obiekt do obslugi dat
    const date = new Date();
    setCurrentTime(date.toString())
  }

  const handleTodoInputChange = event => {
    setTodoInputValue(event.target.value)
  }

  // 1. przy dodawaniu nowego todo, zapisz jego date stworzenia pod kluczem createdAt
  // 2. Wyswietl date o ktorej task zostal dodany do listy przy kazdym zadaniu
  // 3. Jesli pole createdAt jest puste, to nie wyswietlaj zadnego tagu HTML

  const handleSubmit = event => {
    // MUST HAVE PRZY SUBMICIE
    event.preventDefault();

    // setTodoText(todoInputValue)

    const dateAdded = new Date();

    const newTodo = {
      id: uuidv4(),
      title: todoInputValue,
      createdAt: dateAdded.toString()
    }

    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))

    setTodoInputValue('')
  }

  const handleRemoveTodos = () => {
    setTodos([]);
    localStorage.removeItem('todos')
  }

  return (
    <div>
      <p>Todo List</p>
      {/* React dziala tak, ze jak element zwroci null, to go nie wyswietla */}
      {currentTime ? <p>{currentTime}</p> : null}
      {/* {currentTime && <p>{currentTime}</p>} */}
      <form onSubmit={handleSubmit}>
        <label>
          Task
          <input
            type="text"
            value={todoInputValue}
            onChange={handleTodoInputChange}
          />
        </label>
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {todos.map(todo => {
          return (
            <li
              key={todo.id}
            >
              {todo.title}
              {todo.createdAt
                ? <span>| {todo.createdAt} </span>
                : null
              }
            </li>
        )})}
      </ul>
      {/* 2. Zrobic obsluge usuwania zadan z listy */}
      <button onClick={handleRemoveTodos}>Remove Todos</button>
    </div>
  )
}

export default TodoList;