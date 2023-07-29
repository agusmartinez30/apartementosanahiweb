import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import store from "./app/store";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "./pages";
import { RouterProvider } from "react-router-dom";
import Suggestion from "./pages/Suggestions/Suggestion";
import Layout from "./components/Layout/Layout";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail";
import ErrorPage from "./pages/Error/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/departamento/:id",
        element: <PropertyDetail />
      },
    ],
  },
  {
    path: "/sugerencias",
    element: <Suggestion />
  },
  {
    path: "/test",
    element: <h2>Test</h2>
  },
]);

const colors = {
  green: {
    300: "#48BB78",
    600: "#E6FFDA",
    900: "#162C26",
  },
  white: {
    300: "#FFFFFF",
    600: "#F3F3F3",
    900: "#D9D9D9",
  },
  black: {
    300: "#413F42",
    600: "#303841",
    900: "#000000",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>

  </React.StrictMode>
);
