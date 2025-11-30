import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Burgers() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger lineSize={10} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
export default Burgers;