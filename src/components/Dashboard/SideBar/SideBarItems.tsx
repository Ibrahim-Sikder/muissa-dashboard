import Link from "next/link";
import List from "@mui/material/List";
import { DrawerItem } from "@/types/common";
import { usePathname } from "next/navigation";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SideBarItems = ({ index, item }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();

  return item.child ? (
    <Accordion key={index} sx={{ boxShadow: 'none', background: '#121621', color: 'black' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <ListItemIcon sx={{ color: 'white' }}>{item.icon && <item.icon />}</ListItemIcon>
        <ListItemText primary={item.title} sx={{ ml: -3, color: 'white' }} />
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0, m: 0 }}>
        <List component="div">
          {item.child.map((subItem, subIndex) => {
            const subLinkPath = `/dashboard/${subItem.path}`;
            const isActive = pathName === subLinkPath;

            return (
              <Link href={subLinkPath} key={subIndex}>
                <ListItem
                  key={subIndex}
                  sx={{
                    p: 0,
                    m: 0,
                    color: 'white',
                    background: isActive ? '#00305C' : 'transparent',
                    "& svg": {
                      color: isActive ? "white" : 'inherit',
                    },
                  }}
                >
                  <ListItemButton sx={{ color: isActive ? 'white' : 'white' }}>
                    <ListItemText primary={subItem.title} sx={{ m: 0, color: isActive ? 'white' : 'white' }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  ) : (
    <Link href={linkPath} key={index}>
      <ListItem
        key={index}
        sx={{
          ...(pathName === linkPath
            ? {
              background: '#00305C',
              color: "white",
              "& svg": {
                color: "white",
              },
            }
            : {}),
        }}
      >
        <ListItemButton sx={{ color: pathName === linkPath ? 'white' : 'inherit' }}>
          <ListItemIcon sx={{ m: 0, color: 'white' }}>
            {item.icon && <item.icon sx={{ height: 25, width: 25 }} />}
          </ListItemIcon>
          <ListItemText primary={item.title} sx={{ m: -3, fontSize: 10, color: 'white' }} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItems;
