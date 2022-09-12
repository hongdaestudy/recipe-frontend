import AuthService from "../../services/auth.service";
//import IUser from "../../types/user.type";
import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [profileState, setProfileState] = useState({
    userReady: false,
    currentUser: {
      userId: '',
      email: '',
      nickname: '',
      accessToken: ''
    }
  });

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if(!currentUser) {
      alert('redirect to login page');
    }
    setProfileState({
      currentUser,
      userReady: true
    });
  }, []);

  return (
    <>
      {profileState.userReady ?
      <div>
        <p>
          <strong>User Id:</strong>{" "}
          {profileState.currentUser.userId}
        </p>
        <p>
          <strong>accessToken:</strong>{" "}
          {profileState.currentUser.accessToken}
        </p>
      </div>
      : "loading: spinner"}
    </>
  )
}