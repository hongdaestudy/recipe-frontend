import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { stringify } from 'qs';

export function useRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      // 디버깅 필요
      // back(steps = 1) {
      //   navigate(-steps);
      // },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      push(path: RoutePath, search?: any) {
        navigate({
          pathname: path,
          search: search ? stringify(search, { indices: false }) : undefined,
        });
      },
    };
  }, [navigate]);
}

export type RoutePath =
  | '/'
  | '/recipe/list'
  | '/ranking'
  | '/class'
  | '/recipe/register'
  | '/recipe:recipeId'
  | '/login'
  | '/join'
  | '/profile'
  | '/myhome';
