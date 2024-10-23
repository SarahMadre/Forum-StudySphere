import React from 'react'
import ForumHeader from "./ForumHeader"
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Feed from './Feed'
import './css/Forumm.css'

function Forumm() {
  return (
    <div className='forumm'>
        <ForumHeader />
         <div className='forum__contents'>
            <div className='forum__content'>
              <Sidebar />
              <Feed />
              <Widgets />
         
            </div>
         </div>
    </div>
  )
}

export default Forumm