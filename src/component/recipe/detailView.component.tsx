import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, ReactNode } from "react";
import RecipeService from "../../services/recipe.service";
import { Recipe } from "../../types/detailView.type";
import { Grid, Avatar, Backdrop, CircularProgress, Tooltip, ToggleButtonGroup, ToggleButton, TextField, Button } from "@mui/material";
import { AutoAwesomeMosaic, Image, ViewList } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import ReactPlayer from "react-player/lazy";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import UploadImage from "./uploadImage";
import FileService from "../../services/file.service";
import AuthService from "../../services/auth.service";
import CommentService from "../../services/comment.service";

function pack(data:any) {
  const sliderItems: number = data.length > 4 ? 4 : data.length;
  const items: Array<any> = [];

  for (let i = 0; i < data.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(

        <Grid container spacing={2} key={i.toString()} sx={{"width": "700px", "height":"auto", "margin" : "0 auto"}}>
          {data.slice(i, i + sliderItems).map((item:any, index:number) => {
            return (
              <Grid item xs={3} key={index} sx={{"position": "relative"}}>
                <Link to={`/recipe/${item.recipeId}`}>
                  <img src={item.thumbnailUrl} style={{ "width" : "128px", "height" : "auto" }} alt="" />
                </Link>
                <span style={{"position": "absolute", "top": "25px", "left": "25px", "color": "white"}}>{item.title}</span>
              </Grid>
            );
          })}
        </Grid>

      );
    }
  }
  return items;
}
interface CommentForm {
  contents:string,
  commentPhotoFileList:FileList,
  userId: string
}
export default function DetailView() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<Recipe|undefined>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if(recipeId) {
      RecipeService.getRecipe(recipeId)
      .then(setRecipe)
      .then(() => {
        setLoading(false);
      });
    }
  }, [recipeId])

  const [recipeStepView, setRecipeStepView] = useState('image');
  const handleRecipeStepViewChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, recipeStepView: string) => setRecipeStepView(recipeStepView);
  
  const methods = useForm<CommentForm>();
  const { register, handleSubmit } = methods;
  const onSubmit: SubmitHandler<CommentForm> = async (data, e) => {
    console.log(data);
    if(data.commentPhotoFileList.length){
      await FileService.upload(data.commentPhotoFileList[0]);
    }
    data.userId = AuthService.getCurrentUser().userId;

    await CommentService.register(data);
  }
  if(loading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
      <CircularProgress color="success" />
    </Backdrop>
    )
  }

  if(!recipe) {
    return (
      <p>존재하지 않는 레시피입니다.</p>
    )
  }

  return (
    <>
      <h2>레시피 상세보기</h2>

      <MainPhotoWrapper>
        <MainPhoto src={recipe.mainPhotoUrl} />
        <UserInfo>
          <UserInfoPhotoAnchor>
            <UserInfoPhoto src="/logo192.png" />
          </UserInfoPhotoAnchor>
          <UsernameWrapper>
            <Username>
              {recipe.nickname}
              {
                !(recipe.isFollowingChef) && <FollowButton>+소식받기</FollowButton>
              }
            </Username>
          </UsernameWrapper>
        </UserInfo>
      </MainPhotoWrapper>

      <ContentWrapper>

        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <SummaryInfo>
          <SummaryInfoSpan src="https://recipe1.ezmember.co.kr/img/mobile/icon_man.png">{recipe.servingCount}</SummaryInfoSpan>
          <SummaryInfoSpan src="https://recipe1.ezmember.co.kr/img/mobile/icon_time2.png">{recipe.cookingTime}</SummaryInfoSpan>
          <SummaryInfoSpan src="https://recipe1.ezmember.co.kr/img/mobile/icon_star.png">{recipe.difficultyLevel}</SummaryInfoSpan>
        </SummaryInfo>

        <ButtonList>
          <ButtonListAnchor>
            <ButtonListImg src="https://recipe1.ezmember.co.kr/img/mobile/btn_view_scrap.png" />
            <div>스크랩{" "}
              <b>12,345</b>
            </div>
          </ButtonListAnchor>

          <ButtonListAnchor>
            <ButtonListImg src="https://recipe1.ezmember.co.kr/img/mobile/btn_view_talk.png" />
            <div>공유</div>
          </ButtonListAnchor>

          <ButtonListAnchor>
            <ButtonListImg src="https://recipe1.ezmember.co.kr/img/mobile/btn_view_re.png" />
            <div>댓글{" "}
              <b>123</b>
            </div>
          </ButtonListAnchor>
        </ButtonList>

        <ButtonList>
          
          <ButtonListAnchor>
            <Tooltip title="레시피ID" placement="top" arrow>
              <ButtonListImg src="https://recipe1.ezmember.co.kr/img/btn2_id.png"/>
            </Tooltip>
          </ButtonListAnchor>

          <ButtonListAnchor>
            <Tooltip title="메모" placement="top" arrow>
              <ButtonListImg src="https://recipe1.ezmember.co.kr/img/btn2_note.png"/>
            </Tooltip>
          </ButtonListAnchor>
        </ButtonList>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <h2>재료</h2>
        <div>
        {
          recipe.ingredientGroups?.map((ingredientGroup, index, ingredientGroups) => (

            <IngredientGroupDiv key={index} length={ingredientGroups.length}>
              <h4>[{ingredientGroup.name}]</h4>
            <ul>
              {ingredientGroup.ingredients.map((ingredient, i) => (
                <IngredientLi key={i} length={ingredientGroups.length}>{ingredient.name} {ingredient.amount}</IngredientLi>
              ))}
            </ul>
            </IngredientGroupDiv>

          ))
        }
        </div>
      </ContentWrapper>
      <Line />
      {
        recipe.knowhowVideos?.length && (
          <>
            <ContentWrapper>
              <h2>노하우 영상</h2>
              <Carousel
                height={150}
                animation="slide"
                autoPlay={false}
                cycleNavigation
                navButtonsAlwaysVisible
                navButtonsProps={{
                  style: {
                    backgroundColor: '#74b243'
                  }
                }}>
              {
                pack(recipe.knowhowVideos)
              }
              </Carousel>
            </ContentWrapper>
            <Line />
          </>
        ) 
      }
      {
        recipe.videoUrl && (
          <>
            <ContentWrapper>
              <h2>동영상</h2>
              <ReactPlayer controls url={recipe.videoUrl} style={{"margin" : "0 auto"}}/>
            </ContentWrapper>
            <Line />
          </>
        )
      }

      <ContentWrapper>
        <h2>조리순서</h2>

        <ToggleButtonGroup
          sx={{"float": "right"}}
          value={recipeStepView}
          exclusive
          onChange={handleRecipeStepViewChange}>
          <ToggleButton value="bigImage" aria-label="bigImage">
            <Image />
          </ToggleButton>
          <ToggleButton value="image" aria-label="image">
            <AutoAwesomeMosaic />
          </ToggleButton>
          <ToggleButton value="text" aria-label="text">
            <ViewList />
          </ToggleButton>
        </ToggleButtonGroup>

        {
          recipe.recipeSteps?.map((recipeStep, index) => (
            <Grid key={index} container spacing={2}>
              <Grid item xs={1}>
                <Avatar sx={{ bgcolor: "#74b243"}}>{index + 1}</Avatar> 
              </Grid>
              <Grid item xs={recipeStepView === "image" ? 7 : 11}>
                {recipeStep.description}
              </Grid>
              <Grid item xs={recipeStepView === "image" ? 4 : recipeStepView === "bigImage" ? 12 : 0} sx={{"textAlign": "center"}}>
                {
                  recipeStep.photoUrl && (
                  <RecipeStepPhoto
                    src={recipeStep.photoUrl}
                    alt=""
                    style={recipeStepView === "image" ? {} : recipeStepView === "bigImage" ? {"width":"640px", "height": "480px"} : {"display": "none"}} />
                  )
                }
              </Grid>
            </Grid>
          ))
        }
        <Carousel
          height={480}
          animation="slide"
          autoPlay={false}
          cycleNavigation
          sx={{"width": "640px", "margin": "0 auto"}}>
          <img src={recipe.mainPhotoUrl} alt="" style={{"width": "100%"}}/>
          <img src={recipe.completionPhotoUrl} alt="" style={{"width": "100%"}}/>
        </Carousel>
        
      </ContentWrapper>
      <img src="https://recipe1.ezmember.co.kr/img/tit_tip.gif" alt=""/>
      <ContentWrapper>
        <span>{recipe.tip}</span>
        <DateInfoDiv>
          <DateParagraph>
            <b>등록일: {recipe.createdAt}</b>{" | "}
            <b>수정일: {recipe.updatedAt}</b>
          </DateParagraph>
          <DateNotice>저작자의 사전 동의 없이 이미지 및 문구의 무단 도용 및 복제를 금합니다.</DateNotice>
        </DateInfoDiv>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <h2>레시피 작성자</h2>
        
        <Username>
        <Avatar src="/logo192.png"
          style={{border: "1px solid #ddd", display:"inline-block"}}/>
        <span>{recipe.nickname}
        {
          !(recipe.isFollowingChef) && <FollowButton>+소식받기</FollowButton>
        }
        </span>
        </Username>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <h2>댓글 <span style={{color: "#74b243"}}>{recipe.comments?.length}</span></h2>
        {recipe.comments?.map((comment, index) => (
          <div style={{display: "flex",
          paddingLeft: comment.level * 30 + "px",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderTop: "1px lightgray solid"
          }}
          key={index}>
            <Avatar
              src={comment.profileUrl}
              style={{border: "1px solid #ddd", display:"inline-block"}} />
            <span>
              <div>
                {comment.nickname} {comment.createdAt} 
              </div>
              <div>
                {comment.contents}
              </div>
              {
                comment.photoUrl && (
                <img src={comment.photoUrl}
                  style={{ float:"left", width:"60px", height:"60px"}} alt=""/>
                )
              }
              
            </span>
          </div>
        ))}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CommentDiv>
              <UploadImage width="108px" height="108px" name="commentPhotoFileList"/>
              <TextField
                {...register("contents", { required: true })}
                placeholder="댓글을 남겨주세요."
                variant="outlined"
                size="small"
                color="success"
                sx={{ width: '600px'}}
                multiline
                rows={4}
                required />
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  sx={{height: "108px"}}
                  onClick={handleSubmit(onSubmit)}>등록</Button>
            </CommentDiv>
          </form>
        </FormProvider>
      </ContentWrapper>
    </>
  )
}

