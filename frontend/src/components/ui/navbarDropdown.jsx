import { Popover, Text, Grid, Box, Stack } from "@mantine/core";
import { IconBuilding, IconCloud, IconBadgeAd, IconUsers, IconShare, IconMessageCircle, IconUserCog, IconBuildings } from "@tabler/icons-react";
import { Link } from 'react-router-dom';

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
            <Text size="sm">
              How Aafnai Benefits You
            </Text>
            {dropdownData.children.map((item, index) => (

              <Grid.Col span={12} key={index} className="navbar-dropdown-card-simple" >
                <Link to={item.link} className="reactouter-link" key={index} >
                  <div className="navbar-dropdown-card-simple-name">
                    {item?.name}
                  </div>
                  <div className="navbar-dropdown-card-simple-description">
                    {item?.description}
                  </div>
                </Link>
              </Grid.Col>

            ))}

          </Grid>
        </Grid.Col>
      );
      break;

    case "services":
      dropdownWidth = 500;
      // let a = show(dropdownData.link);
      contentToShow = (
        <Grid.Col span={12}>
          <Link to={dropdownData.link} className="reactouter-link" >
            <div className="service-main-item">
              <div className="service-main-item-logo">
                <IconBuildings stroke={2} />
              </div>
              <div className="tree-item-texts">
                <h4>{dropdownData.title}</h4>
                <p>{dropdownData.description}</p>
              </div>
            </div>
          </Link>


          <div className="tree">
            <Link to={dropdownData.children[0]?.link} className="reactouter-link" >
              <div className="tree-item">
                <div className="tree-item-logo">
                  <IconCloud stroke={2} />
                </div>
                <div className="tree-item-texts">
                  <h4>{dropdownData.children[0]?.name}</h4>
                  <p>{dropdownData.children[0]?.description}</p>
                </div>
              </div>
            </Link>

            <Link to={dropdownData.children[1]?.link} className="reactouter-link" >
              <div className="tree-item">
                <div className="tree-item-logo">
                  <IconUsers stroke={2} />
                </div>
                <div className="tree-item-texts">
                  <h4>{dropdownData.children[1]?.name}</h4>
                  <p>{dropdownData.children[1]?.description}</p>
                </div>
              </div>
            </Link>

            <Link to={dropdownData.children[2]?.link} className="reactouter-link" >
              <div className="tree-item">
                <div className="tree-item-logo">
                  <IconBadgeAd stroke={2} />
                </div>
                <div className="tree-item-texts">
                  <h4>{dropdownData.children[2]?.name}</h4>
                  <p>{dropdownData.children[2]?.description}</p>
                </div>
              </div>
            </Link>

            <Link to={dropdownData.children[3]?.link} className="reactouter-link" >
              <div className="tree-item">
                <div className="tree-item-logo">
                  <IconUserCog stroke={2} />
                </div>
                <div className="tree-item-texts">
                  <h4>{dropdownData.children[3]?.name}</h4>
                  <p>{dropdownData.children[3]?.description}</p>
                </div>
              </div>
            </Link>
          </div>

        </Grid.Col>
      );
      break;

    case "resources":
      dropdownWidth = 500;
      contentToShow = (
        <Grid.Col className="navbar-dropdown-cards-container-col-simple" span={12}  >
          <Grid gutter={"lg"} >
            {dropdownData.children.map((item, index) => (
              <Grid.Col span={6} key={index} className="navbar-dropdown-card-simple" >
                <Link to={item.link} className="reactouter-link" key={index} >
                  <div className="navbar-dropdown-card-simple-name">
                    {item?.name}
                  </div>
                  <div className="navbar-dropdown-card-simple-description">
                    {item?.description}
                  </div>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      );
      break;
    
    case "company":
      dropdownWidth = 450;
      contentToShow = (
        <Grid.Col className="navbar-dropdown-cards-container-col-simple" span={12} >
          <Grid gutter={"md"} >
            {dropdownData.children.map((item, index) => (
              <Grid.Col span={6} key={index} className="navbar-dropdown-card-simple" >
                <Link to={item.link} className="reactouter-link" key={index} >
                  <div className="navbar-dropdown-card-simple-name">  
                    {item?.name}
                  </div>
                  <div className="navbar-dropdown-card-simple-description">
                    {item?.description}
                  </div>
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      );
      break;

    case "blogs":
      dropdownWidth = 0;
      contentToShow = null
      break;

    default:
      dropdownWidth = 300;
      contentToShow = (
        <Grid.Col span={12}>
          <Text size="sm">No content available</Text>
        </ Grid.Col>
      );
  }

  if (!contentToShow) {
    return (
      <Link to={dropdownData.link} className="reactouter-link">
        {children}
      </Link>
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
