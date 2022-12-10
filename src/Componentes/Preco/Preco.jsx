import './Preco.css'

const Preco = () => {

    return(
        <div className="preco">
            <div className="preco-desktop" id='preco'>
                <div className='preco-desktop__textos'>
                    <h1 className='preco-desktop__textos-titulo'>Preços</h1>
                    <h4 className='preco-desktop__textos-subtitulo'>Temos planos com preços ideais para você. Escolha o que se encaixar melhor em sua necessidade.</h4>
                </div>
                <div className='preco-desktop-cards'>
                    <div className='preco-desktop-card'>
                        <h4 className='preco-desktop-card__titulo'>Corte e barba</h4>
                        <div className='preco-desktop-card__preco-mes'>
                            <h1 className='preco-desktop-card__preco'>R$ 65,00</h1>
                            <h4 className='preco-desktop-card__mes'>/Mês</h4>
                        </div>
                        <h4 className='preco-desktop-card__descricao'>Cabelo e barba garantido durante todo o mês.</h4>
                        <button className='preco-desktop-card__botao'>Adquirir corte e barba</button>
                    </div>
                    <div className='preco-desktop-card-popular'>
                        <h4 className='preco-desktop-card__titulo'>Corte e barba</h4>
                        <div className='preco-desktop-card__preco-mes'>
                            <h1 className='preco-desktop-card__preco'>R$ 45,00</h1>
                            <h4 className='preco-desktop-card__mes'>/Mês</h4>
                        </div>
                        <h4 className='preco-desktop-card__descricao'>Corte de cabelo garantido durante todo o mês.</h4>
                        <button className='preco-desktop-card__botao-popular'>Adquirir pacote corte</button>
                    </div>
                    <div className='preco-desktop-card'>
                        <h4 className='preco-desktop-card__titulo'>Barba</h4>
                        <div className='preco-desktop-card__preco-mes'>
                            <h1 className='preco-desktop-card__preco'>R$ 40,00</h1>
                            <h4 className='preco-desktop-card__mes'>/Mês</h4>
                        </div>
                        <h4 className='preco-desktop-card__descricao'>Corte de barba garantido durante todo o mês.</h4>
                        <button className='preco-desktop-card__botao'>Adquirir pacote barba</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Preco
