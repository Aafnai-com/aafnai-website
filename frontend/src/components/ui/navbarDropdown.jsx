import { Popover, Text } from "@mantine/core";

export default function NavbarDropdown({ children, linkName}) {
  return (
    <Popover width={200}  offset={30} withArrow withinPortal arrowPosition="side" arrowOffset={5} arrowSize={5} arrowRadius={10}>
      <Popover.Target>
        {/* Make sure children is a single DOM element */}
        {children}
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">Dropdown content here {linkName}</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
