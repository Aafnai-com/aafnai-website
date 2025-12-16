import { Popover, Text, Grid } from "@mantine/core";

export default function NavbarDropdown({ children, linkName, dropdownData }) {
  const normalizedLinkName = linkName
    .toLowerCase()
    .replace(/\s+/g, "");

  function show(what) {
    console.log(what);
  }
  let contentToShow;
  let dropdownWidth;

  switch (normalizedLinkName) {
    case "aafnaifor":
      dropdownWidth = 300;
      contentToShow = (
        <Grid.Col className="navbar-dropdown-cards-container-col-simple" span={12} gap="md" >
          <Grid gutter={"md"} >
            {dropdownData.children.map((item, index) => (
              <Grid.Col span={12} key={index} className="navbar-dropdown-card-simple" >

                <div className="navbar-dropdown-card-simple-name">
                  {item?.name}
                </div>
                <div className="navbar-dropdown-card-simple-description">
                  {item?.description}
                </div>
              </Grid.Col>
            ))}
            <Text size="sm">
              Why choose Aafnai ?
            </Text>
          </Grid>
        </Grid.Col>
      );
      break;

    case "services":
      dropdownWidth = 400;
      let a = show();
      contentToShow = (
        <Grid.Col span={12}>
          <Text size="sm">Our Services:</Text>
          <ul>
            <li>Marketing</li>
            <li>SEO</li>
            <li>Ads Management</li>
          </ul>
          <Text size="sm">See all services</Text>
        </Grid.Col>
      );
      break;

    default:
      dropdownWidth = 300;
      contentToShow = (
        <Grid.Col span={12}>
          <Text size="sm">No content available</Text>
        </ Grid.Col>
      );
  }

  return (
    <Popover
      width={dropdownWidth}
      offset={30}
      withArrow
      withinPortal
      arrowPosition="side"
      arrowOffset={5}
      arrowSize={5}
      arrowRadius={10}
    >
      <Popover.Target>{children}</Popover.Target>

      <Popover.Dropdown>
        <Grid className="navbar-dropdown-wrapper">
          {contentToShow}
        </Grid>
      </Popover.Dropdown>
    </Popover>
  );
}
