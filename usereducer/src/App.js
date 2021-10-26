import React, { useReducer, useState } from 'react'
import { reducerContact , initial } from './reducers/reducerContact'


function App() {
  const [state, dispatch] = useReducer(reducerContact, initial)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const addContact = (e) => {
    e.preventDefault()

    const contact = {
      id: Date.now(),
      name: name,
      email: email
    }

    setName('')
    setEmail('')

    dispatch({
      type: 'add',
      payload: contact,
    })
  }


  return (
    <div >
      <h1>useReducer Hooks</h1>
      <form onSubmit={addContact}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div><button>Add Contact</button></div>

      </form>
      <div>
        <ul>
          {state.map(contact => {
            return (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <div>
                  <button onClick={() => dispatch({ type: 'delete', payload: {id: contact.id}})}>Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
