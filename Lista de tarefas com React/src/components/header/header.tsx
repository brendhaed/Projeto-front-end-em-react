import { useContext} from "react";
import { StatsCard } from "../statscard/statscard";
import styles from "./styles.module.scss";
import {TasksContext} from "../../context/taskscontext";
// import { useState } from 'react';


export const Header: React.FC = () => {
    // const [estado, funcaoParaAlterarOEstado] = useState(0);
    const {tasks} = useContext(TasksContext);
    console.log("Header:", tasks);

    const totalTasks = tasks.length;
    const totalPending = tasks.reduce((total, task) =>{
        if(!task.done) return total + 1
        return total;
    }, 0);
    const totalDone = totalTasks - totalPending;

    return (
    <header className={styles.header}>
    <div className={styles.container}>
     <div>
      <h1>My Todo</h1>
      <span>Bem vinda, Brendha!</span>
    </div>

    <div>
        <StatsCard title="Total de tarefas" value={totalTasks}/>
        <StatsCard title="Tarefas pendentes" value={totalPending}/>
        <StatsCard title="Tarefas Concluídas" value={totalDone}/>

    </div>
    </div>
    </header>
    );
    


};