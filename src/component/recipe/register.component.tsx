import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormValues, defaultValues, RecipeTags } from "../../types/register.type"
import IngredientGroupArray from "./ingredientGroupArray";
import RecipeStepArray from "./recipeStepArray";
import RecipeService from "../../services/recipe.service";
import UploadImage from "./uploadImage";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import styled from "styled-components";
import FileService from "../../services/file.service";
import { Button, Dialog, DialogTitle, LinearProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const methods = useForm<FormValues>({
    defaultValues
  });

  const [uploading, setUploading] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    setTotalProgress(0);
    setUploading(true);
    //console.log(e);
    let count = 0;
    const recipeStepsWithPhotos = data.recipeSteps.filter(recipeStep => recipeStep.photoFileList.length !== 0);
    let totalCount = recipeStepsWithPhotos.length + (data.completionPhotoFileList.length > 0 ? 2 : 1);
    await FileService.upload(data.mainPhotoFileList[0]);
    count++;
    setTotalProgress(count / totalCount * 100);

    if(data.completionPhotoFileList.length > 0) {
      await FileService.upload(data.completionPhotoFileList[0]);
      count++;
      setTotalProgress(count / totalCount * 100);
    }
    
    for(const recipeStep of data.recipeSteps) {
      if(recipeStep.photoFileList.length > 0) {
        await FileService.upload(recipeStep.photoFileList[0]);
        count++;
        setTotalProgress(count / totalCount * 100);
      }
    }
    //DELETE FILELIST
    //ADD FILE_ID
    data = {
      ...data,
      recipeTags
    }
    console.log(data);
    RecipeService.register(data).then(response=> {
      console.log(JSON.parse(response.data.data));

      setUploading(false);
    });
  }
  const { register, handleSubmit, formState: { errors } } = methods;

  const [recipeTags, setrecipeTags] = useState<RecipeTags[]>([]);
  const onTagsChange = (recipeTags: string[]) => {
    setrecipeTags(
      recipeTags.map((str,index) => ({
        name: str,
        sort: index
      })
    ));
  }
  const navigate = useNavigate();
  return (
    <>
      <h2>레시피 등록</h2>
      
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("status")} type="hidden" value="IN_PROGRESS"/>
          <ContentWrapper>
            <h3>기본정보</h3>

            <LabeledDiv>
              <label>요리 메인사진 *</label>
              <UploadImage
                name="mainPhotoFileList"
                defaultSrc="https://recipe1.ezmember.co.kr/img/pic_none4.gif"
                width="192px"
                height="192px" />
            </LabeledDiv>

            <LabeledDiv>
              <label>레시피 제목 *</label>
              <TextField
                {...register("title", { required: true })}
                placeholder="예) 소고기 미역국 끓이기"
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '600px'}}
                required />
              {errors.title && <span>This field is required</span>}
            </LabeledDiv>

            <LabeledDiv>
              <label>요리소개 *</label>
              <TextField
                {...register("description", { required: true })}
                placeholder="이 레시피의 탄생배경을 적어주세요. 예) 남편의 생일을 맞아 소고기 미역국을 끓여봤어요. 어머니로부터 배운 미역국 레시피를 남편의 입맛에 맞게 고안했습니다."
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '600px'}}
                multiline
                rows={5}
                required />
              {errors.description && <span>This field is required</span>}
            </LabeledDiv>

            <LabeledDiv>
              <label>동영상</label>
              <TextField {...register("videoUrl", {
                  onChange: e => { console.log(e.target.value) }
                })}
                placeholder="동영상이 있으면 주소를 입력하세요. 예)http://youtu.be/lA0Bxo3IZmM"
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '300px'}}
                multiline
                rows={3}
                required />
              <span>
                <VideoThumbnail src="https://recipe1.ezmember.co.kr/img/pic_none5.gif" alt="동영상 썸네일" />
              </span>
            </LabeledDiv>

            <LabeledDiv>
              <label>카테코리</label>
              <Select
                {...register("kind")}
              >
                <option value="종류별">종류별</option>
                <option value="밑반찬">밑반찬</option>
                <option value="메인반찬">메인반찬</option>
              </Select>

              <Select {...register("situation")}>
                <option>상황별</option>
                <option value="일상">일상</option>
                <option value="초스피드">초스피드</option>
              </Select>

              <Select {...register("method")}>
                <option>방법별</option>
                <option value="볶음">볶음</option>
                <option value="끓이기">끓이기</option>
              </Select>

              <Select {...register("ingredient")}>
                <option>재료별</option>
                <option value="소고기">소고기</option>
                <option value="돼지고기">돼지고기</option>
              </Select>
            </LabeledDiv>

            <LabeledDiv>
            <label>요리정보</label>
            <Select {...register(`information.servingCount`)}>
              <option>인원</option>
              <option value="ONE">1인분</option>
              <option value="TWO">2인분</option>
            </Select>

            <Select {...register(`information.cookingTime`)}>
              <option>시간</option>
              <option value="FIVE_MINUTES_LESS">5분이내</option>
              <option value="TEN_MINUTES_LESS">10분이내</option>
            </Select>

            <Select {...register(`information.difficultyLevel`)}>
              <option>난이도</option>
              <option value="EASY">쉬움</option>		          
              <option value="NORMAL">보통</option>
            </Select>

            </LabeledDiv>
          </ContentWrapper>
          <Line />

          <ContentWrapper>
            <IngredientGroupArray />
          </ContentWrapper>
            
          <Line />
          <ContentWrapper>
            <RecipeStepArray />
            <LabeledDiv>
              <label>요리완성사진</label>
              <UploadImage name="completionPhotoFileList"/>
            </LabeledDiv>
          </ContentWrapper>
          <Line />

          <ContentWrapper>
            <LabeledDiv>
              <label>요리팁</label>
              <TextField
                {...register("tip")}
                placeholder="예) 고기요리에는 소금보다 설텅을 먼저 넣어야 단맛이 겉돌지 않고 육질이 부드러워요."
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '600px'}}
                multiline
                rows={5}
              />
            </LabeledDiv>
          </ContentWrapper>

          <Line />
          <ContentWrapper>
            <LabeledDiv>
              <label>태그</label>
              <TagsInput
                onChange={onTagsChange}
                onExisting={tag => tag}
                seprators={["Enter", " ", ","]}
                placeHolder="태그 입력 후 Enter를 누르세요"
              />
            </LabeledDiv>
          </ContentWrapper>
          
          <Line />

          <div style={{textAlign: "center"}}>
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={handleSubmit(onSubmit)}>저장</Button>
            <Button
              variant="contained"
              size="large"
              color="warning"
              >저장 후 공개하기</Button>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate(-1)}
              >취소</Button>
          </div>
        </form>
      </FormProvider>

      {
        uploading && (
          <Dialog open={uploading}>
            <DialogTitle>사진을 업로드 중입니다...</DialogTitle>
            <LinearProgress variant="determinate" value={totalProgress} />
          </Dialog>
        )
      }
    </>
  )
}


const VideoThumbnail = styled.img`
  margin-left: 20px;
  width: 128px;
  height: 80px;
`

const ContentWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 40px;
`
const Line = styled.div`
  width: 100%;
  height: 10px;
  background-color: lightgray;
`

const LabeledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > label {
    width: 120px;
    display: inline-block;
  }
`

const Select = styled.select`
  border: 1px solid rgba(0,0,0,0.23);
  width: 128px;
  font-size: 16px;
  padding: 8px 2px;
  margin: 0 2px 0 0;
  border-radius: 4px;
  :focus {
    outline-color: rgb(104, 161, 58);
  }
`