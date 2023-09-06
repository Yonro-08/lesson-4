import { Link } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react";

export default function HeaderNav() {
  return (
    <nav style={{ height: "inherit" }}>
      <List
        display="flex"
        gap="30px"
        alignItems="center"
        justifyContent="center"
        height="inherit"
      >
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="services">Services</Link>
        </ListItem>
        <ListItem>
          <Link to="about">About us</Link>
        </ListItem>
        <ListItem>
          <Link to="extraSales">Extra Salespage</Link>
        </ListItem>
      </List>
    </nav>
  );
}
