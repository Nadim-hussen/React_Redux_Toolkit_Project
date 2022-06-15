import React, { useState } from 'react'
import './AddPage.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addPost } from '../features/Posts';
const { v4: uuidv4 } = require("uuid");
function AddPage() {
    const [post,setPost] = useState('')
    const [writer,setWriter] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const posts ={id:uuidv4(), post, writer}
        dispatch(addPost(posts))
        navigate('/')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="post">Post:</label>
                <textarea name="post" value={post} id="post" cols="30" rows="10" onChange={(e)=>setPost(e.target.value)}></textarea>
            </div>
            <div>
                <label htmlFor="writer">Writer:</label>
                <input name="writer" value={writer} id="writer" onChange={(e)=>setWriter(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddPage