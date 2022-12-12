import './Preco.css'
import { FaCheckCircle } from 'react-icons/fa'
import React, { useState, useEffect, useRef } from 'react'

const Preco = () => {

    const [paid, setPaid] = useState(false)
    const [loaded, setLoaded] = useState(false)

    let paypalRef = useRef()

    const product = {
        price: 65.00,
        description: 'Cabelo e barba'
    }

    useEffect(() => {
        const script = document.createElement('script')
        const id = 'Ae629eqJyvA9eLFtv4wJWAmQ2ggM_IAsnAmTzYUaS0F-wUN3R42khxa9fr1_0-oy9yI2hcWGrrV4ajRH'
        script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

        script.addEventListener('load', () => setLoaded(true))

        document.body.appendChild(script)

        if(loaded) {
            function loadButtonsAndLogicAboutPayment() {
                setTimeout(() => {
                    window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                {
                                    description: product.description,
                                    amount: {
                                        currency_code: 'BRL',
                                        value: product.price
                                    }
                                }
                            ]
                            });
                        },
                        onApprove: async (_,actions) => {
                            const order = await actions.order.capture()

                            setPaid(true)

                            console.log(order)
                        }
                    })
                    .render(paypalRef)
                })
            }
            loadButtonsAndLogicAboutPayment()
        }
    })

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
                            <h1 className='preco-desktop-card__preco'>R$ {product.price},00</h1>
                            <h4 className='preco-desktop-card__mes'>/Mês</h4>
                        </div>
                        <h4 className='preco-desktop-card__descricao'>Cabelo e barba garantido durante todo o mês.</h4>
                        {paid ? (<div>
                            <h1 className='pagamento__texto'>Pagamento efetuado!</h1>
                        </div>) : (
                            <div className='pagamento'>
                                <div ref={v => (paypalRef = v)}></div>
                            </div>
                        )}
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
                <h1 className='preco-desktop__comparacao-titulo'>Compare os planos</h1>
                <div className='preco-desktop-comparacao__planos'>
                    <h2 className='preco-desktop__comparacao-plano'>Corte e barba</h2>
                    <h2 className='preco-desktop__comparacao-plano'>Corte</h2>
                    <h2 className='preco-desktop__comparacao-plano'>Barba</h2>
                </div>
                <div className='linha'></div>
                <div className='preco-desktop__comparacao-detalhes'>
                    <div className='preco-desktop__comparacao-detalhe'>
                        <p className='detalhe'><FaCheckCircle/> Corte o cabelo quantas vezes quiser</p>
                        <p className='detalhe'><FaCheckCircle/> Faça a barba quantas vezes quiser</p>
                        <p className='detalhe'><FaCheckCircle/> Presentes exclusivos</p>
                        <p className='detalhe'><FaCheckCircle/> Convidado VIP do mês de aniversário</p>
                        <p className='detalhe'><FaCheckCircle/> 10% de desconto em produtos e serviços</p>
                        <p className='detalhe'><FaCheckCircle/> 10% de desconto em consumo</p>
                        <p className='detalhe'><FaCheckCircle/> Sem taxa de adesão</p>
                        <p className='detalhe'><FaCheckCircle/> Sem contrato de fidalidade</p>
                        <p className='detalhe'><FaCheckCircle/> Pode usar assim que contratar o plano</p>
                        <p className='detalhe'><FaCheckCircle/> Sem taxa de anuidade</p>
                    </div>
                    <div className='preco-desktop__comparacao-detalhe'>
                        <p className='detalhe'><FaCheckCircle/> Corte o cabelo quantas vezes quiser</p>
                        <p className='detalhe'><FaCheckCircle/> Presentes exclusivos</p>
                        <p className='detalhe'><FaCheckCircle/> Convidado VIP do mês de aniversário</p>
                        <p className='detalhe'><FaCheckCircle/> 10% de desconto em produtos e serviços</p>
                        <p className='detalhe'><FaCheckCircle/> 10% de desconto em consumo</p>
                        <p className='detalhe'><FaCheckCircle/> Sem taxa de adesão</p>
                        <p className='detalhe'><FaCheckCircle/> Sem contrato de fidalidade</p>
                        <p className='detalhe'><FaCheckCircle/> Pode usar assim que contratar o plano</p>
                        <p className='detalhe'><FaCheckCircle/> Sem taxa de anuidade</p>
                    </div>
                    <div className='preco-desktop__comparacao-detalhe'>
                        <p className='detalhe'><FaCheckCircle/> Faça a barba quantas vezes quiser</p>
                        <p className='detalhe'><FaCheckCircle/> Presentes exclusivos</p>
                        <p className='detalhe'><FaCheckCircle/> Convidado VIP do mês de aniversário</p>
                        <p className='detalhe'><FaCheckCircle/> 10% de desconto em produtos e serviços</p>
                        <p className='detalhe'><FaCheckCircle/> 10% de desconto em consumo</p>
                        <p className='detalhe'><FaCheckCircle/> Sem taxa de adesão</p>
                        <p className='detalhe'><FaCheckCircle/> Sem contrato de fidalidade</p>
                        <p className='detalhe'><FaCheckCircle/> Pode usar assim que contratar o plano</p>
                        <p className='detalhe'><FaCheckCircle/> Sem taxa de anuidade</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Preco
