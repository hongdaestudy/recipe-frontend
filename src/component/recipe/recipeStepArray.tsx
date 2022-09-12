import { useFormContext, useFieldArray } from "react-hook-form";
import { FormValues } from "../../types/register.type";
import UploadImage from "./uploadImage";

function getPlaceholderForRecipeStepDescription(index: number) {
  switch(index % 4) {
    case 0:
      return "예) 소고기는 기름기를 떼어네고 적당한 크기로 썰어주세요.";
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
  })
  const newRecipeStep = {
    description: "",
    photoUrl: ""
  }
  return (
    <section>
      <h3>요리순서</h3>
      
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>

            <label>Step{index + 1}</label>

            <textarea
              {...register(`recipeSteps.${index}.description`)}
              placeholder={getPlaceholderForRecipeStepDescription(index)}
            />
            <UploadImage name={`recipeSteps.${index}.photoUrl`} />
            <button type="button" onClick={() => remove(index)}>요리순서 삭제</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append(newRecipeStep)}>+ 순서 추가</button>
    </section>
  )
}