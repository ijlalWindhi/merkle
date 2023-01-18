import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login";
import User from "./pages/user";
import NotFound from "./pages/not found";
import Layout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<User />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
