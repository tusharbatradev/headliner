import React, { useState } from "react";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
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
