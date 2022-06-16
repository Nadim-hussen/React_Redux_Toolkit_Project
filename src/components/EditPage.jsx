import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router'
import { editPost } from '../features/Posts';
import { useDispatch } from 'react-redux';
import './AddPage.css'

function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id
  const [post, setPost] = useState(location.state.post);
  const [writer, setWriter] = useState(location.state.writer);

  const dispatch = useDispatch();
  const updatePost = (e) => {
    e.preventDefault();
    dispatch(editPost({id, post, writer}))
    navigate('/', { replace: true })
  }
  return (
    <div>
        <form action="" onSubmit={updatePost}>
          <div>
            <label htmlFor="post">Post :</label>
            <textarea name="post" value={post} id="post" cols="30" rows="10" onChange={(e)=>setPost(e.target.value)}></textarea>
          </div>
          <div>
            <label htmlFor="writter">Writter :</label>
            <input type="text" value={writer} name='writter' id="writter" onChange={(e)=>setWriter(e.target.value)}/>
          </div>
          <button type='submit'>Edit</button>
        </form>
    </div>
  )
}

export default EditPage