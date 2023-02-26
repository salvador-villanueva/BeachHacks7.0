import React from 'react'
import { Link } from 'react-router-dom'

function Survey() {
  return (
    <div>
    
        <h1 style={{textAlign: "center"}}> Let your professor know  <br></br> how lecture was today</h1>
        <b style={{textAlign: "center"}}> 1. How was class over overall?</b>
        <br></br>
        <input type="text" />
        <br></br>
        <b style={{textAlign: "center"}}> 2. What did you find helpful/ contributed to your learning?</b>
        <br></br>
        <input type="text" />
        <br></br>
        <b style={{textAlign: "center"}}> 3. Rate how well you understood todays material?</b>
        <br></br>
        <input type="text" />
        <br></br>
        <b style={{textAlign: "center"}}> 4. what was an area you found diffult and would like to improve on</b>
        <br></br>
        <input type="text" />
        <br></br>
        <b style={{textAlign: "center"}}> 5. How would you like to recieve support? ie. resources, tutorials etc.</b>
        <br></br>
        <input type="text" />
        <br></br>
        <Link to="/Submitted"><button>Submit </button></Link>

    </div>
  )
}

export default Survey