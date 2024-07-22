import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import MainView from "../views/MainView";
import Ejercicio3View from "../views/Ejercicio3View";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <MainView />,
      },
      {
        path: "ejercicio1",
        element: <E1View />,
      },
      {
        path: "ejercicio3",
        element: <Ejercicio3View />,
      },
    ],
  },
]);
