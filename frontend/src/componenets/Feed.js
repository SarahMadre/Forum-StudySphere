import React, { useEffect, useState } from 'react'
import ForumBox from './ForumBox'
import './css/Feed.css';
import Post from './Post';
import axios from 'axios'

function Feed() {
  const [posts, setPosts]= useState([])
  useEffect(() =>{
    axios.get("/api/questions").then((res) =>{
      console.log(res.data.reverse());
      setPosts(res.data)

    }).catch((e) =>{
      console.log(e)
    })

  }, [])
  return (
    <div className='feed'>
        <ForumBox />
        {
          posts.map((post, index) => (
          <Post key ={index} post = {post} />
        ))
        }
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
    
    </div>
  )
}

export default Feed