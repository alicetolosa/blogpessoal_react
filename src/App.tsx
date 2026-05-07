import { BrowserRouter as browserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

function App() {
 
  return (
  <> 
    <BrowserRouter>                                             {/*contêiner que habilita o roteamento */}
      <Navbar />

      <div className='min-h-[80vh]'>
        
        <Routes>      
          <Route path="/" element={<Login />} />{/* Define as rotas da aplicação */}                                            
          <Route path="/login" element={<Login />} />{/* Define as rotas da aplicação */}  
          <Route path="/home" element={<Home />} />            {/* Rota para a página Home */} 
          <Route path="/cadastro" element={<Cadastro />} />            {/* Rota para a página Home */}
          
        </Routes>
      </div>
      
      <Footer /> 
    </BrowserRouter>
  
  </>
  
  );
}
 
export default App



 