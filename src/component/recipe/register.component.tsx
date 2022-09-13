import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormValues, defaultValues, Tag } from "../../types/register.type"
import IngredientGroupArray from "./ingredientGroupArray";
import RecipeStepArray from "./recipeStepArray";
import RecipeService from "../../services/recipe.service";
import UploadImage from "./uploadImage";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import styled from "styled-components";

export default function Register() {
  const methods = useForm<FormValues>({
    defaultValues
  });
  const onSubmit: SubmitHandler<FormValues> = data => {
    data = {
      ...data,
      tags
    }
    console.log(data);
    RecipeService.register(data).then(response=> {
      console.log(JSON.parse(response.data.data));
    });
  }
  const { register, handleSubmit, formState: { errors } } = methods;

  const [tags, setTags] = useState<Tag[]>([]);
  const onTagsChange = (tags: string[]) => {
    setTags(
      tags.map(str => ({
        tagName: str
      })
    ));
  }
  return (
    <>
      <h2>레시피 등록</h2>
      <h3>기본정보</h3>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>요리 메인사진</label>
            <UploadImage name="mainPhotoUrl"/>
          </div>

          <div>
            <label>레시피 제목</label>
            <input {...register("title", { required: true })} placeholder="예) 소고기 미역국 끓이기" />
            {errors.title && <span>This field is required</span>}
          </div>

          <div>
            <label>요리소개</label>
            <textarea {...register("description", { required: true })} placeholder="이 레시피의 탄생배경을 적어주세요."/>
            {errors.description && <span>This field is required</span>}
          </div>

          <div>
            <label>동영상</label>
            <textarea {...register("videoUrl", {
                onChange: e => { console.log(e.target.value) }
              })}
              placeholder="동영상이 있으면 주소를 입력하세요."
            />
            <span>
              <VideoThumbnail src="/logo192.png" alt="동영상 썸네일" />
            </span>
          </div>

          <div>
            <label>카테코리</label>
            <select {...register("kind")}>
              <option>종류별</option>
              <option value="밑반찬">밑반찬</option>
              <option value="메인반찬">메인반찬</option>
            </select>

            <select {...register("situation")}>
              <option>상황별</option>
              <option value="일상">일상</option>
              <option value="초스피드">초스피드</option>
            </select>

            <select {...register("method")}>
              <option>방법별</option>
              <option value="볶음">볶음</option>
              <option value="끓이기">끓이기</option>
            </select>

            <select {...register("ingredient")}>
              <option>재료별</option>
              <option value="소고기">소고기</option>
              <option value="돼지고기">돼지고기</option>
            </select>
          </div>

          <div>
            <label>요리정보</label>
            <select {...register("servingCount")}>
              <option>인원</option>
              <option value="1인분">1인분</option>
              <option value="2인분">2인분</option>
            </select>

            <select {...register("cookingTime")}>
              <option>시간</option>
              <option value="5분이내">5분이내</option>
              <option value="10분이내">10분이내</option>
            </select>

            <select {...register("difficultyLevel")}>
              <option>난이도</option>
              <option value="아무나">아무나</option>
              <option value="초급">초급</option>
            </select>
          </div>

          <IngredientGroupArray />

          <RecipeStepArray />

          <div>
            <label>요리완성사진</label>
            <UploadImage name="completionPhotoUrl"/>
          </div>

          <div>
            <label>요리팁</label>
            <textarea
              {...register("tip")}
              placeholder="예) 고기요리에는 소금보다 설텅을 먼저 넣어야 단맛이 겉돌지 않고 육질이 부드러워요."
            />
          </div>

          <div>
            <label>태그</label>
            <TagsInput
              onChange={onTagsChange}
              onExisting={tag => tag}
              seprators={["Enter", " ", ","]}
              placeHolder="태그를 입력하세요"
            />

          </div>

          <div>
            <input type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  )
}


const VideoThumbnail = styled.img`
  width: 64px;
  height: 48px;
  border: 1px solid lightgray;
`