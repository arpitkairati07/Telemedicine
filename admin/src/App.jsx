import React, { useContext } from "react";
import Login from "./Pages/Login";
import { ToastContainer } from 'react-toastify';
import { AppContext } from "./Context/AppContext";

const App = () => {
  const { atoken } = useContext(AppContext);

  return atoken ? (
    <div>
      <Login />
      <ToastContainer />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
