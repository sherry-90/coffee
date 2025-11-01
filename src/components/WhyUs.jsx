import WhyImg1 from "../assets/images/why-1.png";
import WhyImg2 from "../assets/images/why-2.png";
import WhyImg3 from "../assets/images/why-3.png";
import WhyImg4 from "../assets/images/why-4.png";
import coffeeBlast from "../assets/images/coffee_blast-2.png";

export default function WhyUs() {
  return (
    <div className="relative">
      <div className="">
        <img
          src={coffeeBlast}
          className="absolute right-0 top-[-80px] w-[30vh] lg:w-[50vh]"
        />
      </div>
      <div className="my-5 p-5 max-w-6xl mx-auto">
        <div className="text-center p-4 ">
          <h2 className="text-4xl text-amber-950">Why are we different?</h2>
          <p className="text-sm text-gray-600 my-2">
            we don't make your coffee, we make your day!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-100">
            <img src={WhyImg1} />
            <h4 className="text-2xl text-amber-900 my-2">Supreme Beans</h4>
            <p className="text-gray-700 text-sm my-4">
              Beans that provides great taste
            </p>
          </div>
          <div className="bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-100">
            <img src={WhyImg2} />
            <h4 className="text-2xl text-amber-900 my-2">High Quality</h4>
            <p className="text-gray-700 text-sm my-4">
              We provide the highest quality
            </p>
          </div>
          <div className="bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-100">
            <img src={WhyImg3} />
            <h4 className="text-2xl text-amber-900 my-2">Extraordinary</h4>
            <p className="text-gray-700 text-sm my-4">
              Coffee like you have never tasted
            </p>
          </div>
          <div className="bg-[#fff9f1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-100">
            <img src={WhyImg4} />
            <h4 className="text-2xl text-amber-900 my-2">Affordable Price</h4>
            <p className="text-gray-700 text-sm my-4">
              Our coffee price are easy to afford
            </p>
          </div>
        </div>
        <div className="text-center p-4 my-1">
          <p className="text-gray-700 text-sm my-2">
            Great ideas start with great coffee, let's help you achieve that.
          </p>
          <h4 className="text-3xl text-amber-950 my-2">Get started today.</h4>
          <button className="mx-2 bg-white px-4 py-2 rounded-3xl text-gray-950 shadow-sm shadow-cream border-none my-2">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
}
