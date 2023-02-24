import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BlogPage, ProfilePage, NotFound, Menu } from "./";

/**
 * De esta manera manejamos las rutas de un hash router
 * /#/...route
 */
function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
