import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import UserForm from "./components/UserForm";
import { DataProvider } from "./utils/Context";
import ReactDOM from "react-dom/client";
import Confirmation from "./components/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm />,
  },
  {
    path: "confirmation",
    element: <Confirmation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);
