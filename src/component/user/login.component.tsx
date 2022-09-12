import { useState } from 'react';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
interface Inputs {
  userId: string,
  password: string,
}
export default function Login() {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({
    loading: false,
    message: ''
  });

  const handleLogin = (formValue: Inputs) => {
    const { userId, password } = formValue;
    setLoginState({
      message: '',
      loading: true
    })

    AuthService.login(userId, password)
      .then((response) => {
        navigate("/");
      },
      error => {
        console.log(error);
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        
        setLoginState({
          loading: false,
          message: resMessage
        });
      }
    );
  }
  /*
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    const target = e.target as typeof e.target & {
      userId: { value: string };
      password: { value: string };
    };
    const userId= target.userId.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
    handleLogin({ userId, password });
  }
  */
  const { register, handleSubmit, formState: { errors }} = useForm<Inputs>({
    defaultValues: {
      userId: 'admin',
      password: 'admin'
    }
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    handleLogin(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      {loginState.message}
      <div>
        <label>User ID:</label>
        <input type="text" {...register("userId", { required: true })} />
        {errors.userId && <span>This field is required</span>}
        
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
    </form>
  )
}