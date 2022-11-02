import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Details from "./screens/Details";
import Home from "./screens/Home";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "characters/:characterId",
        element: <Details />,
      },
    ],
  },
  {
    path: '/contact',
    element: <div>Kontakt</div>
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
