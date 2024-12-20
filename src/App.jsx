import { Routes, Route } from 'react-router'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import WinePairings from './pages/WinePairings'
import Recipes from './pages/Recipes'
import './App.css'

function App() {
  

  return (
    <>
     <Nav />
     <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/winepairings' element={<WinePairings />} />
      <Route path='/recipes/:query' element={<Recipes />} />
     </Routes>
    </>
  )
}

export default App
