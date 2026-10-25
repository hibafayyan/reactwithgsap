import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const featureItems = [
  {
    id: 1,
    image: "/images/cards-1.png",
    title: "Organize Your Work Easily",
    description:
      "Keep your tasks organized and work together with your team in one simple workspace.",
    reverse: false,
  },
  {
    id: 2,
    image: "/images/cards-2.png",
    title: "Work Together Anywhere",
    description:
      "Stay connected with your team and make collaboration easier.",
    reverse: true,
  },
  {
    id: 3,
    image: "/images/cards-3.png",
    title: "Turn Your Ideas Into Action",
    description:
      "Plan your work, share ideas and move your projects forward.",
    reverse: false,
  },
];

function FeatureDetails() {

const sectionRef = useRef(null);
const imageRefs = useRef([]);
const textRefs = useRef([]);

// useGSAP(() => {
//   gsap.from(".feature-image, .feature-text", {
//     scale: 1.15,
//     opacity: 0,
//     duration: 0.9,
//     stagger: 0.15,
//     ease: "power2.out",

//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//   });
// }, { scope: sectionRef });


useGSAP(() => {

  imageRefs.current.filter(Boolean).forEach((image) => {

    gsap.from(image, {
      // z: -500,
      // scale: 1.7,
      // opacity: 0,
      // duration: 1,
      // stagger:0.5,
      // ease: "power3.out",

  //      y: 40,
  // scale: 1.12,
  // opacity: 0,
  // duration: 1,
  // ease: "power3.out",

  y: 40,
z: -100,
scale: 1.2,
opacity: 0,
duration: 1.2,
ease: "power3.out",

      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

  });

  textRefs.current.filter(Boolean).forEach((text) => {
  gsap.from(text, {
    z: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scale:1.2,

    scrollTrigger: {
      trigger: text,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

}, { scope: sectionRef });

  return (
    <section id="features" className="bg-white py-24 "
     ref={sectionRef}>
      <div className="container mx-auto px-6">

        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Features
          </h2>

          <p className="mt-4 text-gray-600">
            Discover features that make your work easier.
          </p>
        </div>


{/* Feature Rows */}
<div className="space-y-24">
  {featureItems.map((item,index) => (
    <div
      key={item.id}
      className={`flex flex-col items-center gap-10 md:flex-row ${
        item.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full overflow-hidden md:w-1/2 ">
        <img
         ref={(el)=>(imageRefs.current[index]=el)}
          src={item.image}
          alt={item.title}
         className="feature-image w-full"
        />
      </div>

      {/* Text */}
      <div 
      ref={(el)=>(textRefs.current[index]=el)}
       className="feature-text w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>


    </section>
  );
}

export default FeatureDetails;