// import "./Home.css";
import Hero from "../Components/Hero/Hero";
import MiniHero from "../Components/miniHero/miniHero";
import CustomBanner from "../Components/CustomBanner/CustomBanner";
import FeaturedItems from "../Components/FeaturedItems/FeaturedItems";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <CustomBanner />
      <MiniHero />
      {/* <FeaturedItems /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
