const Task = ({task}:{task : string}) => {
  return (
    <div className="p-5 h-36 bg-white shadow-md w-full rounded-md flex justify-between sm:gap-1">
      <div className="flex gap-5 items-center">
        <input type="radio" />
        <h2 className="font-bold text-lg md:text-2xl">{task}</h2>
      </div>
      <div className="grid gap-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 uppercase transition-colors text-white px-5 md:px-8 rounded-md font-semibold flex items-center justify-center md:justify-between"
        >
          <span className="hidden md:inline">Editar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 uppercase transition-colors text-white px-5 md:px-8 rounded-md font-semibold flex items-center justify-center md:justify-between gap-3"
        >
          <span className="hidden md:inline">Eliminar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Task;
