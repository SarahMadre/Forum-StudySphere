// // // // import React, { useState } from 'react';
// // // // import './css/Post.css';
// // // // import { Avatar, backdropClasses } from '@mui/material';
// // // // import {
// // // //     ArrowUpwardOutlined,
// // // //     ArrowDownwardOutlined,
// // // //     RepeatOutlined,
// // // //     ChatBubbleOutlined,
// // // //     ShareOutlined,
// // // //     MoreHorizOutlined
// // // // } from '@mui/icons-material';
// // // // import Modal from "react-responsive-modal";
// // // // import 'react-responsive-modal/styles.css';
// // // // import CloseIcon from '@mui/icons-material/Close';
// // // // import ReactQuill from 'react-quill';
// // // // import 'react-quill/dist/quill.snow.css';
// // // // import ReactTimeAgo from 'react-time-ago';




// // // // // function LastSeen({ date }) {
// // // // //     return (
// // // // //       <div>
// // // // //         Last seen: <ReactTimeAgo date={date} locale="en-US"/>
// // // // //       </div>
// // // // //     )
// // // // //   }


// // // // function LastSeen({ date }) {
// // // //     if (!date) return null; // Handle case where date is undefined
// // // //     return (
// // // //       <div>
// // // //         <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter"/>
// // // //       </div>
// // // //     );
// // // //   }

// // // // function Post(post) {

// // // //     const [isModalOpen, setIsModalOpen] = useState(false)
// // // //     const Close = (<CloseIcon />)




// // // //     return (
// // // //         <div className='post'>
// // // //             <div className='post__info'>
// // // //                 <Avatar />
// // // //                 <small>Username</small>
// // // //                 <small><LastSeen date={post?.createdAt} /></small>
// // // //                 {/* <small><LastSeen /></small> */}
// // // //             </div>
// // // //             <div className='post__body'>
// // // //                 <div className='post__question'>
// // // //                     <p>{post?.questionName}</p>
// // // //                     <button onClick={() => setIsModalOpen(true)} className='post_btnAnswer'>Answer</button>
// // // //                     <Modal
// // // //                         open={isModalOpen}
// // // //                         CloseIcon={Close}
// // // //                         onClose={() => setIsModalOpen(false)}>

// // // //                         <div className='modal__question'>
// // // //                             <h1>{}post?.questionName</h1>
// // // //                             <p>asked by {" "} <span className='name'>Username</span> on <span className='name'>{new Date(post?.createdAt).toLocaleString()}</span></p>
// // // //                         </div>
// // // //                         <div className='modal__answer'>
// // // //                             <ReactQuill placeholder='Enter your answer' />
// // // //                         </div>
// // // //                         <div className='modal__button'>
// // // //                             <button className='cancel' onClick={() => setIsModalOpen(false)}>
// // // //                                 Cancel
// // // //                             </button>
// // // //                             <button type='submit' className='add'>
// // // //                                 Add Answer
// // // //                             </button>

// // // //                         </div>


// // // //                     </Modal>
// // // //                 </div>

// // // //             </div>
// // // //             <div className='post__footer'>
// // // //                 <div className='post__footerAction'>
// // // //                     <ArrowUpwardOutlined />
// // // //                     <ArrowDownwardOutlined />
// // // //                 </div>
// // // //                 <RepeatOutlined />
// // // //                 <ChatBubbleOutlined />
// // // //                 <div className='post__footerLeft'>
// // // //                     <ShareOutlined />
// // // //                     <MoreHorizOutlined />
// // // //                 </div>
// // // //             </div>
// // // //             <p style={{
// // // //                 color: "rgba(0,0,0,0.5)",
// // // //                 fontSize: "12px",
// // // //                 fontWeight: "bold",
// // // //                 margin: "10px 0"

// // // //             }}
// // // //             > Answer
// // // //                 {/* {post?.allAnswers?.length} */}
// // // //                 {/* {post?.allAnswers?.length > 0 ? post.allAnswers.length : 0} Answer{post?.allAnswers?.length === 1 ? '' : 's'} */}
// // // //             </p>
// // // //             <div style={{
// // // //                 margin: "5px 0px 0px 0px",
// // // //                 padding: "5px 0px 0px 20px",
// // // //                 borderTop: "1px solid lightgray",

