import HeroSection from "../components/landingPage/heroSection";
import PastClientsCarousel from "../components/landingPage/pastClientsCarousel";

import Testimonials from "../components/landingPage/testimonials";
import SecondaryCTA from "../components/ui/secondaryCTA";
import BlogsArticleSection from "../components/landingPage/blogsArticleSection";
import { Newsletter } from "../components/landingPage/newsletter";
import HowWeDoIt from "../components/landingPage/howWeDoIt";

export default function LandingPage() {
  return (
  <>
  {/* I see they do what i am looking for */}
    <HeroSection />
    {/* Clearly they do it for real companies */}
    <HowWeDoIt />

    <PastClientsCarousel />
    {/* ah. Theire approach looks interesting -- How we do it part...  Video ? Timeline ?*/}
    
    <Testimonials />
    {/* looks like they could help with my specific needs. */}
    <BlogsArticleSection />
    {/* testimonials - people like them maybe i shold get in touch */}
    {/* strong supportive visuals */}
    {/* faces of the team */}
    {/* data and statiscics */}
    {/* depth deatail and related phrases */}
    {/* Final call to action */}
    <Newsletter />
    <SecondaryCTA />

    {/* Need a cost calculator section here or somewhere for the cost of advertising when spen a dollar in fb for certain days. */}

  </>
  );
}
