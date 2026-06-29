"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Find Your Perfect Tutor",
    subtitle:
      "Connect with experienced tutors and start your personalized learning journey today.",
    image:
      "https://res.cloudinary.com/dsgnat4bt/image/upload/v1782692627/photo-1513258496099-48168024aec0_dfc81d.jpg",
  },
  {
    id: 2,
    title: "Learn Anytime, Anywhere",
    subtitle:
      "Book one-to-one sessions with expert tutors at your preferred time and pace.",
    image:
      "https://res.cloudinary.com/dsgnat4bt/image/upload/v1782692691/photo-1499750310107-5fef28a66643_zwhhza.jpg",
  },
  {
    id: 3,
    title: "Achieve Your Academic Goals",
    subtitle:
      "Boost your confidence, improve your skills, and succeed with professional guidance.",
    image:
      "https://res.cloudinary.com/dsgnat4bt/image/upload/v1782692682/photo-1622295023876-0cdf583c41f6_lwgtws.jpg",
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
                      <Chip
                        color="accent"
                        variant="solid"
                        className="mb-2 animate__animated animate__fadeInDown font-semibold"
                      >
                        Trusted Learning Platform
                      </Chip>

                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold max-w-2xl animate__animated animate__fadeInLeft">
                        {banner.title}
                      </h1>

                      <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-xl animate__animated animate__fadeInUp">
                        {banner.subtitle}
                      </p>

                      <Link href="/tutors">
                        <Button className="mt-6 cursor-pointer rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105">
                          Explore Tutors
                        </Button>
                      </Link>
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
