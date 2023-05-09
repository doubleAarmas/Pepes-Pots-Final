// import "./Home.css";
import Hero from "../Components/Hero/Hero";
import MiniHero from "../Components/miniHero/miniHero";
import CustomBanner from "../Components/CustomBanner/CustomBanner";
import FeaturedItems from "../Components/FeaturedItems/FeaturedItems";
import Newsletter from "../Components/Newsletter/Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <MiniHero />
      <CustomBanner />
      <FeaturedItems />
      <Newsletter />
    </div>
  );
}

export default Home;
