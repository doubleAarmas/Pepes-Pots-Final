// import "./Home.css";
import Hero from "../Components/Hero/Hero";
import MiniHero from "../Components/miniHero/miniHero";
import CustomBanner from "../Components/CustomBanner/CustomBanner";
import FeaturedItems from "../Components/FeaturedItems/FeaturedItems";

function Home() {
  return (
    <div>
      <Hero />
      <MiniHero />
      <CustomBanner />
      <FeaturedItems />
    </div>
  );
}

export default Home;
