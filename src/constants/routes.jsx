import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import MainView from "../views/MainView";
import Ejercicio8View from "../views/Ejercicio8View";
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
        path: "ejercicio8",
        element: <Ejercicio8View />,
      },
    ],
  },
]);
