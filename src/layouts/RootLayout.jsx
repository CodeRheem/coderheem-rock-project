import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <section className="h-screen flex flex-col bg-main text-main">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default RootLayout;