// // // //             }}
// // // //                 className='post__answer'>
// // // //                 <div
// // // //                     style={{
// // // //                         display: "flex",
// // // //                         flexDirection: "column",
// // // //                         width: "100%",
// // // //                         padding: "10px 5px",
// // // //                         borderTop: "1px solid lightgray"
// // // //                     }}
// // // //                     className='post-answer-container'>
// // // //                     <div style={{
// // // //                         display: "flex",
// // // //                         alignItems: "center",
// // // //                         flexDirection: "row",
// // // //                         marginBottom: "10px",
// // // //                         fontSize: "12px",
// // // //                         fontWeight: 600,
// // // //                         color: "#888",
// // // //                     }}
// // // //                         className='post-answered'>
// // // //                         <Avatar />
// // // //                         <div style={{
// // // //                             margin: "0px 10px",
// // // //                         }}
// // // //                             className='post-info'>
// // // //                             <p>Username</p>
// // // //                             <span>Timestamp</span>
// // // //                         </div>
// // // //                     </div>
// // // //                     <div className='post-answer'>This is a test answer</div>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default Post;


// // // import React, { useState } from 'react';
// // // import './css/Post.css';
// // // import { Avatar } from '@mui/material';
// // // import {
// // //     ArrowUpwardOutlined,
// // //     ArrowDownwardOutlined,
// // //     RepeatOutlined,
// // //     ChatBubbleOutlined,
// // //     ShareOutlined,
// // //     MoreHorizOutlined
// // // } from '@mui/icons-material';
// // // import Modal from "react-responsive-modal";
// // // import 'react-responsive-modal/styles.css';
// // // import CloseIcon from '@mui/icons-material/Close';
// // // import ReactQuill from 'react-quill';
// // // import 'react-quill/dist/quill.snow.css';
// // // import ReactTimeAgo from 'react-time-ago';
// // // import axios from 'axios';

// // // function LastSeen({ date }) {
// // //     if (!date) return null; // Handle case where date is undefined
// // //     return (
// // //         <div>
// // //             <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
// // //         </div>
// // //     );
// // // }

// // // function Post({ post }) {
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     const [answer, setAnswer] =useState("")
// // //     const Close = (<CloseIcon />);

// // //     const handleQuill = (value)=>{
// // //         setAnswer(value)
// // //     }
// // //     // console.log(answer)

// // //     const handleSubmit = async() =>{
// // //         if(post?._id && answer != ""){
// // //             const config ={
// // //                 headers:{
// // //                     "Content-Type":"application/json"
// // //                 }
// // //             }
// // //             const body ={
// // //                 answer: answer,
// // //                 questionId:post?._id
// // //             }
// // //             await axios.post('/api/answers',body,config).then((res) =>{
// // //                 console.log(res.data)
// // //                 alert('Answer added successfully')
// // //                 setIsModalOpen(false)
// // //                 window.location.href='/'
// // //             }).catch((e) =>{
// // //                 console.log(e);
// // //             })
// // //         }
// // //     };


// // //     return (
// // //         <div className='post'>
// // //             <div className='post__info'>
// // //                 <Avatar />
// // //                 <small>Username</small>
// // //                 <small><LastSeen date={post?.createdAt} /></small>
// // //             </div>
// // //             <div className='post__body'>
// // //                 <div className='post__question'>
// // //                     <p>{post?.questionName}</p>
// // //                     <button onClick={() => {
// // //                         setIsModalOpen(true);
// // //                         console.log(post?._id);

// // //                     } } className='post_btnAnswer'>Answer</button>
// // //                     <Modal
// // //                         open={isModalOpen}
// // //                         closeIcon={Close}
// // //                         onClose={() => setIsModalOpen(false)}>

