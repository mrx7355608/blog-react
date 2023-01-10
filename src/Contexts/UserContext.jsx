import React from "react";

const UserContext = React.createContext();
export const useUser = () => React.useContext(UserContext);

export default UserContext;
