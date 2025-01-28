
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Formulario from './components/Formulario'
import AgendarCita from './components/AgendarCita'

function App() {

  return (
    <>
      <div className="bg-gray-100 app">
        <Routes>
          <Route path='/' element={<Formulario />} ></Route>
          <Route path='/agendar' element={<AgendarCita />} ></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