// // //                         <div className='modal__question'>
// // //                             <h1>{post?.questionName}</h1>
// // //                             <p>asked by <span className='name'>Username</span> on <span className='name'>{new Date(post?.createdAt).toLocaleString()}</span></p>
// // //                         </div>
// // //                         <div className='modal__answer'>
// // //                             <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer' />
// // //                         </div>
// // //                         <div className='modal__button'>
// // //                             <button className='cancel' onClick={() => setIsModalOpen(false)}>
// // //                                 Cancel
// // //                             </button>
// // //                             <button onClick={handleSubmit} type='submit' className='add'>
// // //                                 Add Answer
// // //                             </button>
// // //                         </div>
// // //                     </Modal>
// // //                 </div>
// // //                 {
// // //                     <img src={post.questionUrl} alt = 'url' />
// // //                 }
// // //             </div>
// // //             <div className='post__footer'>
// // //                 <div className='post__footerAction'>
// // //                     <ArrowUpwardOutlined />
// // //                     <ArrowDownwardOutlined />
// // //                 </div>
// // //                 <RepeatOutlined />
// // //                 <ChatBubbleOutlined />
// // //                 <div className='post__footerLeft'>
// // //                     <ShareOutlined />
// // //                     <MoreHorizOutlined />
// // //                 </div>
// // //             </div>
// // //             <p style={{
// // //                 color: "rgba(0,0,0,0.5)",
// // //                 fontSize: "12px",
// // //                 fontWeight: "bold",
// // //                 margin: "10px 0"
// // //             }}>
// // //                 {post?.allAnswers?.length > 0 ? post.allAnswers.length : 0} Answer{post?.allAnswers?.length === 1 ? '' : 's'}
// // //             </p>
// // //             <div style={{
// // //                 margin: "5px 0px 0px 0px",
// // //                 padding: "5px 0px 0px 20px",
// // //                 borderTop: "1px solid lightgray",
// // //             }} className='post__answer'>
// // //                 <div style={{
// // //                     display: "flex",
// // //                     flexDirection: "column",
// // //                     width: "100%",
// // //                     padding: "10px 5px",
// // //                     borderTop: "1px solid lightgray"
// // //                 }} className='post-answer-container'>
// // //                     {
// // //                         post?.allAnswers?.map((_a) => (<>
// // //                         </>))
// // //                     }
// // //                     {post?.allAnswers?.map((answer, index) => (
// // //                         <div key={index} style={{
// // //                             display: "flex",
// // //                             alignItems: "center",
// // //                             flexDirection: "row",
// // //                             marginBottom: "10px",
// // //                             fontSize: "12px",
// // //                             fontWeight: 600,
// // //                             color: "#888",
// // //                         }} className='post-answered'>
// // //                             <Avatar />
// // //                             <div style={{
// // //                                 margin: "0px 10px",
// // //                             }} className='post-info'>
// // //                                 <p>{answer.username}</p>
// // //                                 <span>{new Date(answer.createdAt).toLocaleString()}</span>
// // //                             </div>
// // //                             <div className='post-answer'>{answer.content}</div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Post;

// // import { Avatar } from "@mui/material";
// // import {
// //   ArrowDownwardOutlined,
// //   ArrowUpwardOutlined,
// //   ChatBubbleOutlined,
// //   MoreHorizOutlined,
// //   RepeatOneOutlined,
// //   ShareOutlined,
// // } from "@mui/icons-material";
// // import React, { useState } from "react";
// // import "./css/Post.css";
// // import { Modal } from "react-responsive-modal";
// // import "react-responsive-modal/styles.css";
// // import CloseIcon from "@mui/icons-material/Close";
// // import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// // import ReactTimeAgo from "react-time-ago";
// // import axios from "axios";
// // import ReactHtmlParser from "html-react-parser";

// // function LastSeen({ date }) {
// //   return (
// //     <div>
// //       <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
// //     </div>
// //   );
// // }

// // function Post({ post }) {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [answer, setAnswer] = useState("");
// //   // const [showAnswers, setShowAnswers] = useState(false);

// //   const Close = <CloseIcon />;

// //   const handleQuill = (value) => {
// //     setAnswer(value);
// //   };

// //   const handleSubmit = async () => {
// //     if (post?._id && answer !== "") {
// //       const config = {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       };
// //       const body = {
// //         answer: answer,
// //         questionId: post?._id,
// //         // Removed user part
// //       };
// //       await axios
// //         .post("/api/answers", body, config)
// //         .then((res) => {
// //           console.log(res.data);
// //           alert("Answer added successfully");
// //           setIsModalOpen(false);
// //           window.location.href = "/";
// //         })
// //         .catch((e) => {
// //           console.log(e);
// //         });
// //     }
// //   };

// //   return (
// //     <div className="post">
// //       <div className="post__info">
// //         <Avatar src={post?.user?.photo} />
// //         <h4>{post?.user?.userName}</h4>

