import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './component/user/login.component';
import Join from './component/user/join.component';
import FindCredential from './component/user/findCredential.component';

import List from './component/recipe/list.component';
import Register from './component/recipe/register.component';
import Profile from './component/user/profile.component';
import DetailView from './component/recipe/detailView.component';
import Myhome from './component/mypage/myhome.component';

import './index.css';
// theme 세팅
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { muiTheme } from './theme/themes';
import { ThemeProvider } from 'styled-components';

// theme
import { theme } from './theme/themes';
import NotFoundPage from './pages/404';
import { RegisterPage } from './pages/RegisterPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            {/* <App /> 만 불러오기  */}
            <Routes>
              <Route
                path="/"
                element={<Navigate replace to="/recipe/list" />}
              />
              <Route path="/" element={<App />}>
                {/* }> */}
                <Route path="recipe/list" element={<List />} />
                <Route path="recipe/:recipeId" element={<DetailView />} />

                {/* <Route path="recipe/register" element={<Register />} /> */}
                <Route path="recipe/register" element={<RegisterPage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="myhome" element={<Myhome />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/findCredential" element={<FindCredential />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
