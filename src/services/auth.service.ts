import api from './api';
import TokenService from './token.service';

class AuthService {
  async login(email: string, password: string) {
    return api
      .post('/api/auth/login', {
        email,
        password,
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  async join(email: string, password: string) {
    return api
      .post('/api/auth/join', {
        email,
        password,
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }

  async emailCheck(email: string) {
    return api
      .get('/api/auth/email-check', {
        params: {
          email,
        },
      })
      .then(response => {
        return response.data;
      });
  }

  getCurrentUser() {
    return TokenService.getUser();
  }
}
export default new AuthService();
