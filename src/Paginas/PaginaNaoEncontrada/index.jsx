import { HiEmojiSad } from 'react-icons/hi'
import './styles.css'

const PaginaNaoEncontrada = () => {

    return(
        <div className='pagina-nao-encontrado'>
            <h2 className='pagina-nao-encontrada__erro'>ERROR 404</h2>
            <h1 className='pagina-nao-encontrado__titulo'>Página não encontrada!</h1>
            <HiEmojiSad size={100}/>
        </div>
    )

}

export default PaginaNaoEncontrada
