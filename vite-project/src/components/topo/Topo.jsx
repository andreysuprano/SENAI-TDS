import { useContext } from 'react';
import './style.css';
import { NavBarContext } from '../../App';

export default function Topo () {
    const context = useContext(NavBarContext);
    return(
        <div className="Navbar">
            <h1>Página selecionada: {context.rota}</h1>
        </div>
    )
}