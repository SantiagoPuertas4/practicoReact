import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import E1View from "../views/Ejercicio1View";
import MainView from "../views/MainView";
import Ejercicio2View from "../views/Ejercicio2View";
import Ejercicio7View from "../views/Ejercicio7View";

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
        path: "ejercicio7",
        element: <Ejercicio7View />,
      },
    ],
  },
]);
