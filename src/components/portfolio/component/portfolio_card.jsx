// Section Portfolio Card
import React from "react";

// Section Icon
import { BiChevronRight } from "react-icons/bi";

const Portfolio_card = ({ item, setCurrentItem, setIsPopupOpen }) => {
    if (!item || !Array.isArray(item)) {
        return <p className="error">No portfolio items found.</p>;
    }

    return (
        <div className="container portfolio__container">
            {item.map((Val) => (
                <article
                    key={Val.id}
                    className="portfolio__item"
                    onClick={() => {
                        setCurrentItem(Val);
                        setIsPopupOpen(true);
                    }}
                >
                    <div className="portfolio__item-image">
                        <img src={Val.image} alt={Val.title} />
                    </div>
                    <h3 className="portfolio__item-title">{Val.title}</h3>

                    <span className="portfolio__button">
                        Demo <BiChevronRight className="portfolio__button-icon" />
                    </span>
                </article>
            ))}
        </div>
    );
};

export default Portfolio_card;
