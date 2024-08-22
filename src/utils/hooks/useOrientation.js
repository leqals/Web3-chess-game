import { useState, useEffect } from "react";

function useOrientation() {
  const [orientation, setOrientation] = useState(false);

  useEffect(() => {
    window.screen.orientation.lock("landscape").catch((e) => {
      console.error("Orientation lock failed:", e);
    });

    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return orientation;
}

export default useOrientation;