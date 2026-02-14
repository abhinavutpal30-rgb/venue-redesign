import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CuratedVenues from "@/components/CuratedVenues";
import CelebrationMarquee from "@/components/CelebrationMarquee";
import HowItWorks from "@/components/HowItWorks";
import RealWeddings from "@/components/RealWeddings";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CuratedVenues />
      <CelebrationMarquee />
      <HowItWorks />
      <RealWeddings />
      <Testimonials />
      <WhyChooseUs />
      <CTASection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
