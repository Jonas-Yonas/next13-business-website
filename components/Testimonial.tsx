"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import { reviews } from "./data/data";

import { Swiper, SwiperSlide } from "swiper/react";

/** Swiper styles */
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const option = {
    slidesPerView: 1,
    spaceBetween: 25,
    autoplay: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };

  return (
    <div className="container px-5 py-20 mx-auto">
      <div>
        <h1 className="text-3xl md:text-2xl font-semibold">
          What do they say about us
        </h1>

        <p className="text-gray-500 text-base">
          Lost of comments about us, here's what they said.
        </p>
      </div>

      <div className="flex w-full py-10">
        <Swiper {...option} modules={[Pagination]} className="mySwiper">
          {reviews.map(({ id, name, image, rating, review }) => (
            <SwiperSlide key={id + name} className="p-4 w-full h-74">
              <div className="w-full h-full">
                <div className="bg-white p-4 h-full shadow-xl rounded-xl">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={image}
                      width={48}
                      height={48}
                      alt={name}
                      className="rounded-full w-14 h-14 object-cover"
                    />

                    <div className="flex justify-start items-center gap-2 md:flex-col md:flex-wrap lg:flex lg:flex-row">
                      <div className="flex text-[#fe5000] text-lg">
                        {Array(Math.ceil(rating))
                          .fill("")
                          .map((val, index) => (
                            <AiFillStar key={index} />
                          ))}
                      </div>

                      <p>{rating.toFixed(1)}</p>
                    </div>
                  </div>

                  <div className="w-full flex flex-grow flex-col gap-2 py-2">
                    <p className="text-xl font-semibold">{name}</p>
                    <span className="text-slate-500 text-sm leading-relaxed">
                      {review.slice(0, 155)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
