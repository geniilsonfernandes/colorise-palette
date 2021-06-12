import { useEffect, useState } from "react";

export const useScroll = (scroll) => {
  const [toScroll, setToScroll] = useState(false);

  function scrollListner() {
    if (window.scrollY >= scroll) {
      setToScroll(true);
    } else {
      setToScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  });

  return { toScroll };
};
