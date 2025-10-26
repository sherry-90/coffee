import coffeeMenu from "../data";

export default function Menu() {
  return (
    <div className="my-20 p-5 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h4 className="text-2xl font-bold text-amber-900">
          Enjoy a new blend of coffee style
        </h4>
        <p className="text-gray-600">
          Explore all flavours of coffee with us. There is always a new worth
          experiencing.
        </p>
      </div>
      <div className="grid grid-col-2 sm:grid-col-3 lg:grid-col-4 gap-6">
        {coffeeMenu.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg relative pb-8 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover h-48 "
              />
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold text-amber-800">
                  {item.name}
                </h3>
                <p className="text-gray-900 mb-2 text-sm">
                  {item.ingredients.join(" + ")}
                </p>
                <p>{item.price.toLocaleString()} </p>
              </div>
              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-amber-950 text-white px-6 rounded-full hover:bg-amber-700 transition-colors">
                Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
