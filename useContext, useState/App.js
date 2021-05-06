import { createContext, useContext,useState } from 'react';
import './App.css'

// data
const globalState = {
  title: 'O Título do contexto',
  body: 'O corpo do contexto',
  counter: 0
}; 
// criando o contexto 
const GlobalContext = createContext();

//componente Div 
const Div = ({children}) =>{
  return <> 
           <H1 />
           <P /> 
         </>; 
}; 

// compnente H1 
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {contextState: {title, counter}} = theContext; 
  return <h1>{title} : {counter}</h1>
}

const P = () => {
  const theContext = useContext(GlobalContext);
  // destruturação array 
  const {contextState: {body, counter},
        contextState,
        setContextState} = theContext; 
  return <p onClick = {() => setContextState({...contextState, counter: counter +1})}>{body}</p>
}

// App.js
function App() {
   const [contextState, setContextState] = useState(globalState); 
  return(
    <GlobalContext.Provider value ={{contextState, setContextState}}>
      <Div />
    </GlobalContext.Provider>
  )
}

export default App; 