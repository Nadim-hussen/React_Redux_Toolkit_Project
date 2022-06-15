import React from 'react'
import {  useSelector } from "react-redux";
import './home.css'
export default function Home() {
  const posts = useSelector((state)=>state.postSlice.posts)
  console.log(posts)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch()
  // })
  return (
    <div>
      <div className='posts'>
        {
          posts && posts.map((item)=>{
            return(
              <div key={item.id}>

                  <h2> {item.post} </h2>
                  <p> {item.writer} </p>

            </div>
            )

          })
        }
        </div>
    </div>
  )
}
