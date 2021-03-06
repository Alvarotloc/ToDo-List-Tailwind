import { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import type { ITasksProvider, IAlertProps } from "../interfaces/index";
import Alert from "./Alert";
const Sidebar = (): JSX.Element => {
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const [tarea, setTarea] = useState<string>("");
  const [alert, setAlert] = useState<IAlertProps>({
    error: false,
    message: "",
  });

  const { tasks, setTasks }: ITasksProvider = useTasks();
  const {error,message} = alert;

  useEffect(() => {
    if(message !== ''){
    setTimeout(() => {
      setAlert({ error: false, message: "" });
    }, 3000);
  }
  }, [alert]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (tarea.trim().length === 0) {
      setAlert({ error: true, message: "Task cannot be empty" });
      return;
    }
    setTasks([...tasks, tarea]);
    setTarea("");
    setAlert({ error: false, message: "Task created succesfully" });
  };

  return (
    <>
      <aside
        className={`${
          isSideBarVisible ? "left-0" : "-left-96"
        } bg-purple-500 max-w-xs p-5 h-full md:w-80 absolute w-full md:static z-10 transition-all duration-500`}
      >
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <fieldset className="grid gap-8">
            <legend className="font-bold text-2xl mb-4 text-white">
              Create a Task
            </legend>
            {alert.message && (<Alert error={error} message={message}/>)}
            <div className="grid gap-2">
              <label
                htmlFor="task"
                className="font-semibold text-lg text-white"
              >
                Task
              </label>
              <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                name="task"
                id="task"
                placeholder="Insert Your Task Here"
                className="pl-2 py-2 border border-gray-400 rounded-lg w-full"
              />
            </div>
            <input
              type="submit"
              value="Create Task"
              className="px-5 py-2 text-white font-semibold bg-purple-800 hover:bg-purple-900 hover:cursor-pointer transition-colors rounded-lg"
            />
          </fieldset>
          <button
            type="button"
            className="text-white text-4xl mx-auto w-fit none block md:hidden"
            onClick={() => setIsSideBarVisible(false)}
          >
            &#215;
          </button>
        </form>
      </aside>
      <button
        type="button"
        className="absolute bg-white shadow rounded-full flex justify-center items-center h-16 w-16 hover:bg-slate-50 transition-colors left-5 top-[calc(50%+16px)]"
        onClick={() => setIsSideBarVisible(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
