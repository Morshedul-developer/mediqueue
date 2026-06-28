"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { Chip } from "@heroui/react";

const banners = [
  {
    id: 1,
    title: "Summer Sale 2026",
    subtitle: "Up to 50% Off on Fashion & Electronics",
    image:
      "https://res.cloudinary.com/dsgnat4bt/image/upload/q_auto/f_auto/v1781959893/photo-1607082348824-0a96f2a4b9da_xjuwgi.jpg",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Latest trending products just for you",
    image:
      "https://res.cloudinary.com/dsgnat4bt/image/upload/v1782209044/photo-1580793241553-e9f1cce181af_zgwmox.jpg",
  },
  {
    id: 3,
    title: "Best Deals",
    subtitle: "Shop smart & save more every day",
    image:
      "https://res.cloudinary.com/dsgnat4bt/image/upload/q_auto/f_auto/v1781960007/photo-1556740749-887f6717d7e4_dqkaqj.jpg",
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full mb-0 md:mb-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full bg-cover bg-center flex items-center
              h-62.5 sm:h-75 md:h-112.5 lg:h-[91vh]"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="w-full h-full bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  {activeIndex === index && (
                    <>
                      <Chip color="warning" variant="primary" className="font-semibold mb-2 animate__animated animate__fadeInDown">
                        Exclusive Offer
                      </Chip>

                      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-2xl animate__animated animate__fadeInLeft">
                        {banner.title}
                      </h1>

                      <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl animate__animated animate__fadeInUp">
                        {banner.subtitle}
                      </p>

                      <button className="mt-6 bg-[#FBBF24] text-[#6C4F00] px-5 py-2 md:px-6 md:py-3 rounded-xl font-semibold hover:scale-105 transition cursor-pointer">
                        Shop Now
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
