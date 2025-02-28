import React from 'react';
import Header from '../Components/Header/Header';
import CategoryDetails from '../Components/CategoryDetails/CategoryDetails';
import Footer from '../Components/Footer/Footer';

interface HomeProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

const Home = ({ searchTerm, onSearch }: HomeProps) => {
    return (
        <div>
            <Header onSearch={onSearch} />
            <CategoryDetails searchTerm={searchTerm} />
            <Footer />
        </div>
    );
};

export default Home;
