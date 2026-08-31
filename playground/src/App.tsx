import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

export default function App() {

  return (
    <div className='flex flex-col bg-zinc-950'>
      <Header />
      <div className='border-amber-300 flex justify-between'>
        <Sidebar side={"left"} />
        <Home />
        <Sidebar side={"right"} />
      </div>
    </div>
  )
}
