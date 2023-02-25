import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  BlogPage,
  ProfilePage,
  NotFound,
  Menu,
  ItemLink,
  ItemNavLink,
  BlogPost,
  ROUTES,
} from "./";

/**
 * De esta manera manejamos las rutas de un hash router
 * /#/...route
 */

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
          <Route path={ROUTES.BLOG} element={<BlogPage />}>
            <Route path={ROUTES.BLOG_POST} element={<BlogPost />} />
          </Route>
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
