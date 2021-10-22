import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const User = () => {
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('userInfo')){
        history.push("/user")
    }else{
        history.push("/loginform")
    }
        //eslint-disable-next-line
}, []);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(Object.entries(userInfo).length===0){
      console.log('users is empty')
  }
  const Logout = () => {
    window.location.href = "http://localhost:3000/";
    localStorage.removeItem("userInfo");
  };
  const Changingpassword = () => {
    history.push("/changingpassword");
  };
    return (
        <div>
            <div className="container">
                <h3>Username</h3>
                <input disabled className="form-control" type="text" value={userInfo.username} aria-label="readonly input example" readonly/>
            </div>
            <div className="container my-3">
               <h3>Password</h3>
               <input type="password" className="form-control" value={userInfo.password} name="password" disabled id="inputPassword"/>
            </div>
            <div className="container">
            <button onClick={Changingpassword} className="btn-dark">Change password</button>
            <button onClick={Logout} className="btn-info">Logout</button>
            </div>
        </div>
    )
}

export default User
