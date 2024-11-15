
import Footer from "./Footer2";
// import Footer from "@/components/Footer2";
import Intro from "./Intro";
import { useEffect } from "react";
import Lenis from 'lenis';

export default function PagesFooter() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Footer />
    </main>
  );
}