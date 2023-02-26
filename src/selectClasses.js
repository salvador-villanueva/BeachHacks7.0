import React from 'react';

export default function SelectClasses() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}> Select a class<br></br> to give feedback</h1>
            <div style={{
                width:"100%", display:"flex", 
                flexDirection:"column", 
                justifyContent:"center",
                alignItems:"center"}}>
                <button style={{textAlign: "center"}}>CS113: Programming in Java</button>
                <button>CECS323: Fundamental of Databases</button>
                <button>CECS328: Algorithms </button>
                <button>CS329: Theory</button>
            </div>
        </div>
    )
}