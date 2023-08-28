import React from "react";
import { Homepage, Confirmation } from "./component/pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootErrorPage } from "./component/pages/RootErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <RootErrorPage />,
    children: [
      {
        path: "/:id",
        element: <Homepage />,
        errorElement: <div>Error loading individual element</div>,
      },
    ],
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
    errorElement: <RootErrorPage />,
  },
]);

function App() {
  return (
    <div className="container py-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
