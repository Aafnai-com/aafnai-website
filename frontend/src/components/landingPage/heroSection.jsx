import { Avatar, Box, Group } from "@mantine/core";
import "../../styles/components/landingPage/heroSection.css";
import logo from "../../assets/default.png";

export default function HeroSection() {
  const phoneNumber = "9779848001067";
  const message = "Hi Aafnai Team, I would like to book a free strategy call.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const logos = Array(10).fill(logo);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Grow Your Business with Smart Digital Advertisements
          </h1>

          <p>
            We help brands scale using data-driven Facebook & Google Ads,
            conversion-focused websites, and performance marketing strategies.
          </p>

          <div className="hero-buttons">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="primary-btn">
                Book Free Strategy Call
              </button>
            </a>

            <a href="/services">
              <button className="secondary-btn">
                Explore aafnai Services
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="booking-card">
            <h3>Book Your Free Strategy Session</h3>
            <p>
              Get a custom growth roadmap for your business. No obligation.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>

            <a href="/#/services" className="services-link">
              View aafnai Services →
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
       <Box className="marquee">
        <Box className="marquee-track">
          {[...logos, ...logos].map((item, index) => (
            <Avatar
              key={index}
              src={item}
              size={60}
              radius="md"
              className="hero-bottom-brandNames"
            />
          ))}
        </Box>
      </Box>
      
      </div>
    </section>
  );
}
