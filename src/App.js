// import logo from './logo.svg';
import { createContext, useReducer } from 'react';
import './App.css';
import Reducer, { initialstate } from './Reducer';
import ComponantA from './ComponantA';
import ComponantB from './ComponantB';
import ComponantC from './ComponantC'


export const CountContext = createContext()

function App() {
  const [count, dispatch] = useReducer(Reducer, initialstate)
  return (

    <div className="App">
      <h1>count -{count}</h1>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponantA />
        <ComponantB />
        <ComponantC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
