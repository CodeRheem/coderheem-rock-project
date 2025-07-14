import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <section className="h-screen flex flex-col bg-main text-main">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </section>
  );
}

export default RootLayout;
