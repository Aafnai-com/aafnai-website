import HeroSection from "../components/landingPage/heroSection";
import PastClientsCarousel from "../components/landingPage/pastClientsCarousel";

import Testimonials from "../components/landingPage/testimonials";
import SecondaryCTA from "../components/ui/secondaryCTA";
import BlogsArticleSection from "../components/landingPage/blogsArticleSection";
import { Newsletter } from "../components/landingPage/newsletter";

export default function LandingPage() {
  return (
  <>
  
    <HeroSection />
    <PastClientsCarousel />
    <Testimonials />
    <SecondaryCTA />
    <BlogsArticleSection />
    
    <Newsletter />

    {/* Need a cost calculator section here or somewhere for the cost of advertising when spen a dollar in fb for certain days. */}

  </>
  );
}
