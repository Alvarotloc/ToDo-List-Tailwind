const Sidebar = (): JSX.Element => {
  return (
    <aside className="bg-purple-500 max-w-xs p-5 h-full w-1/5">
      <form>
        <fieldset className="grid gap-8">
          <legend className="font-bold text-2xl mb-4 text-white">Create a Task</legend>
          <div className="grid gap-2">
            <label htmlFor="task" className="font-semibold text-lg text-white">Task</label>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="Insert Your Task Here"
              className="px-4 py-2 border border-gray-400 rounded-lg"
            />
          </div>
          <input
            type="submit"
            value="Create Task"
            className="px-5 py-2 text-white font-semibold bg-purple-800 hover:bg-purple-900 hover:cursor-pointer transition-colors rounded-lg"
          />
        </fieldset>
      </form>
    </aside>
  );
};

export default Sidebar;