// //         <small>
// //           <LastSeen date={post?.createdAt} />
// //         </small>
// //       </div>
// //       <div className="post__body">
// //         <div className="post__question">
// //           <p>{post?.questionName}</p>
// //           <button
// //             onClick={() => {
// //               setIsModalOpen(true);
// //               console.log(post?._id);
// //             }}
// //             className="post__btnAnswer"
// //           >
// //             Answer
// //           </button>
// //           <Modal
// //             open={isModalOpen}
// //             closeIcon={Close}
// //             onClose={() => setIsModalOpen(false)}
// //             closeOnEsc
// //             center
// //             closeOnOverlayClick={false}
// //             styles={{
// //               overlay: {
// //                 height: "auto",
// //               },
// //             }}
// //           >
// //             <div className="modal__question">
// //               <h1>{post?.questionName}</h1>
// //               <p>
// //                 asked by <span className="name">{post?.user?.userName}</span> on{" "}
// //                 <span className="name">
// //                   {new Date(post?.createdAt).toLocaleString()}
// //                 </span>
// //               </p>
// //             </div>
// //             <div className="modal__answer">
// //               <ReactQuill
// //                 value={answer}
// //                 onChange={handleQuill}
// //                 placeholder="Enter your answer"
// //               />
// //             </div>
// //             <div className="modal__button">
// //               <button className="cancle" onClick={() => setIsModalOpen(false)}>
// //                 Cancel
// //               </button>
// //               <button onClick={handleSubmit} type="submit" className="add">
// //                 Add Answer
// //               </button>
// //             </div>
// //           </Modal>
// //         </div>
// //         {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
// //       </div>
// //       <div className="post__footer">
// //         <div className="post__footerAction">
// //           <ArrowUpwardOutlined />
// //           <ArrowDownwardOutlined />
// //         </div>
// //         <RepeatOneOutlined />
// //         <ChatBubbleOutlined />
// //         <div className="post__footerLeft">
// //           <ShareOutlined />
// //           <MoreHorizOutlined />
// //         </div>
// //       </div>
// //       <p
// //         style={{
// //           color: "rgba(0,0,0,0.5)",
// //           fontSize: "12px",
// //           fontWeight: "bold",
// //           margin: "10px 0",
// //         }}
// //       >
// //         {post?.allAnswers.length} Answer(s)
// //       </p>

// //       <div
// //         style={{
// //           margin: "5px 0px 0px 0px ",
// //           padding: "5px 0px 0px 20px",
// //           borderTop: "1px solid lightgray",
// //         }}
// //         className="post__answer"
// //       >
// //         {post?.allAnswers?.map((_a) => (
// //           <div
// //             key={_a._id} // Add key for mapping
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //               width: "100%",
// //               padding: "10px 5px",
// //               borderTop: "1px solid lightgray",
// //             }}
// //             className="post-answer-container"
// //           >
// //             <div
// //               style={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 marginBottom: "10px",
// //                 fontSize: "12px",
// //                 fontWeight: 600,
// //                 color: "#888",
// //               }}
// //               className="post-answered"
// //             >
// //               <Avatar src={_a?.user?.photo} />
// //               <div
// //                 style={{
// //                   margin: "0px 10px",
// //                 }}
// //                 className="post-info"
// //               >
// //                 <p>{_a?.user?.userName}</p>
// //                 <span>
// //                   <LastSeen date={_a?.createdAt} />
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // export default Post;

// import { Avatar } from "@mui/material";
// import {
//   ArrowDownwardOutlined,
//   ArrowUpwardOutlined,
//   ChatBubbleOutlined,
//   MoreHorizOutlined,
//   RepeatOneOutlined,
//   ShareOutlined,
// } from "@mui/icons-material";
// import React, { useState } from "react";
// import "./css/Post.css";
// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";
// import CloseIcon from "@mui/icons-material/Close";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import ReactTimeAgo from "react-time-ago";
// import axios from "axios";
// import ReactHtmlParser from "html-react-parser";

// function LastSeen({ date }) {
//   return (
//     <div>
//       <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
//     </div>
//   );
// }

// function Post({ post }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [answer, setAnswer] = useState("");
//   const [showAnswers, setShowAnswers] = useState(false); // State to toggle answers

//   const Close = <CloseIcon />;

//   const handleQuill = (value) => {
//     setAnswer(value);
//   };

//   const handleSubmit = async () => {
//     if (post?._id && answer !== "") {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const body = {
//         answer: answer,
//         questionId: post?._id,
//       };
//       await axios
//         .post("/api/answers", body, config)
//         .then((res) => {
//           console.log(res.data);
//           alert("Answer added successfully");
//           setIsModalOpen(false);
//           window.location.href = "/";
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     }
//   };

//   return (
//     <div className="post">
//       <div className="post__info">
//         <Avatar src={post?.user?.photo} />
//         <h4>{post?.user?.userName}</h4>

