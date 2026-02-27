import { Avatar, Box, Group, Tooltip } from "@mantine/core";
import "../../styles/components/landingPage/heroSection.css";
import logo from "../../assets/default.png";
import clientsLogos from "../../assets/assetsDispenser";

export default function HeroSection() {
  const phoneNumber = "9779848001067";
  const message = "Hi Aafnai Team, I would like to book a free strategy call.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  let logos = Object.values(clientsLogos);
  let scrollingLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Grow Your Business with Smart Digital Advertisements
          </h1>

          <p>
            We have helped 30+ businesses with 700+ successful ad campaigns creating 10,000 + leads. Let us help you reach your ideal customers and grow your business with strategic digital advertising.
          </p>

          <div className="hero-buttons">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="primary-btn">
                Book Free Strategy Call
              </button>
            </a>

            <a href="/#/services">
              <button className="secondary-btn">
                Explore aafnai Services
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="booking-card">
            <h2>Launch your first Ad.</h2>
            <p>
              Target your ideal customers with precision. Start your business growth.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Order via WhatsApp
            </a>

            <a href="/#/services" className="services-link">
              View aafnai Services →
            </a>
          </div>
        </div>

      </div>
      <div className="hero-bottom">
        <h3 className="hero-bottom-text">Trusted by Leading Businesses</h3>
        <Box className="marquee">

          <Box className="marquee-track">
            {Object.entries(scrollingLogos).map(([key, value]) => (
              <Tooltip label={value.category}
                withArrow
                transition="fade"
                transitionDuration={200}
              >
                <Avatar
                  key={key}
                  src={"../../assets/" + value.src}
                  size={60}
                  radius="md"
                  className="hero-bottom-brandNames"
                />

              </Tooltip>
            ))
            }
          </Box>
        </Box>

      </div>
    </section>
  );
}
