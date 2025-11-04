import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import customers from "../customers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import coffeeBlast from "../assets/images/coffee_blast.png";
import coffeeBlast2 from "../assets/images/coffee_blast-2.png";


export default function Customer() {
  return (
    <div className="relative my-6 p-5 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <div className="text-center my-8">
        <h4 className="text-4xl font-bold text-amber-900 mb-4">
          Our coffee perfection feedback
        </h4>
        <p className="text-gray-600 text-lg">
          our customers has amazing things to say about us
        </p>
        <div>
          <img
            src={coffeeBlast2}
            className="absolute right-0 top-[-100px] w-[30vh] lg:w-[60vh] lg:right-[-100px]"
          />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="swiper-container"
        >
          {customers.map((customer) => (
            <SwiperSlide key={customer.name}>
              <div className="flex flex-col items-center text-center border border-gray-200 rounded-lg bg-white p-8 shadow-sm">
                <p className="text-gray-700 italic">"{customer.review}"</p>
                <img
                  src={customer.img}
                  alt={customer.name}
                  className="w-24 h-24 rounded-full border-2 border-gray-400 my-8"
                />
                <p className="text-amber-800 font-bold text-lg my-3">
                  {customer.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <img
          src={coffeeBlast}
          className="absolute left-0 bottom-[-200px] w-[30vh] lg:w-[60vh] lg:left=[-99px]"
        />
      </div>
    </div>
  );
}
