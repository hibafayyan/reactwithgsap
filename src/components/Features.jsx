
import {
  FaBolt,
  FaShieldAlt,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  {
    id: 1,
    icon: FaMobileAlt,
    title: "Easy to Use",
    description:
      "Enjoy a simple and intuitive interface designed to make your everyday tasks easier.",
  },
  {
    id: 2,
    icon: FaBolt,
    title: "Fast Performance",
    description:
      "Experience smooth performance and get things done without unnecessary delays.",
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: "Secure & Reliable",
    description:
      "Keep your information protected with a reliable and secure user experience.",
  },
  {
    id: 4,
    icon: FaPalette,
    title: "Modern Design",
    description:
      "Explore a clean, elegant design that makes every interaction enjoyable.",
  },
];

function Features() {
  const sectionRef = useRef(null);


useGSAP(() => {
  const section = sectionRef.current;
  const content = section.querySelector(".about-content");
  const cards = section.querySelectorAll(".feature-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      toggleActions: "restart none restart none",
    },
  });

  // Left content aur pehle 2 cards saath animate honge
  tl.from(content, {
    x: -70,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
  }, 0);

  tl.from(cards, {
    opacity:0,
    y:-55,
    autoAlpha: 0,
    duration: 1.5,
    stagger: 0.15,
    ease: "power2.out",
  }, 0);

}, { scope: sectionRef });
  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-white py-28 md:py-36"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

        {/* Left Content */}
        <div className="about-content">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            About Us
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl text-mist-600">
            Save Your Time and Enjoy a Better Experience
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Discover a smarter and simpler way to manage your daily tasks
            with a modern, intuitive and easy-to-use experience.
          </p>

          <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Read More
          </button>
        </div>

        {/* Right Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="feature-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="text-2xl text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;
