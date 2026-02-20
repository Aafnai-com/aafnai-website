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
      {/* Clearly they do it for real companies */}

      <HeroSection />
      <HowWeDoIt />
      {/* ah. Theire approach looks interesting -- How we do it part...  Video ? Timeline ?*/}

      <PastClientsCarousel />
      {/* Do you own your ad account ?Do you want full control on whom your marketing agent is targeting? Get full access with aafnai */}
      {/* We are here to change the digital marketing doamin of Nepal via our services that no one is providing in nepal  because no one has the access that we have.*/}

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
