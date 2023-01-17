import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Selection from "./pages/selection";
import Main from "./pages/main";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Selection />,
    },
    {
      path: "/:operation/:number",
      element: <Main />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
