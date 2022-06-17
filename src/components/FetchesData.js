import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPosts} from '../features/Fetch'
import './fetch.css'
function FetchesData() {
    const {isLoading, fetches, isError} = useSelector(state=>state.fetches)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
  return (
    <div>
        {isLoading && <h2>isLoading ...</h2>}
        {isError && <h2>{isError}</h2>}
        {fetches && fetches.map((item)=>{
            return(
                <div className='fetch' key={item.id}>
                    <h4 className='title'>{item.title}</h4>
                    <p className='body'>{item.body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FetchesData