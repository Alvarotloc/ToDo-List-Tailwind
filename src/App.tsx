import Header from './components/Header';
import Sidebar from './components/Sidebar';
const App = () => {
  return (
    <main className='h-screen'>
      <Header />
      <div className='h-5/6 flex gap-5'>
      <Sidebar />
      </div>
    </main>
  )
}

export default App