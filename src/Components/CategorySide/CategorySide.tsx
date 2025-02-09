import React from "react";
import "./CategorySide.css";

interface Category {
    name: string;
    subcategories?: string[];
}

interface FilterOption {
    title: string;
    options: string[];
}


const categories: Category[] = [
    {
        name: "Informática",
        subcategories: [
            "Bateria externa",
            "Cabo HDMI",
            "Cabo Micro USB",
            "Câmera Webcam",
            "Carregador de Parede",
            "Fones de ouvido",
            "Fones de ouvido Bluetooth",
            "Headset",
            "Impressora",
            "Mochilas",
            "Mouse",
            "Mousepad",
            "Notebook",
            "Pen Drive",
            "Roteador",
            "Tablet",
            "Teclados",

        ]
    },
    // { name: "Construção Civil" },
    // { name: "Motores" },
    // { name: "Geradores" },
    // { name: "Motobombas" },
    // { name: "Picadores e Trituradores" },
    // { name: "Floresta e Jardim" },
    // { name: "Lavadoras e Aspiradores" },
    // { name: "Náutica" },
    // { name: "Drone Pulverizador" },
    // { name: "Ofertas" },
    // { name: "Tratores" },
];

const filters: FilterOption[] = [
    {
        title: "Partida",
        options: ["Elétrica", "Manual", "Elétrica e Manual"]
    },
    {
        title: "Combustível",
        options: ["Gasolina", "Diesel"]
    }
];

const CategorySide: React.FC = () => {
    return (
        <aside className="category-side">
            <div className="categories">
                <h3 className="category-title">Informática</h3>
                <hr className="divider" />
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        {/* <h4 className="category-name">{category.name}</h4> */}
                        {category.subcategories && (
                            <ul className="subcategory-list">
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <li key={subIndex} className="subcategory-item">
                                        {subcategory}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div className="filters">
                {filters.map((filter, index) => (
                    <div key={index} className="filter-section">
                        <h4 className="filter-title">{filter.title}</h4>
                        <ul className="filter-options">
                            {filter.options.map((option, optIndex) => (
                                <li key={optIndex} className="filter-option">
                                    <label>
                                        <input type="checkbox" name={option} /> {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default CategorySide;
