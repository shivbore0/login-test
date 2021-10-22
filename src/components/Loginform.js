import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Loginform = () => {
    const [logininfo, setLogininfo] = useState({username:"",password:""})
    const history = useHistory()


    const HandleOnSubmit=async(e)=>{
        e.preventDefault();
        const credentials = await JSON.stringify({username:logininfo.username,password:logininfo.password})
        localStorage.setItem("userInfo",credentials)
        console.log(credentials)
        // localStorage.setItem({userInfo:({username:logininfo.username,password:logininfo.password})})
        history.push("/")
    }
   
    const onChange =(e)=>{
        setLogininfo({...logininfo,[e.target.name]:e.target.value })
        console.log(logininfo)
    }
    return (
        <div>
            <div className="container my-5">
            <form onSubmit={HandleOnSubmit}>
              <div className="mb-3 row">
                    <label for="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                    <input type="text" required className="form-control" name="username" id="username" onChange={onChange}/>
                    </div>
              </div>
              <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" required className="form-control" name="password" onChange={onChange} id="inputPassword"/>
                    </div>
              </div>
              <div className="btn">
                        <button type="submit"className="btn btn-primary">
                            Submit
                        </button>
              </div>
              </form>
            </div>
        </div>
    )
}

export default Loginform
