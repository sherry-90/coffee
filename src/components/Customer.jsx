import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import customers from "../customers";
import coffeeBlast from "../assets/images/coffee_blast.png";
import coffeeBlast2 from "../assets/images/coffee_blast-2.png";

export default function Customer() {
  return (
    <div className="">
      <div className="">
        <h4 className="">Customers Reviews</h4>
        <p className=""></p>
        <div>
          <img />
        </div>
      </div>
      <swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        Autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="swiper-container"
      >
        {customers.map((customer) => (
          <swiperSlide key={customer.name}>
            <div className="">
              <p className="">"{customer.review}"</p>
              <img className="" />
              <p>{customer.name}</p>
            </div>
          </swiperSlide>
        ))}
      </swiper>
      <div>
        <img />
      </div>
    </div>
  );
}
