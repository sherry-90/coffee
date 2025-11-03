import image1 from "./assets/images/coffee-1.png";
import image2 from "./assets/images/coffee-2.png";
import image3 from "./assets/images/coffee-3.png";
import image4 from "./assets/images/coffee-4.png";

const coffeeMenu = [
  {
    id: 1,
    name: "Cappuccino Classic",
    image: image1,
    price: 3.5,
    ingredients: ["Espresso", "steamed milk", "milk foam"],
    description: "A timeless blend of bold espresso and creamy foam."
  },
  {
    id: 2,
    name: "Latte",
    image: image2,
    price: 4.5,
    ingredients: ["Espresso", "steamed milk"],
    description: "Smooth latte topped with beautiful milk art."
  },
  {
    id: 3,
    name: "Macchiato",
    image: image3,
    price: 4.25,
    ingredients: ["Espresso", "chocolate syrup", "steamed milk"],
    description: "Rich mocha with a chocolaty twist."
  },
  {
    id: 4,
    name: "Espresso",
    image: image4,
    price: 5.5,
    ingredients: ["Vanilla ice cream", "hot espresso"],
    description: "Italian dessert with espresso poured over ice cream."
  },
];
export default coffeeMenu;
