import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);

CustomEase.create('genjutsu', '0.22, 1, 0.36, 1');

/**
 * Easing name shared by every Design Genjutsu animation.
 * Matches the CSS token `--ease-genjutsu` (cubic-bezier(0.22, 1, 0.36, 1)).
 *
 * @type {string}
 */
export const EASE = 'genjutsu';

/**
 * Animation durations in seconds, matching the CSS tokens
 * `--dur-fast`, `--dur-base` and `--dur-slow`.
 *
 * @type {{fast: number, base: number, slow: number}}
 */
export const DURATION = { fast: 0.25, base: 0.6, slow: 1.1 };

/**
 * Media query under which motion is allowed. Every effect is registered
 * through `gsap.matchMedia()` with this query so that visitors who prefer
 * reduced motion see the final, static layout.
 *
 * @type {string}
 */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, SplitText, useGSAP };
