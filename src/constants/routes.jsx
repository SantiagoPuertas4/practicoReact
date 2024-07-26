import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import Ejercicio6View from "../views/Ejercicio6View";
import MainView from "../views/MainView";

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
        path: "ejercicio6",
        element: <Ejercicio6View />,
      },
    ],
  },
]);
