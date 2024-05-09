export default function checkResize(
  setBiggerThanMobile: React.Dispatch<React.SetStateAction<boolean>>,
  size: number
) {
  const handleResize = () => {
    if (window.innerWidth >= size) {
      setBiggerThanMobile(true);
    } else {
      setBiggerThanMobile(false);
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}
