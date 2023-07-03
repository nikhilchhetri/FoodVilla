import { Link } from "react-router-dom";
import Logo from "../assets/images/foodvilla.png";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import useOnline from "../../utils/useOnline";

const Title = () => (
  <Link to="/">
    <img data-testid="logo" className="w-20" alt="logo" src={Logo} />
  </Link>
);
const HeaderComponent = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between shadow-lg top-0 bg-white">
      <Title />
      <div className="">
        <ul className="flex p-5">
          <li className="p-2 italic">Welcome, {user.name}</li>
          <li className="p-2" data-testid="onlineStatus">
            {isOnline ? "✔️" : "❌"}
          </li>
          <li className="p-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li className="p-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-2">
            <Link className="p-2" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="p-2">
            <Link data-testid="cartItems" to={"/cart"}>
              Cart - {cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
