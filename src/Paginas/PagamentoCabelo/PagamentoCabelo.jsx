import './PagamentoCabelo.css'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const PagamentoCabelo = () => {

    const [paid, setPaid] = useState(false)
    const [loaded, setLoaded] = useState(false)

    let paypalRef = useRef()

    const product = {
        price: 45.00,
        description: 'Cabelo'
    }

    useEffect(() => {
        const script = document.createElement('script')
        const id = 'AbFV3tsrmKFE4Dc8SkWphnOcG3biYvXlN9QA1NG4vsGlTxCJ9ZtblCA2pq9qSRku-dbfHWc8Mw1q48gD'
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
        <div className='plano'>
            <Link className='plano__voltar' to='/'>Voltar</Link>
            <h1 className='plano__nome'>Tela de pagamento</h1>
            <div className='plano-container'>
                <h1 className='plano__titulo'>Pagamento do plano cabelo</h1>
                {paid ? (<div>
                            <h1 className='pagamento__texto'>Pagamento efetuado!</h1>
                        </div>) : (
                            <div className='pagamento'>
                                <div ref={v => (paypalRef = v)}></div>
                            </div>
                        )}
            </div>
        </div>
    )

}

export default PagamentoCabelo