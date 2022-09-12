import { Outlet, Link, useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import { useEffect } from "react";
export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
  }
  useEffect(() => {
    if(!AuthService.getCurrentUser()) {
      navigate("/login");
    }
  }, [navigate])
  

  return (
    <div>
      <h1>레시피 클론</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/recipe/list">Recipes</Link> |{" "}
        <Link to="/recipe/register">Register a new recipe</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/login" onClick={handleLogout}>Log out</Link>
      </nav>

      <Outlet />
    </div>
  );
}