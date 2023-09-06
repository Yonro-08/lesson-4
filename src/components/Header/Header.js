import { Container, Flex } from "@chakra-ui/react";

import MainLogo from "../MainLogo/MainLogo";
import HeaderNavbar from "./HeaderNavBar/HeaderNavbar";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Container maxW="88%" w="100%" height="inherit">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="inherit"
        >
          <MainLogo className="headerLogo" />
          <HeaderNavbar />
        </Flex>
      </Container>
    </header>
  );
}