//         <small>
//           <LastSeen date={post?.createdAt} />
//         </small>
//       </div>
//       <div className="post__body">
//         <div className="post__question">
//           <p>{post?.questionName}</p>
//           <button
//             onClick={() => {
//               setIsModalOpen(true);
//               console.log(post?._id);
//             }}
//             className="post__btnAnswer"
//           >
//             Answer
//           </button>
//           <Modal
//             open={isModalOpen}
//             closeIcon={Close}
//             onClose={() => setIsModalOpen(false)}
//             closeOnEsc
//             center
//             closeOnOverlayClick={false}
//             styles={{
//               overlay: {
//                 height: "auto",
//               },
//             }}
//           >
//             <div className="modal__question">
//               <h1>{post?.questionName}</h1>
//               <p>
//                 asked by <span className="name">{post?.user?.userName}</span> on{" "}
//                 <span className="name">
//                   {new Date(post?.createdAt).toLocaleString()}
//                 </span>
//               </p>
//             </div>
//             <div className="modal__answer">
//               <ReactQuill
//                 value={answer}
//                 onChange={handleQuill}
//                 placeholder="Enter your answer"
//               />
//             </div>
//             <div className="modal__button">
//               <button className="cancle" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </button>
//               <button onClick={handleSubmit} type="submit" className="add">
//                 Add Answer
//               </button>
//             </div>
//           </Modal>
//         </div>
//         {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
//       </div>
//       {/* <div className="post__footer">
//         <div className="post__footerAction">
//           <ArrowUpwardOutlined />
//           <ArrowDownwardOutlined />
//         </div>
//         <RepeatOneOutlined />
//         <ChatBubbleOutlined />
//         <div className="post__footerLeft">
//           <ShareOutlined />
//           <MoreHorizOutlined />
//         </div>
//       </div> */}
//       <p
//         style={{
//           color: "rgba(0,0,0,0.5)",
//           fontSize: "12px",
//           fontWeight: "bold",
//           margin: "10px 0",
//         }}
//       >
//         {post?.allAnswers.length} Answer(s)
//       </p>

//       <button
//         onClick={() => setShowAnswers(!showAnswers)} // Toggle answers
//         className="toggle-answers-btn"
//         style={{
//           backgroundColor: "lightgray",
//           padding: "5px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         {showAnswers ? "Hide Answers" : "Show Answers"}
//       </button>

//       {showAnswers && ( // Conditionally render answers
//         <div
//           style={{
//             margin: "5px 0px 0px 0px ",
//             padding: "5px 0px 0px 20px",
//             borderTop: "1px solid lightgray",
//           }}
//           className="post__answer"
//         >
//           {post?.allAnswers?.map((_a) => (
//             <div
//               key={_a._id}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 padding: "10px 5px",
//                 borderTop: "1px solid lightgray",
//               }}
//               className="post-answer-container"
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   marginBottom: "10px",
//                   fontSize: "12px",
//                   fontWeight: 600,
//                   color: "#888",
//                 }}
//                 className="post-answered"
//               >
//                 <Avatar src={_a?.user?.photo} />
//                 <div
//                   style={{
//                     margin: "0px 10px",
//                   }}
//                   className="post-info"
//                 >
//                   <p>{_a?.user?.userName}</p>
//                   <span>
//                     <LastSeen date={_a?.createdAt} />
//                   </span>
//                 </div>
//               </div>
//               <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Post;

import { Avatar, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import ReactHtmlParser from "html-react-parser";
import ReactTimeAgo from "react-time-ago";
import "./css/Post.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showAnswers, setShowAnswers] = useState(false); // Ensure this is defined
  const [likes, setLikes] = useState(
    post?.allAnswers?.map(() => ({ count: 0, liked: false })) || []
  );

  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index].liked = !newLikes[index].liked;
    newLikes[index].count += newLikes[index].liked ? 1 : -1;
    setLikes(newLikes);
  };

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added successfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={post?.user?.photo} />
        <h4>{post?.user?.userName}</h4>
        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={<CloseIcon />}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{ overlay: { height: "auto" } }}
          >
            <div className="modal__question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">{post?.user?.userName}</span> on{" "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal__button">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>

      <button
        onClick={() => setShowAnswers(!showAnswers)}
        className="toggle-answers-btn"
        style={{
          backgroundColor: "lightgray",
          padding: "5px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>

      {showAnswers && (
        <div className="post__answer" style={{ margin: "5px 0px" }}>
          {post?.allAnswers?.map((_a, index) => (
            <div
              key={_a._id}
              className="post-answer-container"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
            >
              <div className="post-answered" style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={_a?.user?.photo} />
                <div className="post-info" style={{ margin: "0px 10px" }}>
                  <p>{_a?.user?.userName}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
              <div className="like-section" style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => toggleLike(index)}>
                  {likes[index]?.liked ? (
                    <Favorite style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
                <span>{likes[index]?.count}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
