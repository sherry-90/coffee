import ImageHero from "../assets/images/hero.png";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${ImageHero})` }}
      className="w-full h-[130vh] bg-cover bg-no-repeat relative flex justify-center items-center"
    >
      <div className="absolute backdrop-blur-sm top-2 left-28 lg:top-40 lg:backdrop-blur-0">
        <div>
          <h4>We've got your morning covered with</h4>
        </div>
        <div>
          <h2 className="text-cream text-4xl my-10">Coffee</h2>
        </div>
        <div>
          <p className="text-xl text-gray-200 my-10">
            It is best to start your day with a cup of coffee.
            <br />
            we provide the best for our customers
          </p>
        </div>
        <div>
          <button className="mx-2 bg-white px-4 py-2 rounded-3xl text-gray-950 shadow-sm shadow-cream border-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
