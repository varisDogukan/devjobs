import React from "react";

type Props = {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
};

export default function useOutsideClick({ ref, callback }: Props) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
