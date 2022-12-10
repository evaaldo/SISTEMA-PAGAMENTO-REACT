import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import Home from '../../Componentes/Home/Home'
import Preco from '../../Componentes/Preco/Preco'
import './PaginaInicial.css'

const PaginaInicial = () => {

    return(
        <div className="pagina-inicial">
            <Cabecalho/>
            <Home/>
            <Preco/>
        </div>
    )

}

export default PaginaInicial
