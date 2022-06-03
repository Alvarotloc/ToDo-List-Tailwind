import Task from './Task';
import useTasks from '../hooks/useTasks';
import { ITasksProvider } from '../interfaces/index';
const TaskList = ():JSX.Element => {
    const {tasks}:ITasksProvider = useTasks();
  return (
    <div className="p-4 md:p-10 w-4/5 h-full overflow-y-scroll flex flex-col gap-7">
        <Task task='Comer papaia'/>
        {tasks.map((task:string,index:number) => <Task key={index} task={task}/>)}
    </div>
  )
}

export default TaskList