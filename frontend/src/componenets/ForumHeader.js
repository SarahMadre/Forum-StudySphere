import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Input } from '@mui/material';
import './css/ForumHeader.css';
import Modal from "react-responsive-modal";
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css';
import { ExpandMore } from '@mui/icons-material';
import axios from 'axios';
import VideocamIcon from '@mui/icons-material/Videocam';







function ForumHeader() {

  const[isModalOpen, setIsModalOpen]= useState(false)
  const [inputUrl, setInputUrl]=useState("")
  const [question, setQuestion]=useState("")
  const Close= (<CloseIcon />)

  const handleSubmit = async() => {
    if (question !== ""){
      
      const config={
        headers:{
          "Content-Type": "application/json"
        },
      };

      const body={
        questionName: question,
        questionUrl: inputUrl,
      };
      await axios
      .post("/api/questions",body,config)
      .then((res) =>{
        console.log(res.data);
        alert("Question added successfully")
        window.location.href="/";
      })
      .catch((e) => {
        console.log(e);
        alert('Error in adding quetsion')
      });
    }

  };



  return (
    <div className='fHeader'>
        <div className='fHeader-contnt'>
            <div className='fHeader__logo'>
                <img src="https://as2.ftcdn.net/v2/jpg/03/67/59/59/1000_F_367595910_tUsL5PKv3a45Kkl18gt8HYx4oTsCcAkL.jpg" alt="" />
                <div className='fHeader__icons'>
                    <div className='qHeader__icon'><HomeIcon /></div>
                    {/* <div className='qHeader__icon'><FeaturedPlayListIcon /></div>
                    <div className='qHeader__icon'><AssignmentIcon /></div>
                    <div className='qHeader__icon'><PeopleAltIcon /></div> */}
                    <div className='qHeader__icon'><VideocamIcon /></div>
                </div>
            </div>
            <div className='fHeader__input'>
                {/* <SearchIcon />
                <input type="text" placeholder='Search Questions'/> */}
                <h2>StudySphere Q&A Hub</h2>
            </div>
            <div className='fHeader__rem'>
            <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
            <Modal
               open={isModalOpen} 
               CloseIcon={Close} 
               onClose  ={() => setIsModalOpen(false)}>
               
              <div className='modal__title'>
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className='modal__info'>
                <Avatar className='avatar'/>
                <div className='modal__scope'>
                  <PeopleAltIcon />
                  <p>Public</p>
                  <ExpandMore />
                </div>
              </div>
              <div className='modal__Field'>
                <Input
                value={question}
                 onChange={(e) => setQuestion(e.target.value)}
                 type = "text" placeholder='Ask your question' />
                <div style={{
                  display:"flex",
                  flexDirection:"column",
                }}>
                  <input 
                  type="text" 
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin:"5px 0",
                    border:"1px solid lightgray",
                    padding:"10px",
                    outline:"2px solid #000",


                  }}
                  placeholder='Optional include a link that gives context' />

                  {
                    inputUrl !== "" && <img style={{
                      height:"40vh",
                      objectFit:"contain"
                    }}
                    src={inputUrl} alt="displayimage" />
                  }

                  

                </div>

              </div>
              <div className='modal__buttons'>
                <button className='cancel' onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button onClick={handleSubmit} type='submit' className='add'>
                  Add Question
                </button>

              </div>
            </Modal>
            
            </div>
            
        
      </div>
    </div>
  )
}

export default ForumHeader