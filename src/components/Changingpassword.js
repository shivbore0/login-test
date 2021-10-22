import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
const Changingpassword = () => {
    const [password, setPassword] = useState("")
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const history = useHistory();
    const handleButton = () => {
        history.push("/user");
        localStorage.setItem("userData",JSON.stringify({user: userInfo.user,password: password}));
      };
      const onChange=(e)=>{
          setPassword(e.target.value)
      }
    return (
        <div>
            <div className="container">
                <h4>{userInfo.user}</h4>
            </div>
            <div className="container">
            <input type="password" required className="form-control" placeholder="enter a new password" name="password" onChange={onChange} id="inputPassword"/>
            </div>
            <div className="container">
               <button className="btn-dark" onClick={handleButton}>Click to save</button>
            </div>

        </div>
    )
}

export default Changingpassword
