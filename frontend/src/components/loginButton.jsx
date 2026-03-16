import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Stack, Divider } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";

function AuthModal({ opened, close }) {
  const handleGoogleLogin = () => {
    window.location.href = "/auth/google";
  };

  return (
    <Modal opened={opened} onClose={close} title="Authentication" centered>
      <Stack>

        <Button
          leftSection={<IconBrandGoogle size={18} />}
          variant="outline"
          fullWidth
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </Button>

        <Divider label="or continue with email" labelPosition="center" />

        {/* Email form can go here */}

      </Stack>
    </Modal>
  );
}

function LoginTrigger({ open }) {
  return (
    <Button
      size="sm"
      onClick={open}
      style={{
        backgroundColor: "#7d7ba0",
        color: "#010536",
        fontWeight: 700,
        borderRadius: 10,
        padding: "12px 28px",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      Login
    </Button>
  );
}


export default function LoginButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <AuthModal opened={opened} close={close} />
      <LoginTrigger open={open} />
    </>
  );
}