import { createContext, useState } from 'react';
import type { IChildren } from '../interfaces/index';
const TasksContext = createContext<any>({});
const TasksProvider = ({children}:IChildren) => {
    const [tasks, setTasks] = useState<string[]>([]);
  return (
    <TasksContext.Provider value={{
        tasks,
        setTasks
    }}>
        {children}
    </TasksContext.Provider>
  )
}
export {TasksProvider};

export default TasksContext