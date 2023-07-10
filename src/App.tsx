import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Composer from "./routes/composer"
import Home from "./routes/home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/compose",
    element: <Composer />,
  },
]);

const App = () => {
  return <RouterProvider router={Routes} />;
};

export default App;
