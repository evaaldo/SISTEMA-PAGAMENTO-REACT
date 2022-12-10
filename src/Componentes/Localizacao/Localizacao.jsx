import Mapa from '../Mapa/Mapa'
import './Localizacao.css'

const Localizacao = () => {

    return (
        <div className='localizacao'>
            <div className='localizacao-desktop' id='localizacao'>
                <h1 className='localizacao-desktop__titulo'>Aonde atendemos?</h1>
                <h1 className='localizacao-desktop__subtitulo'>Estamos em Fortaleza-CE</h1>
                <div className='mapa'><p>mapa</p></div>
            </div>
        </div>
    )

}

export default Localizacao
