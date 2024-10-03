
// import React, { useEffect, useState } from 'react';
import { Header } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";
// import { Refs } from "./components/concepts/refs";
// import { Memorization } from "./components/concepts/memorization";
import { TasksProvider } from "./context/taskscontext";
import "./styles/global.css";

// function App() {
//   const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     console.log("Executando a função do UseEffect...");

//     //componentWillUnmount => Cleanup function
//     return() =>{
//       console.log(
//         "Isso aqui vai ser executado quando o compontente App for desmontado da tela."
//       );
//     };
//   },[toggle]);

  //o useEffect será disparado sempre que alguma varíavel do Array de dependencias for alterada
  //por padrão, sempre o useEffect será disparado após a montagem do componente(componentDidMount)
 
  //useref
  function App() {
  return (
  <TasksProvider>
    <Header />
    <Tasks />
    </TasksProvider>
  );
}

export default App;
