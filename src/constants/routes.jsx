import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import MainView from "../views/MainView";
import Ejercicio2View from "../views/Ejercicio2View";
import Ejercicio9View from "../views/Ejercicio9View";
import Ejercicio10View from "../views/Ejercicio10View";

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
        path: "ejercicio9",
        element: <Ejercicio9View />,
      },
      {
        path: "ejercicio10",
        element: <Ejercicio10View />,
      },
    ],
  },
]);
