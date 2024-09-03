import React from 'react'
import './global.css'
import Form from './Form'
import ToDoList from './ToDoList'

const App = () => {
  return (
    <>
      <article>
        <h1>TODO List</h1>
        <main>
          <Form/>
          <ToDoList/>
        </main>
      </article>
    </>
  )
}

export default App
