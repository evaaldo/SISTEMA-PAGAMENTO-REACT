import PaginaInicial from './Paginas/PaginaInicial/PaginaInicial';
import './EstilosGlobais/EstilosGlobais.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagamentoCabeloBarba from './Paginas/PagamentoCabeloBarba/PagamentoCabeloBarba';
import PagamentoCabelo from './Paginas/PagamentoCabelo/PagamentoCabelo';
import PagamentoBarba from './Paginas/PagamentoBarba/PagamentoBarba';
import PaginaNaoEncontrada from './Paginas/PaginaNaoEncontrada';

function AppRoutes() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaInicial/>}></Route>
          <Route path='/PagamentoCabeloBarba' element={<PagamentoCabeloBarba/>}/>
          <Route path='/PagamentoCabelo' element={<PagamentoCabelo/>}/>
          <Route path='/PagamentoBarba' element={<PagamentoBarba/>}/>
          <Route path='*' element={<PaginaNaoEncontrada/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;
