import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

import ModalPortal from "./components/modals/ModalPortal";

const About = lazy(() => import("./components/pages/About"));
const Home = lazy(() => import("./components/pages/Home"));
const Store = lazy(() => import("./components/pages/Store"));
const Error = lazy(() => import("./components/pages/Error"));

import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
      <ModalPortal />
    </>
  );
}

export default App;
