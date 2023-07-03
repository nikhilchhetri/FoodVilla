import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us">
      <h1>About:</h1>
      <h2>
        This is Foodvilla website replicating the front end of food delivery
        websites
      </h2>
      <Outlet />
    </div>
  );
};

export default About;
