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
      <button1 onClick={button1}>
        Button
      </button1>
      <button2 onClick={button2}>
        Button
      </button2>
      <button3 onClick={button3}>
        Button
      </button3>
      <button4 onClick={button4}>
        Button
      </button4>
    </div>
  );
};
  
export default select;