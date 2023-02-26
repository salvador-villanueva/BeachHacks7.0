import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
        <h1 style={{textAlign: "center"}}> Welcome to <br></br> RateMyLecture</h1>
        <div style={{
            width:"100%", display:"flex", 
            flexDirection:"column", 
            justifyContent:"center",
            alignItems:"center"}}>
            <Link to="/Schedule"><button>
                SSO</button></Link>
                <Link to="/Schedule"><button>
                Gmail</button></Link>
                <Link to="/Schedule"><button>
                Email</button></Link>
        </div>
    </div>
  )
}
