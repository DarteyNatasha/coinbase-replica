import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Cryptocurrencies from "../pages/Cryptocurrencies/Cryptocurrencies";
import { individualsRoutes } from "../pages/Individuals/individualsRoutes";
import { businessesRoutes } from "../pages/Businesses/businessesRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cryptocurrencies", element: <Cryptocurrencies /> },
      ...individualsRoutes,
      ...businessesRoutes,
    ],
  },
]);

export default router;

