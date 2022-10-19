import { Outlet, Link, useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import { useEffect } from "react";
import styled from "styled-components";

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
    <div className="box">
      <div className="row header">
        <h1>레시피 클론: <img src="/1000recipe.png" alt="" /></h1>
        
        <nav
          style={{
            borderBottom: "solid 1px #68a13a",
            paddingBottom: "1rem",
            backgroundColor: "#74b243"
          }}
        >
          <Link to="/recipe/list">Recipes</Link> |{" "}
          <Link to="/recipe/register">Register a new recipe</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/login" onClick={handleLogout}>Log out</Link>
        </nav>
      </div>
      <div className="row content">
        <Background>
          <Container>
            <Outlet />
          </Container>
        </Background>
      </div>
      <div className="row footer">
        <p>footer</p>
      </div>
    </div>
  );
}

const Container = styled.div`
  width: 1280px;
  background-color: white;
`
const Background = styled.div`
  background-color: lightgray;
  height: 100%;
  display:flex;
  justify-content: center;
`