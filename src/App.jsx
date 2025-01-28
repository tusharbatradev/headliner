import React, { useState } from "react";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import MainNews from "./Components/MainNews";
import NewsList from "./Components/NewsList";
import SearchPage from "./Components/SearchPage";
import AboutPage from "./Components/AboutPage";
import FavNewsPage from "./Components/FavNewsPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "",
          element: <NewsList />,
        },
        {
          path: "mainnews/:id",
          element: <MainNews />,
        },
        {
          path: "searchnews",
          element: <SearchPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "favNews",
          element: <FavNewsPage />,
        }
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
