
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SaveTimeItem from "./SaveTimeItem";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const saveTimeItems = [
  {
    id: 1,
    image: "/images/cards-1.png",
    title: "Explore Your Team",
    description:
      "Bring your team together, share ideas and keep everyone connected while working on projects.",
  },
  {
    id: 2,
    image: "/images/cards-2.png",
    title: "Digital Whiteboard",
    description:
      "Organize your ideas visually, plan tasks and collaborate with your team in one place.",
  },
  {
    id: 3,
    image: "/images/cards-3.png",
    title: "Design To Development",
    description:
      "Turn your ideas into well-planned designs and move smoothly towards development.",
  },
];

const steps = [
  {
    id: "01",
    title: "Sign Up",
    description:
      "Create your account and bring your team together in one place.",
  },
  {
    id: "02",
    title: "Plan Your Work",
    description:
      "Organize your tasks, share ideas and plan your projects with your team.",
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Turn your ideas into action and move your projects forward.",
  },
];

function SaveTime() {
  const headRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none restart none",
      },
    });

    // Heading animation
    tl.from(headRef.current, {
      y: -35,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Three image items
    tl.from(
      cardsRef.current.children,
      {
        y: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Numbered steps
    tl.from(
      stepsRef.current.children,
      {
        y:-40,
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="save-time"
      className="bg-white py-24 md:py-32"
    >
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div
          ref={headRef}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Save Your Time with SoftLand
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Work together, organize your ideas and simplify your workflow.
          </p>
        </div>

        {/* Three Feature Items */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
        >
          {saveTimeItems.map((item) => (
            <SaveTimeItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Numbered Steps */}
        <div
          ref={stepsRef}
          className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 p-5"
        >
          {steps.map((step) => (
            <div
  key={step.id}
  className="save-time-step group rounded-2xl p-6 transition-colors duration-300 hover:bg-blue-800 hover:shadow-lg"
>
  <span className="text-4xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-200">
    {step.id}
  </span>

  <h3 className="mt-4 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
    {step.title}
  </h3>

  <p className="mt-3 leading-7 text-gray-600 transition-colors duration-300 group-hover:text-blue-100">
    {step.description}
  </p>
</div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SaveTime;
