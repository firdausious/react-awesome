import React, { useState } from 'react';
import PropTypes from 'prop-types'

import logo from './logo.svg';
import './App.css';

const ReactDemo = () => {
  const [username, setUsername] = useState('')

  const loggingIn = () => setUsername('Riza')

  const loggingOut = () => {
    setUsername('')
  }

  return (
    <div>
      <span>{username}</span>

      <br />
      <button onClick={loggingIn}>Login</button>
      <button onClick={loggingOut}>Logout</button>
    </div>
  )
}

const ListPeople = ({ peoples, a, b }) => (
  <div>
    <span>{a}</span>
    <span>{b}</span>
    <ul>
      {peoples.map((p, index) => <li key={index}>{p.name}</li>)}
    </ul>
  </div>
)

ListPeople.propTypes = {
  peoples: PropTypes.array.isRequired,
  a: PropTypes.number,
  b: PropTypes.number
}

const listPeople = [
    {
      name: 'Furqon',
      status: 'Single'
    },
    {
      name: 'Tya',
      status: 'Single'
    }
]

function App() {
  const [peoples] = useState(listPeople)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/ >

        <ReactDemo />
        <br />

        <ListPeople peoples={peoples} a={1} b={2} />
      </header>
    </div>
  );
}

export default App;
