import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import PageLocation from './Components/PageLocation/PageLocation';
import Footer from './Components/Footer/Footer';

import './Style/Theme.css';

function App() {
  // const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="App">
      <Header />
      <PageLocation />
      <CategoryDetails />
      <Footer />


    </div>
  );
}


export default App;