const MainPhoto = styled.img`
  width: 640px;
  height: 480px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`
const MainPhotoWrapper = styled.div`
  position: relative;
  height: 600px;
  display: block;
`
const UserInfo = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  text-align: center;
  width: 100%;
`
const UserInfoPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 5px;
  background: white;
`
const UserInfoPhotoAnchor = styled.a`
  width: 130px;
  height: 130px;
  background: gray;
  padding: 5px;
  border-radius: 50%;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
`
const Username = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`
const FollowButton = styled.button`
  margin-left:0.75em;
  position: absolute;
  left: 100%;
  white-space: nowrap;
  border: 1px solid #74b243;
  border-radius: 10%;
  color: #74b243;
  background-color: #fff;

  &:hover {
    opacity: 0.5;
  }
`

const UsernameWrapper = styled.div`
  display:block;
  margin-top: 0.5rem;

`

const ContentWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 40px;
`

const SummaryInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgray;
`
interface SummaryInfoProps {
  src: string,
  children?: ReactNode,
  className?: string
}
const _SummaryInfoSpan = ({src, children, className}: SummaryInfoProps) => (
  <span className={className}>{children}</span>
);

const SummaryInfoSpan = styled(_SummaryInfoSpan)`
  display: inline-block;
  width: 33%;
  padding-top: 55px;
  background: url("${(props:SummaryInfoProps) => props.src}") center no-repeat;
  background-size:35px;
