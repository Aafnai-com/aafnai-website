import { useEffect, useState } from "react";
import "../styles/components/navbar.css";
import { navLinks } from "../data/navbar";
import { Grid } from "@mantine/core";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [opened , setOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={scrolled ? "navbar scrolled" : "navbar top"}>
            <div className="navbar-container">
                <Grid align="center" style={{ width: "100%" }}>

                    <Grid.Col span={2} className="navbar-logo">
                        <img src="/assets/svg/logo-white.svg" alt="Aafnai Ads Logo" />
                    </Grid.Col>

                    <Grid.Col span={6} className="navbar-links">
                        <div className="nav-items">
                            {navLinks.map((item) => (
                                <a key={item.id} className="nav-item" href={item.link}>
                                    {item.id}
                                </a>
                            ))}
                        </div>
                    </Grid.Col>

                    <Grid.Col span={4} className="navbar-actions-desktop" >
                        <h3>sign up</h3>
                        <h3>login</h3>
                    </Grid.Col>

                </Grid>
            </div>
        </div>
    );
}
