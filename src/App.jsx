import './App.css'
import Index from './pages/Index'
import NavBar from './components/NavBar'
import About from './pages/About'
import New from './pages/New'
import Show from './pages/Show'
import Edit from './pages/Edit'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/bookmarks/:id" element={<Show />}/>
        <Route path="/bookmarks/:id/edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
