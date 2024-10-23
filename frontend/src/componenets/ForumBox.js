import React from 'react';
import Avatar from '@mui/material/Avatar';
import './css/ForumBox.css';

function ForumBox() {
  return (
    <div className='forumBox'>
      <div className='forumBox__info'>
        <Avatar />
      </div>
      <div className='forumBox__forum'>
        <p>Seeking Answers? Start Here!</p>
        <p>Post Your Questions, Get Help</p>

      </div>
    </div>
  );
}

export default ForumBox;
