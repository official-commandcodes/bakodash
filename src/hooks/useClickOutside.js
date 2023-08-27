import { useEffect, useRef } from 'react';

export function useClickOutside({ openName, close, windowName }) {
  const ref = useRef();

  useEffect(() => {
    function handler(e) {
      if (e.target === ref.current) close();
      if (e.target !== ref.current) return;
    }

    if (openName === windowName) {
      document.body.addEventListener('click', handler, true);
    }

    return () => {
      document.body.removeEventListener('click', handler, true);
    };
  }, [openName, windowName, close]);

  return { ref };
}
