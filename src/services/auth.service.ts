//import axios from "axios";
//const API_URL = "http://localhost:8080/api/auth/";


interface LoginResultType {
  data: {
    userId: string,
    email: string,
    nickname: string,
    accessToken: string,
    message: string
  }
}
interface JoinResultType {
  data: {
    message: string,
    successful: boolean
  }
}


class AuthService {
  login(userId: string, password: string) {
    /*
    return axios
      .post(API_URL + "signin", {
        userId,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
      */
    return new Promise<LoginResultType>((resolve, reject) => {
      setTimeout(()=> {
        const response = {
          data: {
            userId: 'admin',
            email: 'admin@recipe.com',
            nickname: 'test',
            accessToken: 'qwer1234',
            message: 'success'
          }
        };
        localStorage.setItem("user", JSON.stringify(response.data));
        if(userId === 'admin' && password === 'admin')  {
          resolve(response);
        }
        else {
          reject({
            response: {
              data: {
                userId: '',
                email: '',
                nickname: '',
                accessToken: '',
                message: 'failed to login'
              }
            }
          });
        }
      }, 1000);
    })
      
  }
  logout() {
    localStorage.removeItem("user");
  }

  
  join(userId: string, email: string, password: string) {
    /*
    return axios.post(API_URL + "signup", {
      userId,
      email,
      password
    });
    */
    return new Promise<JoinResultType>((resolve) => {
      setTimeout(()=> {
        resolve({
          data: {
            message: "SUCCESS",
            successful: true
          }
        });
      }, 1000);
    })
    
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();