import { Outlet, Link, useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton, InputAdornment, Menu, MenuItem, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  }
  useEffect(() => {
    if(!AuthService.getCurrentUser()) {
      navigate("/login");
    }
  }, [navigate])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="box">
      <div className="row header">
        <div style={{margin: "0 auto", width:"700px", border:"1px solid green"}}>

          <img src="/1000recipe.png" alt="" />
          <TextField
            id="search"
            size="small"
            sx={{display: "inline-block", verticalAlign:"bottom", margin:"15px"}}
            InputProps={{endAdornment: <InputAdornment position="end" ><IconButton color="success"><SearchIcon /></IconButton></InputAdornment> }}
            />
          <Avatar src="logo192.png" sx={{border: "1px solid #ddd", display: "inline-block", padding: "0", margin: "15px"}}
            onClick={handleMenuClick}
            component="button"
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleMenuClose}>마이홈</MenuItem>
            <MenuItem onClick={handleMenuClose}>테스트</MenuItem>
            <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
          </Menu>
        </div>
        
        
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
          <Link to="/myhome">Myhome</Link> |{" "}
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