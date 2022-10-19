import { useFormContext, useFieldArray } from "react-hook-form";
import { FormValues } from "../../types/register.type";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface IngredientArrayProps {
  name: string;
  index: number;
}

function getPlaceholderForIngredientName(index: number) {
  switch(index % 5) {
    case 0:
      return "예) 돼지고기";
    case 1:
      return "예) 양배추";
    case 2:
      return "예) 참기름";
    case 3:
      return "예) 소금";
    case 4:
      return "예) 고추가루 약간";
  }
}

function getPlaceholderForIngredientAmount(index: number) {
  switch(index % 5) {
    case 0:
      return "예) 300g";
    case 1:
      return "예) 1/2개";
    case 2:
      return "예) 1T";
    case 3:
      return "예) 2t";
    case 4:
      return "예)";
  }
}

export default function IngredientArray({ name, index }: IngredientArrayProps) {
  const { register, control } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `ingredientGroups.${index}.ingredients`
  });

  return (
    <span>
      <ul style={{listStyle: "none", display:"inline-block"}}>
        {fields.map((item, i) => (
          <li key={item.id}>
            <TextField
              {...register(`ingredientGroups.${index}.ingredients.${i}.name`)}
              placeholder={getPlaceholderForIngredientName(i)}
              variant="outlined"
              size="small"
              color="success"
            />
            <TextField
              {...register(`ingredientGroups.${index}.ingredients.${i}.amount`)}
              placeholder={getPlaceholderForIngredientAmount(i)}
              variant="outlined"
              size="small"
              color="success"
            />
            <IconButton aria-label="delete" onClick={() => remove(i)}>
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
      <div style={{textAlign:"center"}}>
        <button
          type="button"
          onClick={() => append({ name: "", amount: "" })}
          style={{display:"inline-flex", alignItems: "center", border: "none", background: "none", cursor: "pointer"}}
          ><AddCircleOutlineRoundedIcon color="success"/> 재료 추가</button>
      </div>
    </span>
  )
}