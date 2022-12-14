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
      <h2>????????? ??????</h2>
      
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("status")} type="hidden" value="IN_PROGRESS"/>
          <ContentWrapper>
            <h3>????????????</h3>

            <LabeledDiv>
              <label>?????? ???????????? *</label>
              <UploadImage
                name="mainPhotoFileList"
                defaultSrc="https://recipe1.ezmember.co.kr/img/pic_none4.gif"
                width="192px"
                height="192px" />
            </LabeledDiv>

            <LabeledDiv>
              <label>????????? ?????? *</label>
              <TextField
                {...register("title", { required: true })}
                placeholder="???) ????????? ????????? ?????????"
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '600px'}}
                required />
              {errors.title && <span>This field is required</span>}
            </LabeledDiv>

            <LabeledDiv>
              <label>???????????? *</label>
              <TextField
                {...register("description", { required: true })}
                placeholder="??? ???????????? ??????????????? ???????????????. ???) ????????? ????????? ?????? ????????? ???????????? ???????????????. ?????????????????? ?????? ????????? ???????????? ????????? ????????? ?????? ??????????????????."
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
              <label>?????????</label>
              <TextField {...register("videoUrl", {
                  onChange: e => { console.log(e.target.value) }
                })}
                placeholder="???????????? ????????? ????????? ???????????????. ???)http://youtu.be/lA0Bxo3IZmM"
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '300px'}}
                multiline
                rows={3}
                required />
              <span>
                <VideoThumbnail src="https://recipe1.ezmember.co.kr/img/pic_none5.gif" alt="????????? ?????????" />
              </span>
            </LabeledDiv>

            <LabeledDiv>
              <label>????????????</label>
              <Select
                {...register("kind")}
              >
                <option value="?????????">?????????</option>
                <option value="?????????">?????????</option>
                <option value="????????????">????????????</option>
              </Select>

              <Select {...register("situation")}>
                <option>?????????</option>
                <option value="??????">??????</option>
                <option value="????????????">????????????</option>
              </Select>

              <Select {...register("method")}>
                <option>?????????</option>
                <option value="??????">??????</option>
                <option value="?????????">?????????</option>
              </Select>

              <Select {...register("ingredient")}>
                <option>?????????</option>
                <option value="?????????">?????????</option>
                <option value="????????????">????????????</option>
              </Select>
            </LabeledDiv>

            <LabeledDiv>
            <label>????????????</label>
            <Select {...register(`information.servingCount`)}>
              <option>??????</option>
              <option value="ONE">1??????</option>
              <option value="TWO">2??????</option>
            </Select>

            <Select {...register(`information.cookingTime`)}>
              <option>??????</option>
              <option value="FIVE_MINUTES_LESS">5?????????</option>
              <option value="TEN_MINUTES_LESS">10?????????</option>
            </Select>

            <Select {...register(`information.difficultyLevel`)}>
              <option>?????????</option>
              <option value="EASY">??????</option>		          
              <option value="NORMAL">??????</option>
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
              <label>??????????????????</label>
              <UploadImage name="completionPhotoFileList"/>
            </LabeledDiv>
          </ContentWrapper>
          <Line />

          <ContentWrapper>
            <LabeledDiv>
              <label>?????????</label>
              <TextField
                {...register("tip")}
                placeholder="???) ?????????????????? ???????????? ????????? ?????? ????????? ????????? ????????? ?????? ????????? ???????????????."
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
              <label>??????</label>
              <TagsInput
                onChange={onTagsChange}
                onExisting={tag => tag}
                seprators={["Enter", " ", ","]}
                placeHolder="?????? ?????? ??? Enter??? ????????????"
              />
            </LabeledDiv>
          </ContentWrapper>
          
          <Line />

          <div style={{textAlign: "center"}}>
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={handleSubmit(onSubmit)}>??????</Button>
            <Button
              variant="contained"
              size="large"
              color="warning"
              >?????? ??? ????????????</Button>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate(-1)}
              >??????</Button>
          </div>
        </form>
      </FormProvider>

      {
        uploading && (
          <Dialog open={uploading}>
            <DialogTitle>????????? ????????? ????????????...</DialogTitle>
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