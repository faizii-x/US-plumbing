import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Landing from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import NotFound from "./pages/notFound";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about-us" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
