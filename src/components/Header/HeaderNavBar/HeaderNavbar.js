import { Flex } from "@chakra-ui/react";

import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderButton from "./HeaderButton/HeaderButton";

export default function HeaderNavbar() {
  return (
    <Flex gap="30px" alignItems="center" height="inherit">
      <HeaderNav />
      <HeaderButton />
    </Flex>
  );
}
