import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./context/TasksProvider";
const App = () => {
  return (
    <TasksProvider>
      <main className="h-screen">
        <Header />
        <div className="h-5/6 flex justify-center">
          <Sidebar />
          <TaskList />
        </div>
      </main>
    </TasksProvider>
  );
};

export default App;
