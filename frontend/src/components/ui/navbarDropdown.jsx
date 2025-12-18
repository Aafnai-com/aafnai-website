import { Popover, Text, Grid, Box, Stack } from "@mantine/core";
import { IconBuilding, IconCloud, IconBadgeAd, IconUsers , IconShare , IconMessageCircle, IconUsersCog } from "@tabler/icons-react";


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
      let a = show(dropdownData.children);
      contentToShow = (
        <Grid.Col span={12}>
          <div className="">
            <Text size="sm">{dropdownData.title}</Text>
            <Text size="sm">{dropdownData.description}</Text>

            <p>Efficiently manage deal flow</p>
          </div>
          <div className="tree">
            <div className="tree-item">
              <IconCloud stroke={2} />
              <h4>{dropdownData.children[0]?.name}</h4>
              <p>{dropdownData.children[0]?.description}</p>
            </div>

            <div className="tree-item">
              <IconUsers   stroke={2} />
              <h4>{dropdownData.children[1]?.name}</h4>
              <p>{dropdownData.children[1]?.description}</p>
            </div>

            <div className="tree-item">
              <IconBadgeAd stroke={2} />
              <h4>{dropdownData.children[2]?.name}</h4>
              <p>{dropdownData.children[2]?.description}</p>
            </div>

             <div className="tree-item">
              <IconUsersCog stroke={2} />
              <h4>{dropdownData.children[3]?.name}</h4>
              <p>{dropdownData.children[3]?.description}</p>
            </div>

          </div>

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
