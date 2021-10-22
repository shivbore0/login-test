import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom'

const Task = () => {
    const initialnotes = []
    const [notes, setNotes] = useState(initialnotes)
    const [datainput, setDatainput] = useState("")
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('userInfo')){
            history.push("/task")
        }else{
            history.push("/loginform")
        }
            //eslint-disable-next-line
    }, []);

    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/todos").then((res) => {
            setNotes(res.data.slice(0,5));
        });
    }, []);

    const addNotes = (e) => {
        e.preventDefault();
        if (datainput !== "") {
            setNotes([...notes, datainput]);
            document.getElementById("text").value = "";
        } else {
            alert("add a note");
        }
    };
    const deleteNotes = (e) => {
        setNotes((notes) => {
            return notes.filter((note) => {
                return note.id !== e;
            });
        });
    };
    const HandleOnChange = (e) => {
        setDatainput({
            title: e.target.value, id: notes.length + 1
        })
    }
    return (
        <div>
            <div className="container my-5">
                <div className="mb-3">
                    <input className="form-control" id="text" type="text" placeholder="Add a notes" onChange={HandleOnChange} aria-label="default input example" />
                    <button type="button" className="btn btn-dark my-2" onClick={addNotes} >Add Notes</button>
                </div>
            </div>
            {notes.map((event,number) => {
                return (
                    <div className="container my-2"  style={{border:"2px solid black"}}>
                        <ul className="list-group d-flex" key={number}>
                            <li style={{listStyle:"none"}} className="list">{event.id}</li>
                            <li style={{listStyle:"none"}} className="list">{event.title}</li>
                        </ul>
                        <div className="mx-3 my-3">
                        <button type="button" className="btn btn-danger" onClick={() => {deleteNotes(event.id);}}>
                            Delete
                        </button>
                        </div>
                    </div>
    )
})

            }
        </div >
    )
}

export default Task
