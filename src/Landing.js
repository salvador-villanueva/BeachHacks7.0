import React from 'react'

export default function Landing() {
  return (
    <div>
        <h1 style={{textAlign: "center"}}> Welcome to <br></br> RateMyLecture</h1>
        <div style={{
            width:"100%", display:"flex", 
            flexDirection:"column", 
            justifyContent:"center",
            alignItems:"center"}}>
            <button style={{textAlign: "center"}}>
                SSO</button>
            <button>Gmail</button>
            <button>AppleID</button>
        </div>
    </div>
  )
}
