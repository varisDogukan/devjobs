/**
 * Function to monitor window resize events and update a state based on the window width.
 *
 * This function sets up an event listener to monitor changes in the window size and
 * updates a state variable to indicate whether the window width is greater than or equal to
 * a specified size. It is useful for responsive design scenarios where components need to
 * adjust their behavior based on the window width.
 *
 * @param setBiggerThanSize - A React state setter function to update the boolean state indicating whether the window width is greater than or equal to the specified size.
 * @param size - The width threshold in pixels to compare against the window width.
 * @returns A cleanup function to remove the resize event listener.
 */
export default function checkResize(
  setBiggerThanSize: React.Dispatch<React.SetStateAction<boolean>>,
  size: number
) {
  const handleResize = () => {
    if (window.innerWidth >= size) {
      setBiggerThanSize(true);
    } else {
      setBiggerThanSize(false);
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}
