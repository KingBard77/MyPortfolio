// Section  Portfolio
import React, { useState } from 'react';
import './portfolio.css';

// Section Icon
import {
    AiOutlineClose,
    AiOutlineLeft,
    AiOutlineRight,
    AiFillYoutube,
    AiFillGithub
} from 'react-icons/ai';

// Import conf
import data_portfolio from './conf/data_portfolio';

// Import Component
import Portfolio_card from './component/portfolio_card';
import Portfolio_button from './component/portfolio_button';

const Portfolio = () => {
    const [item, setItem] = useState(data_portfolio);
    const [filteredItems, setFilteredItems] = useState(data_portfolio);
    const [currentItem, setCurrentItem] = useState(data_portfolio[0]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const allCategories = ['All', ...new Set(data_portfolio.map(item => item.category))];

    const filterItem = (curcat) => {
        setActiveCategory(curcat);
        const newItem = curcat === 'All' ? data_portfolio : data_portfolio.filter(val => val.category === curcat);
        setItem(newItem);
        setFilteredItems(newItem);
        setCurrentItem(newItem[0] || null);
    };

    const currentItemIndex = filteredItems.findIndex(i => i.id === currentItem?.id);

    const prevItem = () => {
        if (!filteredItems.length) return;
        const prevIndex = (currentItemIndex - 1 + filteredItems.length) % filteredItems.length;
        setCurrentItem(filteredItems[prevIndex]);
    };

    const nextItem = () => {
        if (!filteredItems.length) return;
        const nextIndex = (currentItemIndex + 1) % filteredItems.length;
        setCurrentItem(filteredItems[nextIndex]);
    };

    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <Portfolio_button
                filterItem={filterItem}
                menuItems={allCategories}
                activeCategory={activeCategory}
            />

            <Portfolio_card
                item={item}
                setCurrentItem={setCurrentItem}
                setIsPopupOpen={setIsPopupOpen}
            />

            {isPopupOpen && currentItem && (
                <div className='portfolio__popup open'>
                    <div className='portfolio__popup-inner'>
                        <div className='portfolio__popup-content'>
                            <span className='portfolio__popup-close' onClick={() => setIsPopupOpen(false)}>
                                <AiOutlineClose />
                            </span>

                            <div className='pp__thumbnail'>
                                <img src={currentItem.image} alt={currentItem.title} />
                            </div>

                            <div className='portfolio__popup-info'>
                                <div className='portfolio__popup-body'>
                                    <h3 className='details__title'>{currentItem.title}</h3>
                                    <p className='details__description'>{currentItem.description}</p>
                                    <ul className='details__info'>
                                        <li>Created - <span>{currentItem.created}</span></li>
                                        <li>Language - <span>{currentItem.language}</span></li>
                                        <li>Role - <span>{currentItem.role}</span></li>
                                        <li>
                                            <AiFillYoutube className='portfolio__button-icon' />
                                            {currentItem.youtube && currentItem.youtube !== 'Not Available' ? (
                                                <a href={currentItem.youtube} target='_blank' rel='noreferrer'>YouTube</a>
                                            ) : (
                                                <span className='link__na'>YouTube: Not Available</span>
                                            )}
                                        </li>
                                        <li>
                                            <AiFillGithub className='portfolio__button-icon' />
                                            {currentItem.github && currentItem.github !== 'Not Available' ? (
                                                <a href={currentItem.github} target='_blank' rel='noreferrer'>GitHub</a>
                                            ) : (
                                                <span className='link__na'>GitHub: Not Available</span>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='navigation'>
                                <div className='portfolio__controls'>
                                    <div className='prev__item' onClick={prevItem}>
                                        <AiOutlineLeft />
                                    </div>

                                    <div className='caption__content'>
                                        <div className='caption__text'>{currentItem.category}</div>
                                        <div className='caption__counter'>{currentItemIndex + 1} of {filteredItems.length}</div>
                                    </div>

                                    <div className='next__item' onClick={nextItem}>
                                        <AiOutlineRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;