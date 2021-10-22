import React, { useState,useEffect } from 'react'
import { DataInfo } from './DataInfo';
import { useHistory } from 'react-router-dom'

// import Select from 'react-select';

const Home = () => {
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('userInfo')){
            history.push("/")
        }else{
            history.push("/loginform")
        }
            //eslint-disable-next-line
    }, []);
    const HeavenlyBodies = [
    "Blackhole",
    "Magnetar",
    "Pulsar"
    ];
    const [drop, setDrop] = useState("BlackHole")
    const HandleOnChange = (e) => {
        setDrop(e.target.value)
    }
    return (
        <div className="container my-3">
                <select onChange={HandleOnChange}>
                    {HeavenlyBodies.map((val) => (
                    <option value={val} drop={val}>
                        {val}
                    </option>
                    ))}
                </select>
            
            <div className="my-3 card container">
                <div className="card-body">
                    <h5 className="card-title">{drop}</h5>
                    <p className="card-text">
                        <DataInfo inform={drop}/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
