import { Component, Suspense, useEffect, useRef, useState } from 'react';

class SectionBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

/**
 * Loads a section near the viewport while keeping its hash target available.
 *
 * @param {Object} props Deferred section properties.
 * @param {string} props.id Existing section anchor identifier.
 * @param {string} props.label Accessible name while the section loads.
 * @param {number} props.minHeight Space reserved for the section, in pixels.
 * @param {React.ReactNode} props.children Lazy content without a duplicate section anchor.
 * @returns {React.ReactElement} The section content or its accessible loading shell.
 */
const DeferredSection = ({ id, label, minHeight, children }) => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(() => window.location.hash === `#${id}`);

  useEffect(() => {
    if (isReady) {
      return undefined;
    }
    if (!('IntersectionObserver' in window)) {
      setIsReady(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '1000px 0px' },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isReady]);

  const fallback = <div aria-busy="true" style={{ minHeight }} />;
  const errorFallback = (
    <div style={{ minHeight }}>
      <div className="container" role="alert">
        <h2>{label}</h2>
        <p>This section could not be loaded. Please reload the page to try again.</p>
        <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
          Reload page
        </button>
      </div>
    </div>
  );

  return (
    <section id={id} aria-label={label} ref={containerRef}>
      <SectionBoundary fallback={errorFallback}>
        {isReady ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
      </SectionBoundary>
    </section>
  );
};

export default DeferredSection;
