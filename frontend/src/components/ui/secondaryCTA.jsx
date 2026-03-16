import { Button } from "@mantine/core";
import "../../styles/components/ui/secondaryCTA.css";
import { Link } from "react-router-dom";


export default function SecondaryCTA() {
    return (
        <section className="secondayCTA">
            <div className="secondaryCTA-content">
                
                <h2>Your business won't grow if <span className="secondaryCTA-span">YOU </span>don't <span className="secondaryCTA-span">TAKE ACTION</span> !</h2>
                <p>Find your perfect customer who are ready to buy your products or services. Run targeted campaigns that convert. Use aafnai and grow.</p>
                <Link to="/services">
                    <Button
                        size="lg"
                        href="/#/services"
                        style={{
                            backgroundColor: "#FFFF00",   // yellow fill
                            color: "#010536",             // navy text
                            fontWeight: 700,
                            borderRadius: 10,
                            padding: "12px 28px",
                            fontFamily: "Nunito, sans-serif",
                            "&:hover": {
                                backgroundColor: "#FBFBF8", // lighter hover
                                color: "#010536",
                            },
                        }}
                    >
                        Take Action
                    </Button>
                </Link>

            </div>

        </section>
    );
}