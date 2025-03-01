// App.tsx
import React, { useState } from 'react';
import './App.css';
import './Style/Theme.css';
import AppRoutes from './Routes/Routes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return <AppRoutes searchTerm={searchTerm} onSearch={handleSearch} />;
}

export default App;
