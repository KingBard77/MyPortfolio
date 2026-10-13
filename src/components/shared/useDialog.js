import { useEffect, useRef } from 'react';

const scrollLocks = new WeakMap();
const focusableSelector = [
  'a[href]',
  'button',
  'input:not([type="hidden"])',
  'select',
  'textarea',
  'summary',
  '[tabindex]',
  '[contenteditable="true"]',
].join(', ');

const lockScroll = (body) => {
  const lock = scrollLocks.get(body) || { count: 0, overflow: body.style.overflow };
  lock.count += 1;
  scrollLocks.set(body, lock);
  body.style.overflow = 'hidden';

  return () => {
    lock.count -= 1;
    if (lock.count === 0) {
      body.style.overflow = lock.overflow;
      scrollLocks.delete(body);
    }
  };
};

/**
 * Manages a mounted native modal dialog and restores its trigger on unmount.
 *
 * Spread the returned props onto a dialog rendered for the lifetime of the modal.
 * Section handlers may add keyboard behavior or override Escape cancellation;
 * backdrop clicks always request closure through onClose.
 *
 * @param {Object} options Dialog behavior.
 * @param {Function} options.onClose Requests removal of the dialog.
 * @param {Function} [options.onCancel] Handles Escape instead of closing directly.
 * @param {Function} [options.onKeyDown] Runs before the shared Tab handler.
 * @param {string} [options.fallbackFocusSelector] Focus target if the trigger disappears.
 * @returns {import('react').DialogHTMLAttributes<HTMLDialogElement> &
 *   {ref: import('react').RefObject<HTMLDialogElement>}} Native dialog props and ref.
 */
export function useDialog({ onClose, onCancel, onKeyDown, fallbackFocusSelector }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return undefined;
    }
    const previousFocus = document.activeElement;
    dialog.showModal();
    const unlockScroll = lockScroll(document.body);

    return () => {
      dialog.close();
      unlockScroll();
      let target =
        previousFocus?.isConnected && previousFocus !== document.body ? previousFocus : null;
      if (!target && fallbackFocusSelector) {
        target = document.querySelector(fallbackFocusSelector);
      }
      target?.focus({ preventScroll: true });
    };
  }, [fallbackFocusSelector]);

  const handleCancel = (event) => {
    event.preventDefault();
    if (onCancel) {
      onCancel(event);
    } else {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    ) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.key !== 'Tab') {
      return;
    }
    const dialog = dialogRef.current;
    const controls = [...dialog.querySelectorAll(focusableSelector)].filter(
      (control) =>
        control.tabIndex >= 0 &&
        !control.matches(':disabled') &&
        !control.closest('[inert]') &&
        control.getClientRects().length > 0 &&
        window.getComputedStyle(control).visibility !== 'hidden',
    );
    if (controls.length === 0) {
      event.preventDefault();
      dialog.focus({ preventScroll: true });
      return;
    }
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return {
    ref: dialogRef,
    tabIndex: -1,
    onCancel: handleCancel,
    onClick: handleBackdropClick,
    onKeyDown: handleKeyDown,
  };
}
