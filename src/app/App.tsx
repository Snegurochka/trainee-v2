import { RouterProvider } from "react-router-dom";
import { router } from "./services/route/route";

function App() {
  console.log('start 2', process.env.REACT_APP_FIREBASE_API_KEY);
  return (
      <RouterProvider router={router} />
  );
}

export default App;
