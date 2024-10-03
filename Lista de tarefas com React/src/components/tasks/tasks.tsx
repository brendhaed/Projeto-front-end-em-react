import { FormEvent,useContext,useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/taskscontext";

export const Tasks: React.FC = () =>{
    const [taskTitle, setTaskTitle] = useState("");
    const {tasks, setTasks} = useContext(TasksContext);
  
//função disparada quando o usuário está querendo adicionar uma nova tarefa
    function handleSubmitAddTask(event:FormEvent){
        event.preventDefault();

        if(taskTitle.length < 3){
        alert('Não é possível adicionar uma tarefa com menos de 3 letras. ')
        return;
    }

    //Adicione a tarefa 
    const newTasks = [
     ...tasks, //pega todas as tarefas que já existem e coloca nesse novo valor do estado de tarefas
         { id: new Date().getTime(), title:taskTitle, done: false },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
}
function handleToggleTaskStatus(taskId: number){
    const newTasks = tasks.map((task) =>{
        if(taskId === task.id) {
            return {
                ...task,
                done:!task.done,
            };
        }
        return task;
    });
    setTasks(newTasks);
}
//Utilizar o filter para remover a tarefa do array de tarefas
//function handle (taskId: string){}
    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor="task-title"> Adicionar Tarefa</label>
                    <input value={taskTitle} 
                    onChange={(event) => setTaskTitle(event.target.value)}
                    type="text" id="task-title" placeholder="Título da tarefa" />
                </div>
            <button type="submit">Adicionar Tarefa</button>
            </form>

            <ul>
                {tasks.map((task) => {
            return (
                <li key={task.id}>
                    <input type="checkbox" id={`task-${task.id}`} 
                    onChange={() => handleToggleTaskStatus(task.id)}/>
            
                    <label 
                    className={task.done ? styles.done : ""}
                    htmlFor={`task-${task.id}`}>
                    {task.title}
                    </label>
                    <button>Remover</button>
                </li>
            );

            })}
            </ul>
        </section>
    );
};