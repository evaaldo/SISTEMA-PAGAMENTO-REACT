import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import Contato from '../../Componentes/Contato/Contato'
import Home from '../../Componentes/Home/Home'
import Preco from '../../Componentes/Preco/Preco'
import Rodape from '../../Componentes/Rodape/Rodape'
import './PaginaInicial.css'

const PaginaInicial = () => {

    return(
        <div className="pagina-inicial">
            <Cabecalho/>
            <Home/>
            <Preco/>
            <Contato/>
            <Rodape/>
        </div>
    )

}

export default PaginaInicial
