import { Link as ChakraLink, Box, Text, Flex, Button, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Mainnews from "./Ui";
import { Link as ReactRouterLink } from "react-router-dom";


const Singlesave = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("savedItems")) || [];
    setItem(arr);
  }, []);

  return (
    <>    
    <Flex boxShadow="base" w="100%" justifyContent="flex-end">
    <ChakraLink as={ReactRouterLink} to="/category/general">
    <Button cursor="pointer" as="a" variant="ghost" my={5} w="100%">
      Back
    </Button>
    </ChakraLink>
    </Flex>
    <Grid
        margin={"auto"}
        width={"90%"}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
        ]}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
      {item.length === 0 ? (
        <Box >
          <Text fontSize={"2xl"} >Nothing Here. Just save your article and read it later</Text>
        </Box>
      ) : (
        <Box>
          {item?.map((el) => {
            return <Mainnews {...el} />;
          })}
        </Box>
      )}
    </Grid>
    </>
  );
};

export default Singlesave;
