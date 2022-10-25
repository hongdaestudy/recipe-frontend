import AuthService from "../../services/auth.service";
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

interface Inputs {
  userId: string,
  email: string,
  password: string,
  passwordConfirm: string
}
export default function Join() {
  const [joinState, setJoinState] = useState({
    message: '',
    successful: false
  })

  const handleJoin = (formValue: Inputs) => {
    const { userId, email, password } = formValue;
    
    setJoinState({
      message: '',
      successful: false
    });

    AuthService.join(
      userId,
      email,
      password
    ).then(
      response => {
        setJoinState({
          message: response.data.message,
          successful: true
        });
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
          successful: false
        });
      }
    );
  }
  /*
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      userId: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const userId = target.userId.value; // typechecks!
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
    handleJoin({ userId, email, password });
  }
  */
  const { register, handleSubmit, formState: { errors }} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    handleJoin(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!joinState.successful && (
        <div style={{position:"absolute", left:"50%", top:"50%", WebkitTransform:"translate(-50%, -50%)", transform: "translate(-50%, -50%)"}}>
          <img src="1000recipe.png" alt="" />
          
          <div>
            <TextField variant="standard" placeholder="User ID" {...register("userId", { required: true})}  sx={{width: "250px"}}/>
            <Button type="button" variant="contained" color="success" size="small" sx={{width: "100px"}}>중복 확인</Button>
            {errors.userId && <span>This field is required</span>}
          </div>

          <div>
            <TextField variant="standard" type="email" placeholder="Email" {...register("email", { required: true })}  sx={{width: "250px"}}/>
            <Button type="button" variant="contained" color="success" size="small" sx={{width: "100px"}}>중복 확인</Button>
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
      )}

      {joinState.message && (
        <div>
          {joinState.message}
        </div>
      )}
    </form>
  )
}