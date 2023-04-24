import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClickHandler(
  ref: React.RefObject<HTMLElement>,
  open: boolean,
  handleClose: () => void,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (open && ref.current && !ref.current.contains(event.target as Node)) {
        handleClose();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
}

interface IBasicMenu {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

export const BasicMenu = ({ children, open, handleClose }: IBasicMenu) => {
  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, open, handleClose);

  return (
    <div
      ref={wrapperRef}
      style={{
        display: open ? 'block' : 'none',
        position: 'absolute',
        top: '90px',
        left: '50px',
        backgroundColor: 'white',
        border: '2px solid green',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px gray',
        zIndex: 99999,
      }}
    >
      {children}
    </div>
  );
};
