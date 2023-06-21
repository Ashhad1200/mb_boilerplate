// import React, { useState, useEffect } from "react";
// import { Card } from "antd";
// import userService from "../../appServices/userService.js";
// // import axios from "axios";
import CardStructure from "./cardStructure.js";
// const CardsStyle2 = async () => {
//   const [user, setUser] = useState(null);
//   const data = await userService.getUser();
//   // useEffect(() => {
//     if (user.length < 1) {
//       setUser(data);
//     }
//   // });
//   if (user == null || user.length < 1) {
//     return (
//       <div>
//         <h1>Loading....</h1>
//       </div>
//     );
//   }
//   // return user.map((user) => <CardStructure user={user} />);
//   return(
//     <>

//     </>
//   );
// };
// export default CardsStyle2;

import React, { useState, useEffect } from "react";
import userService from "../../appServices/userService.js";

const CardsStyle2 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await userService.getUser();
      setUser(data);
    };

    fetchData();
  }, []);

  if (user === null || user.length < 1) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div>
      {/* <ul> */}
      {user.map((userData) => (
        // <li key={userData.id}>{userData.name}</li>

        <CardStructure key={userData.id} userData = {userData} />

      ))}
      {/* // </ul> */}
    </div>
  );
};

export default CardsStyle2;
