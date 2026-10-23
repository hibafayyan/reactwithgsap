
import { Button } from "flowbite-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero() {
let rightRef=useRef(null);
let leftRef=useRef(null);


useGSAP(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: leftRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse",

    },
  });

  tl.from(leftRef.current, {
    x: -100,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
  });

  tl.from(
    rightRef.current,
    {
      z: -300,
      scale: 1.7,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
    },
    "<"
  );
});







  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-500 pt-28">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 md:flex-row">
        {/* Left div */}
        <div  ref={leftRef} className="w-1/2 text-white ">
          <h1 className="text-5xl font-bold">
            Promote Your App with SoftLand
          </h1>

          <p className="mt-4 text-lg">
            Discover a smarter way to manage your daily tasks with SoftLand.
            Simple, powerful, and designed to make your life easier.
          </p>

          <div className="mt-6 flex gap-4">
            <Button
  color="light"
  className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:!bg-blue-900 hover:!text-white"
>
  Google Play
</Button>

           <Button
  color="light"
  className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:!bg-blue-900 hover:!text-white"
>
  Google Play
</Button>
          </div>
        </div>

       
{/* Right div */}
<div ref={rightRef} className="relative flex w-1/2 items-center justify-center">

  <img
    src="/images/phone_1.png"
    alt="SoftLand app screen"
    className="relative z-10 w-48 md:w-56"
  />

  <img
    src="/images/phone_2.png"
    alt="SoftLand app preview"
    className="relative -ml-20 mt-12 w-48 md:w-56"
  />

</div>

      </div>
    </section>
  );
}

export default Hero;
