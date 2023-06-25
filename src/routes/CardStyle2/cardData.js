import CardStructure from "./cardStructure.js";
import React, { useState, useEffect } from "react";
import userService from "../../appServices/userService.js";
import Medium from "../../components/dashboard/greetings.loader.js";
const CardsStyle2 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await userService.getUser();
      setUser(data);
    };

    fetchData();
  });

  if (user === null || user.length < 1) {
    return (
      <div>
        {/* <h1>Loading....</h1> */}
        <Medium/>
      </div>
    );
  }

  return (
    <div>
      {/* <ul> */}
      {user.map((userData) => (
        // <li key={userData.id}>{userData.name}</li>

        <CardStructure key={userData.id} userData={userData} />
      ))}
      {/* // </ul> */}
    </div>
  );
};

export default CardsStyle2;
