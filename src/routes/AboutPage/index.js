import React from "react";
import IntlMessages from "util/IntlMessages";
// import Greetings from "components/dashboard/Greetings";


const About = () => {
    return (
      <div>
        <h2 className="title gx-mb-4">
          {/* <IntlMessages id="sidebar.samplePage" /> */}
        <IntlMessages id="sidebar.aboutPage" />

        </h2>
  
        <div className="gx-d-flex justify-content-center">
          <h4>Happy Coding! From Ashhad</h4>
          {/* <Greetings/> */}
        </div>
      </div>
    );
  };
  
  export default About;