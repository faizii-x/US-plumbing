import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Landing from "./pages/landing"
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";

const PrimaryRoutes = () => {
  return <>
  
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Landing/>}/>
          </Route>
          <Route path="/about-us/" element={<Layout />} >
            <Route index element={<About/>}/>
          </Route>
          <Route path="/service/" element={<Layout />} >
            <Route index element={<Services/>}/>
          </Route>
          <Route path="/contact-us/" element={<Layout />} >
            <Route index element={<Contact/>}/>
          </Route>
          <Route path="/*" element={<Layout />} >
            <Route index element={() => (<h1 className="text-[50px] py-16">Page Not Found</h1>)}/>
          </Route>
        </Routes>
  
  </>;
};

export default PrimaryRoutes;
