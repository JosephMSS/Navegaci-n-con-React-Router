import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  BlogPage,
  ProfilePage,
  NotFound,
  Menu,
  ItemLink,
  ItemNavLink,
} from "./";

/**
 * De esta manera manejamos las rutas de un hash router
 * /#/...route
 */
const ROUTES = {
  HOME: "/",
  BLOG: "blog",
  PROFILE: "profile",
};
function App() {
  return (
    <>
      <HashRouter>
        <Menu>
          <ItemNavLink label={"Home"} route={ROUTES.HOME} />
          <ItemNavLink label={"Blog"} route={ROUTES.BLOG} />
          <ItemNavLink label={"Profile"} route={ROUTES.PROFILE} />
        </Menu>
        <Routes>
          <Route path="blog" element={<BlogPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
