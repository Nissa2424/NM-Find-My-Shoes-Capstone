import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import Routes from '../routes';
import Navigation from '../components/Navigation';

function Initialize() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          uid: authed.uid,
        };
        setUser(userInfoObj);
        console.warn(userInfoObj.uid);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div>
      {user ? (
        <>
          <Navigation />
          <Routes uid={user.uid} />
        </>
      ) : (
        /*  {
          SignIn user={user}
        } */
        'This is a comment to test '
      )}
    </div>
  );
}

export default Initialize;
