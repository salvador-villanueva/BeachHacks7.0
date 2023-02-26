import React from 'react';
import { Link } from 'react-router-dom'

function Submitted() {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Thank you for your submission!</h1>
        <h3 style={{textAlign: "center"}}>
            Your feedback is anonymous and will be sent to your professor for attendance.
        </h3>
        <br></br>
        <div style={{
                width:"100%", display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center"}}>
        <Link to="/"><button>Home </button></Link>
        </div>

    </div>
    
    
    
  )
}

export default Submitted