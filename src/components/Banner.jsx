import coffeeBanner from "../assets/images/banner.png";
import coffeeBlast from "../assets/images/coffee_blast.png";

export default function Banner() {
  return (
    <div className="relative mt-[10vh] flex flex-col items-center md:flex-row">
      <div className="flex order-1 justify-center md:w-1/2">
        <img
          className="w-[60%] h-[auto] object-contain"
          src={coffeeBanner}
          alt="Gooshe coffee"
        />
      </div>
      <div className="text-center ml-5 md:text-left p-4 md:w-1/2">
        <h2 className="text-2xl md:3xl lg:text-4xl text-amber-950 mb-5">
          Discover The Best Coffee
        </h2>
        <p className="text-sm md:text-base mr-60px lg:text-lg text-gray-600 mb-6">
          Bean Scene is a coffeee shop that provides you with quality coffee
          that helps boost your productivity and helps build mood. Having a cup
          of coffee is good. but having a cup of real coffee is great. There is
          no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <button
          className="mx-2 bg-white px-4 py-2 rounded-3xl text-gray-950 shadow-sm
          shadow-cream border-none"
        >
          Order Now
        </button>
      </div>
      <div className="absolute left-0 bottom-[-50px] md:bottom-[-100px]">
        <img className="w-[30vh] lg:w-[50vh]" src={coffeeBlast} />
      </div>
    </div>
  );
}
