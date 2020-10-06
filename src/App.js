import React, { useState } from 'react';

import { ChakraProvider, Image } from "@chakra-ui/core"

import ListPeople from './components/ListPeople'
import ReactDemo from './components/ReactDemo'
import logo from './logo.svg';
import './App.css';

import './promiseAsyncAwait'

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
      <ChakraProvider>
        <header className="App-header">
          <Image
            borderRadius="full"
            boxSize="150px"
            src={logo}
            alt="logo"
          />
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
      </ChakraProvider>
    </div>
  );
}

export default App;
