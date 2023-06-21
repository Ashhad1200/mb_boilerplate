import React from "react";
import IntlMessages from "util/IntlMessages";
// import Greetings from "components/dashboard/Greetings";
import CardsStyle2 from "./cardData";

const Card2 = () => {
    return (
      <div>
        <h2 className="title gx-mb-4">
          {/* <IntlMessages id="sidebar.samplePage" /> */}
        <IntlMessages id="sidebar.aboutPage" />

        </h2>
  
        <div className="gx-d-flex justify-content-center">
          {/* <h4>Happy Coding! From Ashhad 2</h4> */}
          {/* <Greetings/> */}
          <CardsStyle2/>
        </div>
      </div>
    );
  };
  
  export default Card2;