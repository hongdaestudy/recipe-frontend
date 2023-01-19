import AuthService from '../../services/auth.service';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  email: string;
  password: string;
  passwordConfirm: string;
}
export default function Join() {
  const [joinState, setJoinState] = useState({
    message: '',
  });
  const navigate = useNavigate();
  const handleJoin = (formValue: Inputs) => {
    const { email, password } = formValue;

    setJoinState({
      message: '',
    });

    AuthService.join(email, password).then(
      () => {
        navigate('/');
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setJoinState({
          message: resMessage,
        });
      },
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    if (data.password !== data.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    handleJoin(data);
  };

  const checkEmail = () => {
    const email = getValues('email');
    AuthService.emailCheck(email).then(available => {
      if (available) {
        alert('사용가능합니다.');
      } else {
        alert('이미 존재하는 이메일 입니다.');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{position:"absolute", left:"50%", top:"50%", WebkitTransform:"translate(-50%, -50%)", transform: "translate(-50%, -50%)"}}>
        <img src="assets/1000recipe.png" alt="" />

        <div>
          <TextField variant="standard" type="email" placeholder="Email" {...register("email", { required: true })}  sx={{width: "250px"}}/>
          <Button type="button" variant="contained" color="success" size="small" sx={{width: "100px"}} onClick={checkEmail}>중복 확인</Button>
          {errors.email && <span>This field is required</span>}
        </div>

        <div>
          <TextField variant="standard" type="password" placeholder="Password" {...register("password", { required: true})}  sx={{width: "250px"}}/>
          {errors.password && <span>This field is required</span>}
        </div>

        <div>
          <TextField variant="standard" type="password" placeholder="Password Confirm" {...register("passwordConfirm", { required: true})}  sx={{width: "250px"}}/>
          {errors.passwordConfirm && <span>This field is required</span>}
        </div>
        <br />
        <div>
          <Button type="submit" variant="contained" color="success" sx={{width: "350px"}}>Join</Button>
        </div>
      </div>


      {joinState.message && (
        <div>
          {joinState.message}
        </div>
      )}
    </form>
  )
}