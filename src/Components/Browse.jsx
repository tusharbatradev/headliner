import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const isUserLogin = useSelector((state) => state.user.isUserLogin);
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
      <Outlet />
    </div>
  );
};

export default Browse;
