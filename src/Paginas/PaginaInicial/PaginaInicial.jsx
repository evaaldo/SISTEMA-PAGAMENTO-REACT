import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import Home from '../../Componentes/Home/Home'
import Localizacao from '../../Componentes/Localizacao/Localizacao'
import Preco from '../../Componentes/Preco/Preco'
import './PaginaInicial.css'

const PaginaInicial = () => {

    return(
        <div className="pagina-inicial">
            <Cabecalho/>
            <Home/>
            <Preco/>
            <Localizacao/>
        </div>
    )

}

export default PaginaInicial
