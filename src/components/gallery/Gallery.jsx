import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FiCamera, FiMaximize2, FiCopy, FiDownload } from 'react-icons/fi';

import SectionHeading from '../shared/SectionHeading';
import { useDialog } from '../shared/useDialog';

import galleryImages from './data/gallery';
import './gallery.css';

const ImageViewer = ({ initialIndex, onClose }) => {
  const [index, setIndex] = useState(initialIndex);
  const [copyStatus, setCopyStatus] = useState(null);
  const image = galleryImages[index];

  const navigate = (step) => {
    setIndex((previous) => (previous + step + galleryImages.length) % galleryImages.length);
    setCopyStatus(null);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(new URL(image.src, window.location.href).href);
      setCopyStatus({ error: false, message: 'Image link copied.' });
    } catch {
      setCopyStatus({
        error: true,
        message: 'Could not copy the link. You can open or save the original image below.',
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      event.stopPropagation();
      navigate(event.key === 'ArrowRight' ? 1 : -1);
    }
  };
  const dialogProps = useDialog({
    onClose,
    onKeyDown: handleKeyDown,
    fallbackFocusSelector: `[data-gallery-index="${initialIndex}"]`,
  });

  return createPortal(
    <dialog {...dialogProps} className="gallery-viewer" aria-labelledby="gallery-viewer-title">
      <div className="gallery-viewer__header">
        <div>
          <span>THE GALLERY</span>
          <h2 id="gallery-viewer-title">{image.title}</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Close photo viewer" autoFocus>
          <AiOutlineClose aria-hidden="true" />
        </button>
      </div>
      <div className="gallery-viewer__image">
        <img src={image.viewer} alt={image.title} decoding="async" />
      </div>
      <div className="gallery-viewer__footer">
        <div className="gallery-viewer__navigation">
          <button type="button" onClick={() => navigate(-1)} aria-label="Previous photo">
            <AiOutlineLeft aria-hidden="true" />
          </button>
          <span aria-live="polite">
            {String(index + 1).padStart(2, '0')} / {galleryImages.length}
          </span>
          <button type="button" onClick={() => navigate(1)} aria-label="Next photo">
            <AiOutlineRight aria-hidden="true" />
          </button>
        </div>
        <div className="gallery-viewer__actions">
          <button type="button" onClick={copyLink}>
            <FiCopy aria-hidden="true" />
            <span>Copy link</span>
          </button>
          <a
            href={image.src}
            download={`badrul-amin-${image.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
          >
            <FiDownload aria-hidden="true" />
            <span>Original</span>
          </a>
        </div>
      </div>
      {copyStatus && (
        <p
          className={`gallery-viewer__status${copyStatus.error ? ' gallery-viewer__status--error' : ''}`}
          role={copyStatus.error ? 'alert' : 'status'}
        >
          {copyStatus.message}
        </p>
      )}
    </dialog>,
    document.body,
  );
};

/**
 * Presents the original gallery collection in an animated masonry photo wall.
 *
 * @returns {React.ReactElement} The gallery and selected photo viewer.
 */
const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
      <div className="container gallery__container">
        <div className="gallery__heading">
          <SectionHeading
            id="gallery-title"
            eyebrow="Beyond the screen"
            title="A different"
            accent="Perspective"
            description="Moments, places, and details beyond the screen."
            icon={FiCamera}
          />
        </div>
        <div className="gallery__toolbar">
          <span>{String(galleryImages.length).padStart(2, '0')} PHOTOGRAPHS</span>
          <span>Choose a frame to explore</span>
        </div>
        <div className="gallery__wall">
          {galleryImages.map((image, index) => (
            <motion.figure
              className="gallery__frame"
              key={image.title}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: reducedMotion ? 0 : (index % 3) * 0.06 }}
            >
              <button
                type="button"
                className="gallery__photo"
                data-gallery-index={index}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${image.title} photo`}
              >
                <img
                  src={image.preview}
                  alt={image.title}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery__enlarge" aria-hidden="true">
                  <FiMaximize2 />
                </span>
              </button>
              <figcaption>
                <span>{image.title}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
      {selectedIndex !== null && (
        <ImageViewer initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}
    </section>
  );
};

export default Gallery;
