import { Button } from "@chakra-ui/react";

export default function HeaderButton() {
  return (
    <Button
      bg="hsla(170, 69%, 40%, 1)"
      color="#FFF"
      padding="11px 16px"
      _hover={{ bg: "hsla(170, 69%, 40%, 0.7)" }}
    >
      Get your free guide now
    </Button>
  );
}
