import { useState, createContext } from 'react'
import  NavBar  from './components/navbar/Navbar';
import  Topo  from './components/topo/Topo';
import './App.css'

export const NavBarContext = createContext();


function App() {
  const [rota, setRota] = useState('Home');

  return (
    <div>
      <NavBarContext.Provider value={{rota, setRota}}>
        <NavBar/>
        <Topo/>
      </NavBarContext.Provider>
    </div>
  )
}

export default App
