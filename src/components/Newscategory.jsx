import React, { useEffect  } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import axios from 'axios';


export const Newscategory = () => {
  const getUserData = async () => {
    try {
        await axios.post(
        "https://newsapp-kzzy.onrender.com/users/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log("error on sending the token in getUserData"+error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);


  return (
    <div>
      <Navbar/>
      <Outlet/>        
    </div>
  )
}