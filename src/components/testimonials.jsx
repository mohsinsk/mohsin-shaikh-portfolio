import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Working with him was an absolute pleasure. He quickly understood our requirements and delivered a robust solution ahead of schedule.",
    name: "Sufiyan Shaikh",
    role: "Client",
    img: "https://pagedone.io/asset/uploads/1696229954.png",
  },
  {
    id: 2,
    stars: 5,
    text: "He has an incredible ability to turn complex problems into simple, elegant solutions. Truly a reliable and skilled developer.",
    name: "Shahid Khan",
    role: "Client",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
  },
  {
    id: 3,
    stars: 5,
    text: "His attention to detail and clean coding practices made our application more stable and easier to maintain.",
    name: "Ammar Khan",
    role: "Client",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
  },
  {
    id: 4,
    stars: 4,
    text: "Great communication, deep technical knowledge, and a positive attitude — he’s a valuable asset to any team.",
    name: "Harsh p.",
    role: "Client",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
  },
  {
    id: 5,
    stars: 5,
    text: "From start to finish, he handled our project professionally and exceeded our expectations with his work.",
    name: "Shaikh Imran.",
    role: "Client",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
  },
];


export default function Testimonials() {


  return (
    <section className="py-12">
      <div className="relative mx-auto max-w-7xl px-2 md:px-4 pb-6 rounded sm:px-6 lg:px-8">
        {/* Heading + Buttons */}
        <div className="mb-10 flex flex-col min-h-20 justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <h2 className="text-4xl text-center tracking-tight text-balance font-semibold dark:text-white text-indigo-400 lg:text-left sm:text-5xl">
            Testimonials
          </h2>
          <div className="flex items-center justify-start lg:justify-start gap-10">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 dark:border-white transition-all duration-500 rounded-lg hover:bg-indigo-600"
              data-carousel-prev
            >
              <svg
                className="h-6 w-6 text-indigo-600 dark:text-white group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 dark:border-white transition-all duration-500 rounded-lg hover:bg-indigo-600"
              data-carousel-next
            >
              <svg
                className="h-6 w-6 text-indigo-600 dark:text-white group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

       
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={28}
          slidesPerView={3}
          style={{paddingBottom: 25}}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="group bg-white dark:bg-gray-900 border border-solid text-wrap border-gray-300 rounded-2xl p-6 h-auto transition-all duration-500 hover:border-indigo-600">
                {/* Stars */}
                <div className="flex mb-5">
                  {Array(t.stars)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-indigo-400 text-xl">
                        ★
                      </span>
                    ))}
                </div>

                {/* Text */}
                <p className="text-lg text-gray-500 leading-8 text-left min-h-28 h-34 transition duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                  {t.text}
                </p>

                {/* Profile */}
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-12 h-12 bg-gray-200 text-indigo-400 dark:bg-gray-700 dark:text-white font-bold text-xl rounded-full flex items-center justify-center">{t.name.charAt(0)}</div>

                  <div className="grid gap-1">
                    <h5 className="text-gray-900 dark:text-white font-medium group-hover:text-indigo-600">
                      {t.name}
                    </h5>
                    <span className="text-sm text-left leading-6 text-gray-500">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
