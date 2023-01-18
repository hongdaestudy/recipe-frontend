import React, { useState } from 'react';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

interface Inputs {
  userId: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({
    loading: false,
    message: '',
  });

  const handleLogin = (formValue: Inputs) => {
    const { userId, password } = formValue;
    setLoginState({
      message: '',
      loading: true,
    });

    AuthService.login(userId, password).then(
      response => {
        navigate('/');
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
          message: resMessage,
        });
      },
    );
  };
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      userId: 'admin',
      password: 'admin',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    handleLogin(data);
  };
  const joinHandler = () => {
    navigate('/join');
  };
  const findCredentialHandler = () => {
    navigate('/findCredential');
  };
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        WebkitTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src="1000recipe.png" alt="" />
        {loginState.message}
        <div>
          <TextField
            variant="standard"
            placeholder="User ID"
            {...register('userId', { required: true })}
            sx={{ width: '200px' }}
          />
          {errors.userId && <span>This field is required</span>}
        </div>
        <div>
          <TextField
            variant="standard"
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            sx={{ width: '200px' }}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <br />
        <div>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: '200px' }}
          >
            Log in
          </Button>
        </div>
        <br />
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={joinHandler}
            size="small"
          >
            Join
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={findCredentialHandler}
            size="small"
          >
            Find Credential
          </Button>
        </div>
      </form>
    </div>
  );
}
