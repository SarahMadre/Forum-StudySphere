// import React from 'react'
// import './css/SidebarOptions.css'

// function SidebarOptions() {
//   return (
//     <div className='sidebarOptions'>
//         <div className='sidebarOption'>
//             <img src="https://i.pinimg.com/736x/8e/23/1e/8e231e0aa5c7acb23e299ae2f4889fbe.jpg" alt="" />
//             <p>Programming Languages</p>
//         </div>

//         <div className='sidebarOption'>
//             <img src="https://3cthinkers.com/wp-content/uploads/2017/03/dynamicpages.jpeg" alt="" />
//             <p>Web Development</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudy5JsLcr-5GEPJvVMy5K9-QvBE9PDKYJ_Q&s" alt="" />
//             <p>Mobile App Development</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi881NipwxtrNxvYhLnHOutbFMjGYpIUVpZQ&s" alt="" />
//             <p>Game Development</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://media.licdn.com/dms/image/D4D12AQFkSIBgwiLqxw/article-cover_image-shrink_600_2000/0/1690740146217?e=2147483647&v=beta&t=tWgvHxzJ8_xPkGNyGN4qM_lF_fTvQ77pkhsy2zxwDeA" alt="" />
//             <p>AI and Machine Learning</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://img.freepik.com/free-vector/flat-computer-logo-template_23-2149008085.jpg" alt="" />
//             <p>Cybersecurity</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://www.shutterstock.com/image-vector/technology-vector-logo-template-corporate-260nw-516240520.jpg" alt="" />
//             <p>Tech Careers</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://t4.ftcdn.net/jpg/02/14/21/95/360_F_214219533_Menq9ciAubWU5ShUkYq7VQGtXELJgmHt.jpg" alt="" />
//             <p>Cloud Computing</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://img.freepik.com/premium-vector/data-science-logo-template_567288-95.jpg" alt="" />
//             <p>Data Science</p>
//         </div>
       
//         <div className='sidebarOption'>
//             <img src="https://cdn4.vectorstock.com/i/1000x1000/88/33/open-source-software-icon-vector-31558833.jpg" alt="" />
//             <p>Open Source Projects</p>
//         </div>

//         <div className='sidebarOption'>
//             <img src="https://static.thenounproject.com/png/961411-200.png" alt="" />
//             <p>Discover Spaces</p>
//         </div>  
//     </div>
//   )
// }


// export default SidebarOptions

import React from 'react';
import './css/SidebarOptions.css';

function SidebarOptions() {
  const options = [
    // {
    //   imgSrc: "https://i.pinimg.com/736x/8e/23/1e/8e231e0aa5c7acb23e299ae2f4889fbe.jpg",
    //   label: "Programming Languages",
    // },
    // {
    //   imgSrc: "https://3cthinkers.com/wp-content/uploads/2017/03/dynamicpages.jpeg",
    //   label: "Web Development",
    // },
    // ...other options
  ];

  return (
    <div className='sidebarOptions'>
      {options.map((option, index) => (
        <div className='sidebarOption' key={index}>
          <img src={option.imgSrc} alt={option.label} />
          <p>{option.label}</p>
        </div>
      ))}
    </div>
  );
}

export default SidebarOptions;

