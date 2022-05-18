import { useState } from 'react'
import './App.css'
import Prueba from './components/Prueba'
import Login from './views/admin/Login'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Prueba />
      <Login />
    </div>
  )
}

export default App
