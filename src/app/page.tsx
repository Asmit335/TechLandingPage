import Brand from "@/components/Brand";
import ContentManage from "@/components/ContentManage";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductFeatured from "@/components/ProductFeatured";

export default function Home() {
  return (
    <main>
      <Navbar />
      <hr />
      <HeroSection />
      {/* <Brand /> */}
      <Featured />
      <hr />
      <ProductFeatured />
      <ContentManage />
      <Footer />
    </main>
  );
}
