import React from 'react';
  
function button1(){
    alert("1st button clicked...");
}

function button2(){
    alert("2nd button clicked...");
}

function button3(){
    alert("3rd button clicked...");
}

function button4(){
    alert("4th button clicked...");
}

const select = () => {
  return (
    <div>
      <h1>SELECT PAGE UNDER CONSTRUCTION...</h1>
      <button onClick={button1}>
        Button
      </button>
      <button onClick={button2}>
        Button
      </button>
      <button onClick={button3}>
        Button
      </button>
      <button onClick={button4}>
        Button
      </button>
    </div>
  );
};
  
export default select;