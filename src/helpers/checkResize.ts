export default function checkResize(
  setBiggerThanMobile: React.Dispatch<React.SetStateAction<boolean>>
) {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setBiggerThanMobile(true);
    } else {
      setBiggerThanMobile(false);
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}
