import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import Ejercicio6View from "../views/Ejercicio6View";
import MainView from "../views/MainView";
import Ejercicio2View from "../views/Ejercicio2View";

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
        path: "ejercicio2",
        element: <Ejercicio2View />,
      },
      {
        path: "ejercicio6",
        element: <Ejercicio6View />,
      },
    ],
  },
]);