`

const ButtonList = styled.div`
  padding-top: 30px;
  text-align: center;
  border-bottom: 1px solid lightgray;
`

const ButtonListAnchor = styled.a`
  width: 25%;
  display: inline-block;
`

const ButtonListImg = styled.img`
  width: 70px;
  height: 70px;
`
const Line = styled.div`
  width: 100%;
  height: 10px;
  background-color: lightgray;
`

interface IngredientGroupDivProps {
  length: number,
  children?: ReactNode,
  className?: string
}
const _IngredientGroupDiv = ({length, children, className}: IngredientGroupDivProps) => (
  <div className={className}>{children}</div>
);
const IngredientGroupDiv = styled(_IngredientGroupDiv)`
  width: ${(props:IngredientGroupDivProps) => props.length > 1 ? "50%": "100%"};
  display: inline-block;
  vertical-align: top;
`


interface IngredientLiProps {
  length: number,
  children?: ReactNode,
  className?: string
}
const _IngredientLi = ({length, children, className}: IngredientLiProps) => (
  <li className={className}>{children}</li>
);
const IngredientLi = styled(_IngredientLi)`
  width: 50%;
  display: ${({length}) => length > 1 ? "block" : "inline-block"};
  list-style: none;
`

const RecipeStepPhoto = styled.img`
  width: 256px;
  height: 192px;
`

const DateInfoDiv = styled.div`
  background: #f9f9f9;
  border: 1px dashed #ccc;
  margin: 40px 0px;
  padding: 12px 18px 12px 18px;
  text-align: right;
`

const DateParagraph = styled.p`
  float: left;
  margin: 0;

  line-height: 1;
  padding: 7px 0 0 0;
  color: #999;
  font-size: 13px;
`

const DateNotice = styled.span`
  display: inline-block;
  background: url("https://recipe1.ezmember.co.kr/img/icon_noti.png") left top no-repeat;
  padding: 5px 0 6px 31px;
  font-size: 13px;
  color: #999;
`


const CommentDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > label {
    width: 120px;
    display: inline-block;
  }
`