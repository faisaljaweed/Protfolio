import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
// import Educations from "./Pages/Educations";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import RootLayout from "./Pages/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacts />} />
      {/* <Route path="/education" element={<Educations />} /> */}
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Projects />} />
    </Route>
  )
);

export default router;
