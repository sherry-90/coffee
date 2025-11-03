import  Header from "./components/Header"
import Hero from "./components/Hero"
import Banner from "./components/Banner"
import Menu from "./components/Menu";
import WhyUs from "./components/WhyUs";
import CoffeeBanner from "./components/CoffeeBanner";
import customer from "./components/Customer"

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <Menu />
      <WhyUs/>
      <CoffeeBanner/>
      <customer/>
    </div>
  )
}
