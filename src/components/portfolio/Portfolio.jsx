import React, { useState, useEffect } from 'react';
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
import PortfolioButton from './component/portfolio_button';
import PortfolioCard from './component/portfolio_card';

const Portfolio = () => {
    const itemsPerPage = 6;
    const [item, setItem] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const allCategories = ['All', ...new Set(data_portfolio.map(item => item.category))];

    const paginateItems = (items, page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    };

    const filterItem = (curcat) => {
        setActiveCategory(curcat);
        setCurrentPage(1);
        const filtered = curcat === 'All'
            ? data_portfolio
            : data_portfolio.filter(val => val.category === curcat);

        const paginatedItems = curcat === 'All'
            ? paginateItems(filtered, 1)
            : filtered;

        setItem(paginatedItems);
        setFilteredItems(filtered);
        setCurrentItem(paginatedItems[0] || null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const paginatedItems = paginateItems(filteredItems, page);
        setItem(paginatedItems);
        setCurrentItem(paginatedItems[0] || null);
    };

    useEffect(() => {
        filterItem('All');
    }, []);

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

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (fullscreenImage) setFullscreenImage(null);
                else if (isPopupOpen) setIsPopupOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [fullscreenImage, isPopupOpen]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <PortfolioButton
                filterItem={filterItem}
                menuItems={allCategories}
                activeCategory={activeCategory}
            />

            <PortfolioCard
                item={item}
                setCurrentItem={setCurrentItem}
                setIsPopupOpen={setIsPopupOpen}
            />

            {/* Pagination */}
            {activeCategory === 'All' && totalPages > 1 && (
                <div className="portfolio__pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`pagination__btn ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

            {isPopupOpen && currentItem && (
                <div className='portfolio__popup open'>
                    <div className='portfolio__popup-inner'>
                        <div className='portfolio__popup-content'>
                            <span className='portfolio__popup-close' onClick={() => setIsPopupOpen(false)}>
                                <AiOutlineClose />
                            </span>

                            <div className='pp__thumbnail'>
                                <img
                                    src={currentItem.image}
                                    alt={currentItem.title}
                                    onClick={() => setFullscreenImage(currentItem.image)}
                                    className='clickable-image'
                                />
                                <p className="fullscreen__note">Click the image to view full screen</p>
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

            {/* Fullscreen Image Overlay */}
            {fullscreenImage && (
                <div className="fullscreen-img-overlay">
                    <span className="close-fullscreen" onClick={() => setFullscreenImage(null)}>
                        <AiOutlineClose />
                    </span>
                    <img src={fullscreenImage} alt="Full View" />
                </div>
            )}
        </section>
    );
};

export default Portfolio;
