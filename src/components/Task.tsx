const Task = () => {
  return (
    <div className="p-5 h-36 bg-white shadow-md w-full rounded-md flex justify-between">
        <div className="flex gap-5 items-center">
        <input type="radio" />
        <h2 className="font-bold text-2xl">Comer papaia</h2>
        </div>
        <div className="grid gap-4">
            <button type="button" className="bg-blue-500 hover:bg-blue-600 uppercase transition-colors text-white px-8 rounded-md font-semibold">Editar</button>
            <button type="button" className="bg-red-500 hover:bg-red-600 uppercase transition-colors text-white px-8 rounded-md font-semibold">Eliminar</button>
        </div>
    </div>
  )
}

export default Task