import React from 'react';
import { Link } from 'react-router-dom'

export default function SelectClasses() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}> Select a class<br></br> to give feedback</h1>
            <div style={{
                width:"100%", display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center"}}>
                <Link to="/Survey"><button>CS113: Programming in Java</button></Link>
                <Link to="/Survey"><button>CECS323: Fundamental of Databases</button></Link>
                <Link to="/Survey"><button>CECS328: Algorithms</button></Link>
                <Link to="/Survey"><button>CS329: Computer Science Theory</button></Link>
            </div>
        </div>
    )
}