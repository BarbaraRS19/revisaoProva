import {Link} from 'react-router-dom'; 

export default function Home(){
    return(
        <header>
        <nav>
            <ul>
<li><Link to="/busca-cep"><h1>Pesquisar um CEP</h1></Link></li>
    </ul>   
        </nav>
        </header>
    )
}