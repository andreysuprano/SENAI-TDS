import './style.css';
import { useContext } from 'react';
import { NavBarContext } from '../../App';

export default function Navbar () {
    const context = useContext(NavBarContext);

    function navigate(nomeDaRota){
        context.setRota(nomeDaRota);
    }

    return(
        <div className="Navbar">
            <a >LOGO</a>
            <a onClick={()=>navigate('Home')}>HOME</a>
            <a onClick={()=>navigate('Contato')}>CONTATO</a>
        </div>
    )
}