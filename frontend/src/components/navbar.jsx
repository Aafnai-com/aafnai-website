import { useEffect, useState } from "react";
import "../styles/components/navbar.css";
import { navLinks } from "../data/navbar";
import { Grid, Popover, Text } from "@mantine/core";
import { IconChevronCompactDown } from "@tabler/icons-react";
import NavbarDropdown from "./ui/navbarDropdown";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={scrolled ? "navbar scrolled" : "navbar top"} >
            <div className="navbar-container">
                <Grid align="center" style={{ width: "100%" }}>

                    <Grid.Col span={2} className="navbar-logo">
                        <a href="/" >
                            <img src="/assets/svg/logo-white.svg" alt="Aafnai Ads Logo" />
                        </a>
                    </Grid.Col>

                    <Grid.Col span={6} className="navbar-links">
                        <div className="nav-items">
                            {navLinks.map((item) => (
                                <NavbarDropdown linkName={item.id}>
                                    <div key={item.id} className="nav-item-wrapper">
                                        <span key={item.id} className="nav-item" >
                                            {item.id}
                                            {item.dropdownType && (<IconChevronCompactDown stroke={1} className="nav-chevron" />)}
                                        </span>
                                    </div>
                                </NavbarDropdown>
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
