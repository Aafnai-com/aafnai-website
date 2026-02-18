import HeroSection from "../components/landingPage/heroSection";
import PastClientsCarousel from "../components/landingPage/pastClientsCarousel";
import SecondaryCTA from "../components/landingPage/secondaryCTA";
import Testimonials from "../components/landingPage/testimonials";
import BlogsArticleSection from "../components/landingPage/blogsArticleSection";
import { Newsletter } from "../components/landingPage/newsletter";

export default function LandingPage() {
  return (
  <>
  
    <HeroSection />
    <PastClientsCarousel />
    <Testimonials />
    <BlogsArticleSection />
    <SecondaryCTA />
    <Newsletter />

    {/* Need a cost calculator section here or somewhere for the cost of advertising when spen a dollar in fb for certain days. */}

  </>
  );
}
