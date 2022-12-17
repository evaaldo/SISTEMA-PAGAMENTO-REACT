import './Cabecalho.css'
import { FaBars, FaInstagram } from 'react-icons/fa'

const Cabecalho = () => {

    return(
        <div className="cabecalho">
            <div className='cabecalho-mobile'>
                <div className='cabecalho-mobile__topo'>
                    <FaBars size={40}/>
                    <h1 className='cabecalho-mobile__titulo'>Green</h1>
                    <a className='instaicon' href='https://www.instagram.com/barbearia_green2022/?next=%2F'><FaInstagram size={40}/></a>
                </div>
            </div>
            <div className="cabecalho-desktop">
                <h1 className="cabecalho-desktop__titulo">Green</h1>
                <div className="cabecalho-desktop__categorias">
                    <a href="#home" className="cabecalho-desktop__categoria">Home</a>
                    <a href="#preco" className="cabecalho-desktop__categoria">Preços</a>
                    <a href="#localizacao" className="cabecalho-desktop__categoria">Localização</a>
                    <a href="#contato" className="cabecalho-desktop__categoria">Contato</a>
                </div>
                <a href='https://www.instagram.com/barbearia_green2022/?next=%2F'><FaInstagram className='icon'/></a>
            </div>
        </div>
    )

}

export default Cabecalho