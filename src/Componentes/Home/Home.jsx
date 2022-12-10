import './Home.css'
import Logo from './Logo.png'

const Home = () => {

    return(

        <div className="home" id='home'>
            <div className="home-desktop">
                <div className="home-desktop__textos">
                    <h4 className="home-desktop__subtitulo">CORTE CONOSCO</h4>
                    <h1 className="home-desktop__titulo">Cuidando da sua aparência do jeito que você gosta.</h1>
                    <h4 className="home-desktop__subtitulo">Temos diversos planos também para tornar a sua vinda melhor organizada.</h4>
                    <div className='home-desktop__botoes'>
                        <a href='.' className='home-desktop__botoes-ancora'>Fale conosco</a>
                        <a href='.' className='home-desktop__botoes-ancora nobg'>Ver nossos planos</a>
                    </div>
                    <h5 className='home-desktop__detalhes'>Temos a confiança dos nossos clientes e sempre recebemos o feedback de um serviço bem feito. Seja mais um a ficar feliz com a aparência também.</h5>
                </div>
                <div className='home-desktop__imagem'>
                    <img src={Logo} className='home-desktop__imagem-img' alt='logo da green'></img>
                </div>
            </div>
        </div>

    )

}

export default Home
