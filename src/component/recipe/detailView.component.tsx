import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect, ReactNode } from "react";
import RecipeService from "../../services/recipe.service";
import { Recipe } from "../../types/detailView.type";
import { Backdrop, CircularProgress } from "@mui/material";


export default function DetailView() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<Recipe|undefined>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if(recipeId) {
      RecipeService.getRecipe(recipeId).then(setRecipe).then(() => setLoading(false));
    }
  }, [recipeId])

  return (
    <>
      <h2>레시피 상세보기</h2>
      {loading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : recipe ? (
        <>
          <MainPhotoWrapper>
            <MainPhoto src={recipe.mainPhotoUrl} />
            <UserInfo>
              <UserInfoPhotoAnchor>
                <UserInfoPhoto src="/logo192.png" />
              </UserInfoPhotoAnchor>
              <UsernameWrapper>
                <Username>
                  사용자 아이디 테스트 사용자 아이디
                  <FollowButton>소식받기</FollowButton>
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
                <ButtonListImg src="https://recipe1.ezmember.co.kr/img/btn2_id.png"/>
              </ButtonListAnchor>

              <ButtonListAnchor>
                <ButtonListImg src="https://recipe1.ezmember.co.kr/img/btn2_note.png"/>
              </ButtonListAnchor>
            </ButtonList>
          </ContentWrapper>
          <Line />
          <ContentWrapper>
            <h2>재료</h2>
            <div>
            {
              recipe.ingredientGroups?.map((ingredientGroup, index, ingredientGroups) => (

                <IngredientGroupDiv length={ingredientGroups.length}>[{ingredientGroup.name}]
                <ul>
                  {ingredientGroup.ingredients.map(ingredient => (
                    <IngredientLi length={ingredientGroups.length}>{ingredient.name} {ingredient.amount}</IngredientLi>
                  ))}
                </ul>
                </IngredientGroupDiv>

              ))
            }
            </div>
          </ContentWrapper>
          <Line />
          <ContentWrapper>
            <h2>조리순서</h2>
            <ul>
            {
              recipe.recipeSteps && recipe.recipeSteps.map((recipeStep, index) => (
                <li>{"Step " + (index + 1)} {recipeStep.description}
                <img src={recipeStep.photoUrl} alt="이미지 공간"/>
                </li>
              ))
            }
            </ul>
            <CompletionPhoto src={recipe.completionPhotoUrl}/>
          </ContentWrapper>
          <img src="https://recipe1.ezmember.co.kr/img/tit_tip.gif" />
          <ContentWrapper>
            <span>test tip test tip.</span>

          </ContentWrapper>
        </>
      ) : (
        <p>존재하지 않는 레시피입니다.</p>
      )}
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
`
const FollowButton = styled.button`
  margin-left:0.75em;
  position: absolute;
  left: 100%;
  white-space: nowrap;
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

const CompletionPhoto = styled.img`

  width: 640px;
  height: 480px;
  margin 0 auto;
  display: block;
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
  <div className={className}>{children}</div>
);
const IngredientLi = styled(_IngredientGroupDiv)`
  width: 50%;
  display: ${({length}) => length > 1 ? "block" : "inline-block"};
  list-style: none;
`