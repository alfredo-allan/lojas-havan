import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import Footer from './Components/Footer/Footer';
import './Style/Theme.css';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa

  // Função para atualizar o termo de pesquisa
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    // Quando o componente for montado, vamos bloquear a navegação para trás
    const handlePopState = (event: PopStateEvent) => {
      // Manipulando para que ao clicar no "voltar", o navegador permaneça na mesma página
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
    <div className="App">
      <Header onSearch={handleSearch} /> {/* Passa a função de pesquisa para o Header */}
      <CategoryDetails searchTerm={searchTerm} /> {/* Passa o termo de pesquisa para o CategoryDetails */}
      <Footer />
    </div>
  );
}

export default App;
