import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setUser } from './features/user/user-slice';

function ReduxExample() {
  const user = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setUser({
        userId: 'admin',
        email: 'admin@recipe.com',
        nickname: 'test',
        token: 'qwer1234',
      }),
    );
  };
  if (!user.userId) {
    return <button onClick={handleClick}>login</button>;
  }
  return (
    <div>
      <p>id is {user.userId}</p>
      <p>email is {user.email}</p>
      <p>nickname is {user.nickname}</p>
      <p>token is {user.token}</p>
    </div>
  );
}

export default ReduxExample;
