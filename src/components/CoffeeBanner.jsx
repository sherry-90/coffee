import img1 from "../assets/images/coffee_bean.png";
import img2 from "../assets/images/cup.png";
import img3 from "../assets/images/why-banner.png";

export default function CoffeeBanner() {
  return (
    <div
      className="relative w-full h-[300px] sm:h-[600px] lg:h-[400px] text-white flex justify-center items-center"
      style={{ backgroundImage: `url(${img3})` }}
    >
      <div
        className="absolute left-20 top-1/2 text-center transform -translate-y-1/2 sm:w-[70%] md:w-[50%]
      lg:w-[40%] p-5 sm:text-left"
      >
        <h4 className="text-xl sm:text-4xl text-white font-bold mb-4">
          Get a chance to have an Amazing morning
        </h4>
        <p className="text-xl sm:text-base text-gray-200 mb-6 ">
          We are giving you a one-time opportunity to experience a better life
          with coffee.
        </p>
        <button className="mx-2 bg-white px-4 py-2 rounded-3xl text-gray-950 shadow-sm shadow-cream border-none my-2">
          Order Now
        </button>
      </div>
      <img
        src={img1}
        className="absolute hidden sm:block right-0 bottom-0 w-[60vh] h-[68vh]"
        alt="coffee-beans"
      />
      <img
        src={img2}
        className="absolute hidden sm:block right-[120px] bottom-0 w-[35vh]"
        alt="cup"
      />
    </div>
  );
}
