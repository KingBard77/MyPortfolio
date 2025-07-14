import React, { useState, useEffect } from 'react';
import './gallery.css';

import photo1 from '../../assets/gallery/photo-1.jpg';
import photo2 from '../../assets/gallery/photo-2.jpg';
import photo3 from '../../assets/gallery/photo-3.jpg';
import photo4 from '../../assets/gallery/photo-4.jpg';
import photo5 from '../../assets/gallery/photo-5.jpg';
import photo6 from '../../assets/gallery/photo-6.jpg';
import photo7 from '../../assets/gallery/photo-7.jpg';
import photo8 from '../../assets/gallery/photo-8.jpg';
import photo9 from '../../assets/gallery/photo-9.jpg';
import photo10 from '../../assets/gallery/photo-10.jpg';
import photo11 from '../../assets/gallery/photo-11.jpg';
import photo12 from '../../assets/gallery/photo-12.jpg';
import photo13 from '../../assets/gallery/photo-13.jpg';

import { FaHeart, FaShareAlt, FaSearchPlus } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';


const images = [
    { src: photo1, title: 'Nature' },
    { src: photo2, title: 'Waves' },
    { src: photo3, title: 'Mountains' },
    { src: photo4, title: 'Portrait' },
    { src: photo5, title: 'Sky' },
    { src: photo6, title: 'Reflection' },
    { src: photo7, title: 'Greenery' },
    { src: photo8, title: 'Sunset' },
    { src: photo9, title: 'Lake View' },
    { src: photo10, title: 'Urban Light' },
    { src: photo11, title: 'Bloom' },
    { src: photo12, title: 'Winter Scene' },
    { src: photo13, title: 'Peaceful' },
];

const duplicatedImages = [...images, ...images];

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null);
    const [shareModal, setShareModal] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleZoom = (imgData) => setModalImage(imgData);
    const handleCloseImageModal = () => setModalImage(null);
    const handleShare = (imgData) => setShareModal(imgData);
    const handleCloseShareModal = () => {
        setCopied(false);
        setShareModal(null);
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    useEffect(() => {
        const escClose = (e) => {
            if (e.key === 'Escape') {
                setModalImage(null);
                setShareModal(null);
            }
        };
        window.addEventListener('keydown', escClose);
        return () => window.removeEventListener('keydown', escClose);
    }, []);

    return (
        <section id="gallery" className="gallery-section">
            <h5>My Physical Touch</h5>
            <h2 className="gallery-title">Gallery</h2>

            <div className="gallery-marquee">
                <div className="gallery-grid">
                    {images.map((img, idx) => (
                        <div key={idx} className="gallery-item">
                            <img src={img.src} alt={img.title} className="gallery-image" />
                            <div className="gallery-overlay">
                                <div className="gallery-text-container">
                                    <p className="gallery-text">{img.title}</p>
                                    <div className="gallery-icons">
                                        <FaHeart className="icon" />
                                        <FaSearchPlus className="icon" onClick={() => handleZoom(img)} />
                                        <FaShareAlt className="icon" onClick={() => handleShare(img)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔍 Image Modal */}
            {modalImage && (
                <div className="portfolio__popup open">
                    <div className="portfolio__popup-inner">
            <span className="portfolio__popup-close" onClick={handleCloseImageModal}>
              <AiOutlineClose />
            </span>
                        <p className="popup-title">{modalImage.title}</p>
                        <div className="pp__thumbnail">
                            <img src={modalImage.src} alt={modalImage.title} />
                        </div>
                    </div>
                </div>
            )}

            {/* 📤 Share Modal */}
            {shareModal && (
                <div className="portfolio__popup open">
                    <div className="portfolio__popup-inner share">
      <span className="portfolio__popup-close" onClick={handleCloseShareModal}>
        <AiOutlineClose />
      </span>

                        <p className="popup-title">{shareModal.title}</p>

                        <div className="popup-actions share-layout">
                            <p className="copy-description">Click below to copy image link:</p>

                            <div className="copy-wrapper">
                                <div className="copy-box">
                                    <code className="copy-url">{shareModal.src}</code>
                                    <button className="copy-icon-btn" onClick={() => copyToClipboard(shareModal.src)}>
                                        <MdContentCopy />
                                    </button>
                                </div>
                                {copied && <span className="copy-toast">Copied!</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </section>
    );
};

export default Gallery;