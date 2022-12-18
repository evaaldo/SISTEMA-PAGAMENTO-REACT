import './Cabecalho.css'
import { FaBars, FaInstagram, FaWindowClose } from 'react-icons/fa'
import { useState } from 'react'

const Cabecalho = () => {

    const [style, setStyle] = useState('cabecalho-mobile__sidebar-hide')

    function styleAlter() {

        style === 'cabecalho-mobile__sidebar-hide' ? setStyle('cabecalho-mobile__sidebar-show') : setStyle('cabecalho-mobile__sidebar-hide')

    }

    return(
        <div className="cabecalho">
            <div className='cabecalho-mobile'>
                <div className='cabecalho-mobile__topo'>
                    <div className='cabecalho-mobile__topo-clicaveis'>
                        <FaBars size={40} onClick={styleAlter}/>
                        <h1 className='cabecalho-mobile__titulo'>Green</h1>
                        <a className='instaicon' href='https://www.instagram.com/barbearia_green2022/?next=%2F'><FaInstagram size={40}/></a>
                    </div>
                    <div className={style}>
                        <FaWindowClose size={30} onClick={styleAlter}/>
                        <h1 className='cabecalho-mobile__sidebar-titulo'>Categorias</h1>
                        <a href='#home' className='cabecalho-mobile__sidebar-categoria'>Home</a>
                        <a href='#preco' className='cabecalho-mobile__sidebar-categoria'>Preço</a>
                        <a href='#localizacao' className='cabecalho-mobile__sidebar-categoria'>Localização</a>
                        <a href='#contato' className='cabecalho-mobile__sidebar-categoria'>Contato</a>
                    </div>                    
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