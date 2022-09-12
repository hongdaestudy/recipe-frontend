import AuthService from "../../services/auth.service";
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
        <>
          <div>
            <label>User ID</label>
            <input type="text" {...register("userId", { required: true})} />
            <button type="button">Check duplicate</button>
            {errors.userId && <span>This field is required</span>}
          </div>

          <div>
            <label>Email</label>
            <input type="email"  {...register("email", { required: true })} />
            <button type="button">Check duplicate</button>
            {errors.email && <span>This field is required</span>}
          </div>

          <div>
            <label>Password</label>
            <input type="password"  {...register("password", { required: true})} />
            {errors.password && <span>This field is required</span>}
          </div>

          <div>
            <label>Password Confirm</label>
            <input type="password"  {...register("passwordConfirm", { required: true})} />
            {errors.passwordConfirm && <span>This field is required</span>}
          </div>

          <div>
            <input type="submit" value="Join"/>
          </div>
        </>
      )}

      {joinState.message && (
        <div>
          {joinState.message}
        </div>
      )}
    </form>
  )
}