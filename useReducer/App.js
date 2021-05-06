import { useReducer } from 'react';
import './App.css'

// data
const globalState = {
  title: 'O Título do contexto ',
  body: 'O corpo do contexto',
  counter: 0
}

const reducer = (state, action) => {  
  switch (action.type) {
    case 'muda': 
      console.log('chamou muda')
      return { ...state, title: 'Mudou'};
    
    case 'inverter':
      console.log('chamou inverter');
      const {title} = state;
      return { ...state, title: title.split('').reverse().join('')}

    case 'dataHoje':
      return {...state, title: action.payload}  
  } 

  return{...state}; 
}



// App.js
function App() {
   const [state, dispatch ] = useReducer(reducer, globalState);
   const {counter, title} = state; 
  return(
    <div>
      <h1>
        {title}
        {counter}
      </h1>

      <button onClick = {() => dispatch({type: 'inverter'})}>INVERTER</button>
      <button onClick = {() => dispatch({type: 'muda'})}>Click</button>
      <button onClick = {() => dispatch({type: 'dataHoje', payload: new Date().toLocaleString('pt-BR'),})}>Data</button>
    </div>
  )
}

export default App; 