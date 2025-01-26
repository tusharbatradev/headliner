import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Browse = () => {
  const isUserLogin = useSelector((state) => state.user.isUserLogin);
  const sideBarState = useSelector((state) => state.sideBar); // Corrected selector
  console.log("SideBar State:", sideBarState); // Check if this is still undefined
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogin) {
      navigate("/", { replace: true });
    }
  }, [isUserLogin, navigate]);

  return (
    <div
      style={{
        padding: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Header />
      {sideBarState?.sideBarOpen && <SideBar />} {/* Check if 'sideBarOpen' is true */}
      <Outlet />
    </div>
  );
};

export default Browse;
