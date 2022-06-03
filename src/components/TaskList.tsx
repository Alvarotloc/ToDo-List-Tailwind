import Task from './Task';
const TaskList = ():JSX.Element => {
  return (
    <div className="p-4 md:p-10 w-4/5 h-full overflow-scroll grid gap-7">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
    </div>
  )
}

export default TaskList