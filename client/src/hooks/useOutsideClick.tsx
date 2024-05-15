import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
};

/**
 * Custom hook to detect clicks outside of a specified element and trigger a callback function.
 *
 * This hook is useful for scenarios where you want to close a modal or dropdown
 * when a user clicks outside of the specified element. It adds an event listener
 * to the document that detects mouse clicks and checks if the click occurred outside
 * of the referenced element. If so, it invokes the provided callback function.
 *
 * @param object - An object containing the following properties:
 *   - `ref`: A React ref object pointing to the element to detect outside clicks for.
 *   - `callback`: A function to be called when a click outside of the referenced element is detected.
 */
export default function useOutsideClick({ ref, callback }: Props) {
  useEffect(() => {
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
