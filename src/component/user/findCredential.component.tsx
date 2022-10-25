//import AuthService from "../../services/auth.service";
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

interface Inputs {
  email: string
}

export default function FindCredential() {

  const handleFindCredential = (formValue: Inputs) => {
    const { email } = formValue;
    console.log(email);
  }

  const { register, handleSubmit, formState: { errors }} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    handleFindCredential(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{
          width:"350px",
          position:"absolute",
          left:"50%",
          top:"50%",
          WebkitTransform:"translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
          textAlign:"center"}}>
        
          <img src="1000recipe.png" alt="" />
          <h2>아이디/비밀번호 찾기</h2>
          <p>개인정보 도용방지를 위해 아이디/비밀번호 찾기 안내를 회원 가입시 입력했던 메일로 발송합니다.</p>
          <div>
            <TextField
              variant="standard"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })} 
              sx={{width:"300px"}}
              />
            <br />
            {errors.email && <span>This field is required</span>}
          </div>
          <br />
          <div>
            <Button type="submit" variant="contained" color="success" style={{width:"300px"}}>안내 메일 발송</Button>
          </div>
        </div>
    </form>
  )
}