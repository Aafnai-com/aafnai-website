import HeroSection from "../components/landingPage/heroSection";
import PastClientsCarousel from "../components/landingPage/pastClientsCarousel";
import SecondaryCTA from "../components/landingPage/secondaryCTA";
import Testimonials from "../components/landingPage/testimonials";
import BlogsArticleSection from "../components/landingPage/blogsArticleSection";

export default function LandingPage() {
  return (
  <>
    <HeroSection />
    <PastClientsCarousel />
    <Testimonials />
    <BlogsArticleSection />
    <SecondaryCTA />
  </>
  );
}
