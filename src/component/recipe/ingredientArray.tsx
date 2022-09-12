import { useFormContext, useFieldArray } from "react-hook-form";
import { FormValues } from "../../types/register.type";

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
    <>
      <section>
        <h4>재료</h4>
        <ul>
          {fields.map((item, i) => (
            <li key={item.id}>
              <label>재료이름: </label>
              <input
                {...register(`ingredientGroups.${index}.ingredients.${i}.name`)}
                placeholder={getPlaceholderForIngredientName(i)}
              />
              <label>양: </label>
              <input
                {...register(`ingredientGroups.${index}.ingredients.${i}.amount`)}
                placeholder={getPlaceholderForIngredientAmount(i)}
              />
              <button type="button" onClick={() => remove(i)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => append({ name: "", amount: "" })}>재료 추가</button>
      </section>
    </>
  )
}