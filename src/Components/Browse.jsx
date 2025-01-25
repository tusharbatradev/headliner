import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import NewsList from "./NewsList";

const Browse = () => {
  const isUserLogin = useSelector((state) => state.user.isUserLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogin) {
      navigate("/", { replace: true });
    }
  }, [isUserLogin, navigate]);

  return (
    <div style={{padding : '4px', display : 'flex', flexDirection : 'column', gap : '16px'}}>
      <Header />
      <NewsList />
    </div>
  );
};

export default Browse;
