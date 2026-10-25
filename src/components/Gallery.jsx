
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Gallery.css";

const galleryImages = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
  "/images/s5.png",
  "/images/s6.png",
  "/images/s7.png",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-white py-20"
    >
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Gallery
        </h2>

        <p className="mt-4 text-gray-600">
          Explore the SoftLand app.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        slidesPerGroup={1}
        spaceBetween={25}
        loop={true}
        loopAdditionalSlides={7}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="gallery-swiper !overflow-visible !pb-12"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide
            key={image}
            className="!w-[165px] sm:!w-[190px] md:!w-[210px]"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Enlarge screenshot ${index + 1}`}
              className="block w-full cursor-zoom-in"
            >
              <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border-[7px] border-gray-900 bg-gray-900 p-1 shadow-xl">
                <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

                <img
                  src={image}
                  alt={`SoftLand app screenshot ${index + 1}`}
                  className="h-full w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery image"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-5 top-3 text-4xl text-white"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Enlarged SoftLand screenshot"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
