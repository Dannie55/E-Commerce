// import MainEightSection from "../sections/MainEightSection";
// import MainFifthSection from "../sections/MainFifthSection";
import FlashSale from "../sections/FlashSale";
import CategorySection from "../sections/CategorySection";
import SellingSection from "../sections/SellingSection";
import FeaturedSection from "../sections/FeaturedSection";
import ServiceSection from "../sections/ServiceSection";
import ProductSection from "../sections/ProductSection";
import MainFirstSection from "../sections/MainFirstSection";
import MainFifthSection from "../sections/MainFifthSection";


const Home = () => {
  return (
    <main className="main">
      <MainFirstSection />
      <FlashSale />
      <CategorySection />
      <SellingSection />
      <ProductSection />
      <MainFifthSection />
      <FeaturedSection />
      <ServiceSection />
    </main>
  );
};

export default Home;
