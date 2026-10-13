import { gsap, SplitText, useGSAP, EASE, DURATION, MOTION_OK } from './gsap';

const START = 'top 85%';

const materialise = {
  autoAlpha: 0,
  y: 48,
  filter: 'blur(10px)',
};

const presets = {
  up(el) {
    gsap.from(el, {
      ...materialise,
      duration: DURATION.slow,
      ease: EASE,
      clearProps: 'filter',
      scrollTrigger: { trigger: el, start: START, once: true },
    });
  },

  stagger(el) {
    gsap.from(el.children, {
      ...materialise,
      y: 36,
      duration: DURATION.slow,
      ease: EASE,
      stagger: 0.09,
      clearProps: 'filter',
      scrollTrigger: { trigger: el, start: START, once: true },
    });
  },

  heading(el) {
    SplitText.create(el, {
      type: 'lines,words',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.words, {
          yPercent: 110,
          duration: DURATION.slow,
          ease: EASE,
          stagger: 0.06,
          scrollTrigger: { trigger: el, start: START, once: true },
        }),
    });
  },

  clip(el) {
    gsap.fromTo(
      el,
      { clipPath: 'inset(100% 0% 0% 0% round 2rem)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 2rem)',
        duration: DURATION.slow * 1.3,
        ease: EASE,
        scrollTrigger: { trigger: el, start: START, once: true },
      },
    );
  },

  parallax(el) {
    const speed = Number.parseFloat(el.dataset.speed ?? '0.15');

    gsap.fromTo(
      el,
      { yPercent: speed * 100 },
      {
        yPercent: speed * -100,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  },
};

/**
 * Names of the reveal presets understood by {@link useReveal}.
 *
 * - `up`: the element materialises (fade, rise and blur clearing) when it scrolls into view.
 * - `stagger`: each direct child materialises in turn.
 * - `heading`: the text is split into masked lines and the words rise into place.
 * - `clip`: the element is wiped in from the bottom with a rounded clip-path.
 * - `parallax`: the element drifts against the scroll; strength comes from `data-speed` (default `0.15`).
 *
 * @type {string[]}
 */
export const REVEAL_PRESETS = Object.keys(presets);

/**
 * Applies Design Genjutsu scroll reveals to every element inside `scope`
 * that carries a `data-reveal` attribute naming one of {@link REVEAL_PRESETS}.
 * Unknown names fall back to `up`.
 *
 * Effects only run when the visitor allows motion; with
 * `prefers-reduced-motion: reduce` the content stays in its final state.
 * All tweens, ScrollTriggers and SplitText instances are reverted when the
 * component unmounts.
 *
 * @param {import('react').RefObject<HTMLElement>} scope Ref to the section root element.
 * @returns {void}
 *
 * @example
 * const ref = useRef(null);
 * useReveal(ref);
 * return <section ref={ref}><h2 data-reveal="heading">About Me</h2></section>;
 */
export function useReveal(scope) {
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        scope.current.querySelectorAll('[data-reveal]').forEach((el) => {
          (presets[el.dataset.reveal] ?? presets.up)(el);
        });
      });
    },
    { scope },
  );
}
