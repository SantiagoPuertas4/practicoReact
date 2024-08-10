import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import MainView from "../views/MainView";
import Ejercicio2View from "../views/Ejercicio2View";
import Ejercicio11View from "../views/Ejercicio11View";
import Ejercicio12View from "../views/Ejercicio12View";

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
        path: "ejercicio11",
        element: <Ejercicio11View />,
      },
      {
        path: "ejercicio12",
        element: <Ejercicio12View />,
      },
    ],
  },
]);
