import React, { useEffect, useState } from "react";
import axios from "axios";
import SimpleLoader from "../../components/SimpleLoader";
// import StudentCard from "./studentCard";
import CardStructure from "./CardStructure";
const CardData = () => {
    const [user, setUser] = useState([]);
    console.log(user)
    useEffect(() => {
      if (user.length < 1) {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            setUser(response.data);
            // console.log(response);
          });
      }
    });
    if (user == null || user.length < 1) {
      return (
        <SimpleLoader/>
      );
    }
    return(
  
      user.map((user)=><CardStructure user={user}/>)
       
      
       );
};
export default CardData;
