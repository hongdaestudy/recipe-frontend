import { useFormContext, useFieldArray } from "react-hook-form";
import { FormValues } from "../../types/register.type";
import UploadImage from "./uploadImage";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function getPlaceholderForRecipeStepDescription(index: number) {
  switch(index % 4) {
    case 0:
      return "예) 소고기는 기름기를 떼어내고 적당한 크기로 썰어주세요.";
    case 1:
      return "예) 준비된 양념으로 먼저 고기를 조물조물 재워 둡니다.";
    case 2:
      return "예) 그 사이 양파와 버섯, 대파도 썰어서 준비하세요.";
    case 3:
      return "예) 고기가 반쯤 익어갈 때 양파를 함께 볶아요.";
  }
}
export default function RecipeStepArray() {

  const { register, control } = useFormContext<FormValues>();  

  const { fields, append, remove } = useFieldArray({
    control,
    name: "recipeSteps"
  });

  const newRecipeStep = {
    description: "",
    photoFileList: new DataTransfer().files,
    sort:0
  };
  return (
    <section>
      <h3>요리순서</h3>
      
      <ul style={{listStyle: "none"}}>
        {fields.map((item, index) => (
          <li key={item.id} style={{display: "flex", alignItems: "center"}}>
          <input {...register(`recipeSteps.${index}.sort`)} type="hidden" value={index}/>
            
            <label style={{color:"#74b243", verticalAlign: "top", display: "inline-block", width: "50px"}}>Step{index + 1}</label>

            <TextField
              {...register(`recipeSteps.${index}.description`)}
              placeholder={getPlaceholderForRecipeStepDescription(index)}
              size="small"
              color="success"
              sx={{ width: '450px'}}
              multiline
              rows={5}
            />
            <UploadImage name={`recipeSteps.${index}.photoFileList`} />
            <IconButton onClick={() => remove(index)}>
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
      <div style={{textAlign: "center"}}>
        <button
          type="button"
          onClick={() => append(newRecipeStep)}
          style={{display:"inline-flex", alignItems: "center", border: "none", background: "none", cursor: "pointer"}}>
          <AddCircleOutlineRoundedIcon color="success"/>순서 추가
        </button>
      </div>
    </section>
  )
}