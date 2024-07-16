import { Outlet } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

const RootView = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootView;
