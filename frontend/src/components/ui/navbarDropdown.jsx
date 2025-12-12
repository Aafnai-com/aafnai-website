import { Popover, Text } from "@mantine/core";

export default function NavbarDropdown({ children, linkName }) {

    const dropdownContentMap = {
        aafnaifor: (
            <div>
                <Text size="sm">Aafnai for</Text>
                <ul>
                    <li>Marketing</li>
                    <li>SEO</li>
                    <li>Ads Management</li>
                </ul>
            </div>
        ),
        services: (
            <div>
                <Text size="sm">Our Services:</Text>
                <ul>
                    <li>Marketing</li>
                    <li>SEO</li>
                    <li>Ads Management</li>
                </ul>
            </div>
        ),
    }

    const contentToShow = dropdownContentMap[linkName.toLowerCase().replace(/\s+/g, "")] || (
        <Text size="sm">No content available</Text>
    );
    return (
        <Popover width={200} offset={30} withArrow withinPortal arrowPosition="side" arrowOffset={5} arrowSize={5} arrowRadius={10}>
            <Popover.Target>
                {children}
            </Popover.Target>
            <Popover.Dropdown>
                {contentToShow} {linkName}
            </Popover.Dropdown>
        </Popover>
    );
}
