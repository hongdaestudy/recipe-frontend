import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UploadImage from '../recipe/uploadImage';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
interface ProfileImageDialogProps {
  open: boolean,
  handleClose: () => void
}

const profileImageDialogDefaultValues = {
  profileImage: null,
  profileText: null
}
interface ProfileImageDialogFormValues {
  profileImage?: string | null
  profileText? : string | null
}
export default function ProfileImageDialog({open, handleClose}:ProfileImageDialogProps) {
  const methods = useForm<ProfileImageDialogFormValues>({
    defaultValues: profileImageDialogDefaultValues
  });
  const { register, handleSubmit, formState: { errors } } = methods;
  const onSubmit: SubmitHandler<ProfileImageDialogFormValues> = async (data, e) => {
    console.log(data);
    handleClose();
  }
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>프로필 설정</DialogTitle>
          <DialogContent>
            <UploadImage
              name="profileImage"
              width="320px"
              height="320px"
            />

            <DialogContentText>
              프로필 사진을 등록해 주세요.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="자기소개"
              type="text"
              fullWidth
              variant="standard"
              placeholder="자기소개를 100자 이내로 작성해 주세요."
              {...register("profileText")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(onSubmit)}>저장</Button>
            <Button onClick={handleClose}>취소</Button>
          </DialogActions>
        </Dialog>
      </form>
    </FormProvider>
  );
}