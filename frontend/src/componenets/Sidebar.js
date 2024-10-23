import React from 'react'
import './css/Sidebar.css'
import SidebarOptions from './SidebarOptions'
import { dividerClasses } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarOptions />
    </div>

    // <div></div>
  )
}

export default Sidebar

// import React from 'react';
// import Sidebar from './Sidebar'; // Adjust the import path accordingly

// const App = () => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <div className="main-content">
//         {/* Other components like main content or questions */}
//       </div>
//     </div>
//   );
// };

// export default App;
