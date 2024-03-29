import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import { BasicMenu } from '../BasicMenu';
/**
 * login 해야 하는 지 profile  혹은 레시피 등록 하는 라우트 인지 구별 할 수 있게
 * 컴포넌트 사용
 * //  * 프로파일로 변경 되었을 때는 user 프로파일 이미지로 대체 후 단순 링크 에서
 * 드랍다운 컴포넌트로 변경됨 까지 고려 해야 함  redux에 profile을 저장한 후에
 * 프로파일 이미지를 가져온다 리덕스에서.
 *
 * */

interface IIconProps {
  icon?: 'login' | 'profile' | 'recipe';
}

export const UserIcon = (): ReactElement => {
  const navigate = useNavigate();

  const goUrl = (path: string) => {
    navigate(path);
  };

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const myPageMenuOpen = Boolean(anchorElement);
  const myPageAnchorClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    /*
    if (!AuthService.getCurrentUser()) {
      goUrl('/login');
    } else {
      setAnchorElement(e.currentTarget);
    }
    */

    setAnchorElement(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <Wrapper>
      {/* user 인증 확인 후 ui 변경 */}
      <Round
        onClick={myPageAnchorClickHandler}
        src="/assets/icon_user.png"
        alt="로그인"
      />
      <BasicMenu open={myPageMenuOpen} handleClose={handleClose}>
        <MenuItem
          onClick={() => {
            goUrl('/myhome');
            handleClose();
          }}
        >
          마이홈
        </MenuItem>
        <MenuItem
          onClick={() => {
            AuthService.logout();
            goUrl('/login');
          }}
        >
          로그아웃
        </MenuItem>
      </BasicMenu>
      <Round
        // 다른 팝업 창을 띄운다음 두가지 path를 보여 준다.
        onClick={() => goUrl('/recipe/register')}
        src="/assets/recipe_enroll.png"
        alt="레시피 등록"
      />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 16px;
  padding-left: 50px;
  position: relative;
`;

export const Round = styled.img`
  height: 40px;
  width: 44px;
  border-radius: 50%;
  vertical-align: middle;
  border: 0;
  margin-left: 16px;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 5px 15px;
  text-align: center;
`;
