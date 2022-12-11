import './Contato.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

import { HiLocationMarker } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

const Contato = () => {

    return(
        <div className='contato'>
            <div className='contato-dados'>
                <h2 className='contato-dados__subtitulo'>Barbearia</h2>
                <h1 className='contato-dados__titulo'>Contato</h1>
                <div className='linha'></div>
                <div className='contato-dados__itens'>
                    <div className='contato-dados__item'>
                        <HiLocationMarker/><p className='item-contato'>Rua ou avenida, endereço completo.</p>
                    </div>
                    <div className='contato-dados__item'>
                        <BsTelephoneFill/><p className='item-contato'>(85) 9.9612.8272</p>
                    </div>
                    <div className='contato-dados__item'>
                        <FiMail/><p className='item-contato'>nome@escritorio.com.br</p>
                    </div>
                </div>
                <div className='linha'></div>
                <h1 className='contato-dados__titulo'>Redes sociais</h1>
                <div className='contato-dados__redes-sociais'>
                    <a href='#'><FaFacebookSquare color='white' size={32}/></a>
                    <a href='#'><FaLinkedin color='white' size={32}/></a>
                    <a href='#'><FaInstagramSquare color='white' size={32}/></a>
                </div>
            </div>
            <div className='contato-talk'>
                <h2 className='contato-talk__subtitulo'>Sem compromisso</h2>
                <h1 className='contato-talk__titulo'>Fale conosco</h1>
                <form className='contato-talk__formulario'>  
                    <input className='contato-talk__nome' type='text' placeholder='Nome completo'></input>
                    <input className='contato-talk__numero' type='text' placeholder='Número'></input>
                    <input className='contato-talk__email' type='text' placeholder='E-mail'></input>
                    <input className='contato-talk__mensagem' type='text' placeholder='Mensagem'></input>
                    <input value='Enviar' type='submit' className='contato-talk__botao'></input>
                </form>
            </div>
        </div>
    )

}

export default Contato
