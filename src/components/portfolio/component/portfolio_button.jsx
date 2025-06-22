// Section Portfolio Button
import React from "react";

const Portfolio_button = ({ filterItem, menuItems, activeCategory }) => {
    return (
        <div className="portfolio__filters">
            {menuItems.map((Val, id) => (
                <button
                    className={`portfolio__tab ${activeCategory === Val ? "active__portfolio" : ""}`}
                    onClick={() => filterItem(Val)}
                    key={id}
                >
                    {Val}
                </button>
            ))}
        </div>
    );
};

export default Portfolio_button;
