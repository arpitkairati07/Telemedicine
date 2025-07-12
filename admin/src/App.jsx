import React, { useContext } from "react";
import Login from "./Pages/Login";
import { ToastContainer } from 'react-toastify';
import Navbar from "./Componenets/Navbar";
import { AdminContext } from "./Context/AdminContext";

const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className="bg-[#FDF9FD]">
      <ToastContainer />
      <Navbar></Navbar>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
