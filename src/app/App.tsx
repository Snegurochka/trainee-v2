import { RouterProvider } from "react-router-dom";
import { router } from "./services/route/route";

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
