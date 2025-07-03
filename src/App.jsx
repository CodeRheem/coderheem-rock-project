import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import WhoWeAre from "./pages/WhoWeAre";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
