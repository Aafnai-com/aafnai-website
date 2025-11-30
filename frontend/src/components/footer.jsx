import { Container, Group, Text, Divider, Anchor } from "@mantine/core";

export default function Footer() {
  return (
    <footer style={{ marginTop: "3rem" }}>
      <Divider />

      <Container size="lg" py="xl">
        <Group justify="space-between">
          <Text size="lg" fw={700}>
            Aafnai Ad Pvt. Ltd.
          </Text>

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
          © {new Date().getFullYear()} Aafnai Ad Pvt. Ltd. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
