import { Container, Group, Text, Divider, Anchor } from "@mantine/core";
import "../styles/components/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ marginTop: "3rem" }}>
      <div className="footer-divider"></div>

      <Container size="lg" py="xl">
        <Group justify="space-between">
          <Link to="/" className="reactouter-link">
            <Text size="lg" fw={700} c="gray.1">
              Aafnai Ad Pvt. Ltd.
            </Text>
          </Link>


          <Group gap="md">
            <Anchor href="/" size="sm" underline="hover">
              Home
            </Anchor>
            <Anchor href="/aboutus" size="sm" underline="hover">
              About
            </Anchor>
            <Anchor href="/contact" size="sm" underline="hover">
              Contact
            </Anchor>
          </Group>
        </Group>

        <Text size="sm" c="dimmed" mt="md" ta="center">
          © 2021 - {new Date().getFullYear()}
          <Link to="/" className="footer-link">
            {". "}Aafnai Ad Pvt. Ltd.
          </Link>
          {" "} All rights reserved through Office of Company Registration, Nepal .
        </Text>

      </Container>
    </footer>
  );
}
