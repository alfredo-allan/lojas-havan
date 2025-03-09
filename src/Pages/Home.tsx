import React from 'react';
import Header from '../Components/Header/Header';
import CategoryDetails from '../Components/CategoryDetails/CategoryDetails';
import Footer from '../Components/Footer/Footer';
import '../Pages/Style/HomePage.css'

interface HomeProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

const Home = ({ searchTerm, onSearch }: HomeProps) => {
    return (
        <div className='home'>
            <Header onSearch={onSearch} />
            <CategoryDetails searchTerm={searchTerm} />
            <Footer />
        </div>
    );
};

export default Home;
