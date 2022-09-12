import { useFormContext, useFieldArray } from "react-hook-form";
import { FormValues } from "../../types/register.type";
import IngredientArray from "./ingredientArray";

export default function IngredientGroupArray() {

  const { register, control } = useFormContext<FormValues>();  

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredientGroups"
  })
  const newIngredientGroup = {
    name: "",
    ingredients: [
      {
        name: "",
        amount: ""
      },
      {
        name: "",
        amount: ""
      },
      {
        name: "",
        amount: ""
      }
    ]
  }
  return (
    <section>
      <h3>재료/양념 그룹</h3>
      
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>

            <label>재료/양념 묶음이름</label>

            <input
              {...register(`ingredientGroups.${index}.name`)}
              defaultValue="재료"
            />
            <IngredientArray name={item.name} index={index} />
            <button type="button" onClick={() => remove(index)}>재료/양념 그룹 삭제</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append(newIngredientGroup)}>재료/양념 그룹 추가</button>
    </section>
  )
}