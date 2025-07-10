import React, { createContext } from "react"; 

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const value = {}; // You can put shared admin state here later
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
