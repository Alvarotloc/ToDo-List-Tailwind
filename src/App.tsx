import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
const App = () => {
  return (
    <main className="h-screen">
      <Header />
      <div className="h-5/6 flex justify-center">
        <Sidebar />
        <TaskList />
      </div>
    </main>
  );
};

export default App;
