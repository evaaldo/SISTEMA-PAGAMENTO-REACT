import './Localizacao.css'
import Mapa from './localizacao.png'

const Localizacao = () => {

    const link = 'https://www.google.com/maps/dir//Green+Barbearia+-+Rua+02,+15+A+-+Barroso,+Fortaleza+-+CE,+60863-435/@-3.8254042,-38.5160374,18.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7479d915ec60b:0x989a84f0a8eba87d!2m2!1d-38.5152279!2d-3.8253756'

    return (
        <div className='localizacao'>
            <div className='localizacao-desktop' id='localizacao'>
                <h1 className='localizacao-desktop__titulo'>Aonde atendemos?</h1>
                <h1 className='localizacao-desktop__subtitulo'>Estamos em Fortaleza-CE</h1>
                <a href={link} className='localizacao-desktop__descricao'>Green Barbearia, Rua 02, 15 A - Barroso, Fortaleza - CE, 60863-435</a>
                <img src={Mapa} alt='Localização da barbearia' className='mapa'></img>
            </div>
        </div>
    )

}

export default Localizacao
