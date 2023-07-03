import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <h1 className="m-2 p-2 font-bold">This site is made by {user.name} - {user.email}</h1>
    );
};

export default Footer;