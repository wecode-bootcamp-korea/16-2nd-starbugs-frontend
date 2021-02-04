import { useEffect } from "react";

export default function Bar() {
  let BarHandler = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    const progressBar = document.getElementById("progressBar");

    progressBar.style.transform = `scale(${scroll}, 1)`;
    progressBar.style.opacity = `${scroll}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", BarHandler);
  });
}
