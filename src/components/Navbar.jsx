import React, { useEffect, useState } from "react";
import { Link as ChakraLink, Flex, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
  function handleSignOut() {
    localStorage.removeItem("token");
  }

  return (
    <Flex>
      <Flex pos="absolute" boxShadow="base" w="100%" justifyContent="flex-end">
        <ChakraLink as={ReactRouterLink} to="/category/general">
          <Button cursor="pointer" as="a" variant="ghost" my={5} w="100%">
            General
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/category/technology">
          <Button
            cursor="pointer"
            as="a"
            variant="ghost"
            pr={4}
            pl={4}
            my={5}
            w="100%"
          >
            Technology
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/category/sports">
          <Button as="a" variant="ghost" my={5} w="100%" cursor="pointer">
            Sports
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/category/health">
          <Button as="a" variant="ghost" my={5} w="100%" cursor="pointer">
            Health
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/save">
          <Button
            as="a"
            variant="ghost"
            pr={4}
            pl={4}
            my={5}
            w="100%"
            cursor="pointer"
          >
            Saved Article
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/">
          <Button
            as="a"
            variant="ghost"
            my={5}
            w="100%"
            cursor="pointer"
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
