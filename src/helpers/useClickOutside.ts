import { useEffect } from 'react';
import { MutableRefObject } from "react"

export const useClickOutside = (ref: MutableRefObject<null>, setIsModalOpen: (b: boolean) => void) => {
  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};