import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Mainnews from "./Ui";

import { Grid, Heading } from "@chakra-ui/react";

const Navbutton = () => {

  const [savedItems, setSavedItems] = useState(
    JSON.parse(localStorage.getItem("savedItems")) || []
  );



  // Effect to update localStorage whenever savedItems change
  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }, [savedItems]);

  const handleSaveForLater = (item) => {
    setSavedItems((prevSavedItems) => [...prevSavedItems, item]);
  };
  
  const [data, setData] = useState(null);
  const { id } = useParams();
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=${id}&lang=en&country=in&max=10&apikey=1fec7bf701197cb46691803b74968413`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData(id); // Fetch data when the category changes
    }
  }, [id]);

  return (
    <>
      <Heading
        py={[1, 1, 1, 2]}
        fontSize={["3xl", "3xl", "5xl"]}
        color={"#fff"}
        fontFamily={"kalam"}
      >
        All News
      </Heading>

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
        {data &&
          data.articles.map((article) => (
            <Mainnews
              {...article}
              key={Math.random()}
              handleSaveForLater={handleSaveForLater}
            />
          ))}
      </Grid>
    </>
  );
};
export default Navbutton;
