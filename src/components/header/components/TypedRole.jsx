import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TYPE_DELAY = 70;
const DELETE_DELAY = 35;
const HOLD_DELAY = 1800;
const NEXT_DELAY = 350;

/**
 * Types each role in turn, holds it, erases it, then moves to the next one.
 * The first role is shown in full on the first paint. Screen readers get the
 * complete list once instead of every keystroke, and visitors who prefer
 * reduced motion see only the first role.
 *
 * @param {Object} props Component properties.
 * @param {string[]} props.roles Role titles to cycle through, in order.
 * @param {boolean} [props.isActive=true] Whether the typing cycle may run.
 * @returns {React.ReactElement} The typed role text with an accessible label.
 */
const TypedRole = ({ roles, isActive = true }) => {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(roles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const role = roles[roleIndex];
  const canAnimate = isActive && !reducedMotion && roles.length > 1;

  useEffect(() => {
    if (!canAnimate) {
      return undefined;
    }
    let delay = TYPE_DELAY;
    let step = () => setLength(length + 1);
    if (!isDeleting && length === role.length) {
      delay = HOLD_DELAY;
      step = () => setIsDeleting(true);
    } else if (isDeleting && length === 0) {
      delay = NEXT_DELAY;
      step = () => {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      };
    } else if (isDeleting) {
      delay = DELETE_DELAY;
      step = () => setLength(length - 1);
    }
    const timer = window.setTimeout(step, delay);
    return () => window.clearTimeout(timer);
  }, [canAnimate, isDeleting, length, role.length, roleIndex, roles.length]);

  return (
    <>
      <span className="home__roles-label">{roles.join(', ')}</span>
      <span aria-hidden="true">{canAnimate ? role.slice(0, length) : roles[0]}</span>
    </>
  );
};

export default TypedRole;
