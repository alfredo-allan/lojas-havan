// src/Components/Layout/Layout.tsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
    children: React.ReactNode; // O conteúdo da página que será renderizado
    onSearch: (term: string) => void; // Definindo a prop onSearch
}

const Layout = ({ children, onSearch }: LayoutProps) => {
    return (
        <div className="page-layout">
            <Header onSearch={onSearch} /> {/* Passando onSearch para o Header */}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
