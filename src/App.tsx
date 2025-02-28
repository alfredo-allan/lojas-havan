import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import './Style/Theme.css';
import AppRoutes from './Routes/Routes';
import Home from './Pages/Home';  // Importando o Home

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa

  // Função para atualizar o termo de pesquisa
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    // Quando o componente for montado, vamos bloquear a navegação para trás
    const handlePopState = (event: PopStateEvent) => {
      window.history.pushState(null, '', window.location.href);
    };

    // Adiciona o listener para o evento popstate (back button)
    window.addEventListener('popstate', handlePopState);

    // Adiciona um estado para garantir que o usuário não possa navegar para trás
    window.history.pushState(null, '', window.location.href);

    // Cleanup, quando o componente for desmontado
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes searchTerm={searchTerm} onSearch={handleSearch} />
    </BrowserRouter>
  );
}

export default App;
