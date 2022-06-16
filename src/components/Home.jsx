import React from 'react'
import {  useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {deletePost} from '../features/Posts'
import './home.css'
export default function Home() {
  const posts = useSelector((state)=>state.postSlice.posts)
  const dispatch = useDispatch();
  const deleteUserPost=(id)=>{
    dispatch(deletePost(id));
  }
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch()
  // })
  return (
    <div>
      <div className='posts'>
        {
          posts && posts.map((item)=>{
            const {id, post, writer} = item
            return(
              <div key={item.id}>

                  <h2> {item.post} </h2>
                  <p> {item.writer} </p>
                  <div>
                    <Link className='link' to='/edit_page' state={{id,post,writer}}> Edit </Link>
                    <button onClick={()=>deleteUserPost(id)}>Delete</button>
                  </div>
            </div>
            )

          })
        }
        </div>
    </div>
  )
}
