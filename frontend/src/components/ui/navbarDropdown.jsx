// components/PopoverCard.jsx


//should render dropdown in card, complex card, timeline, simple menu styles
export default function NavbarDropdown({children}) {

    return (
        <>
        {children}
            {/* <Popover
                width={100}
                opened
                position="bottom"
                offset={11}
            >
                <Popover.Target>
                    <div key={item.id} className="nav-item-wrapper">
                        <a key={item.id} className="nav-item" href={item.link}>
                            {item.id}
                            {item.dropdownType && (<IconChevronCompactDown stroke={1} className="nav-chevron" />)}
                        </a>
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text size="sm">Dropdown</Text>
                </Popover.Dropdown>

            </Popover> */}

        </>
    );
}