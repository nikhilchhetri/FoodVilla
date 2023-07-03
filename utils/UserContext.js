import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy Name",
        email: "support@foodvilla.com"
    }
})

export default UserContext;