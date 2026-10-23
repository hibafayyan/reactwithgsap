import {
  FaBolt,
  FaShieldAlt,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";


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
 return(
   <section 
     id="about"
   className="min-h-screen bg-white py-28 md:py-36">
  <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

    {/* Left Content */}
    <div>
      <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
        About Us
      </p>

      <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
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
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
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
 )
}

export default Features;