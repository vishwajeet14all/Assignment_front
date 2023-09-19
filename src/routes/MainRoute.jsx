import { Route, Routes } from "react-router-dom";
import Savedarticle from "../components/Savedarticle";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import Navbutton from "../components/Navbutton";
import { Newscategory } from "../components/Newscategory";
import ProtectedRoutes from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import  NotPage  from "../pages/NotPage";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/save"
          element={
            <ProtectedRoutes>
              <Savedarticle />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/category"
          element={
            <ProtectedRoutes>
              <Newscategory />
            </ProtectedRoutes>
          }
        >
          <Route
            path=":id"
            element={
              <ProtectedRoutes>
                <Navbutton />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="*" element={<NotPage/>}/>   
      </Routes>
    </>
  );
};

export default MainRoute;
