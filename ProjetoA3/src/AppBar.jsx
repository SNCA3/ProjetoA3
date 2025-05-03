import { FaBookBookmark } from "react-icons/fa6";

function AppBar() {
    return (
      
      <header style={{ backgroundColor: '#6495ed',
         color: 'white',
         justifyContent: "space-between",
        
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        
           }}>
            <FaBookBookmark style={{ fontSize: '24px', marginLeft: '8px' }}/>
            
        <h1 style={{color: "black", fontSize: '24px',}}>SNC</h1>
        <span style={{ fontSize: '24px', marginRight: '8px' }}></span>
      </header>
    );
  }
  
  export default AppBar;