import React, { useState } from "react";
import "./item.css";


const Item = ({ item}) => {
  const [checkItem,setCheckItem]=useState(false);
  let Demo=[];
  const checkHandel=(e)=>{
    if(e.target.checked){
      Demo.push({"id":item.id,"image":item.image});  
    }
    setCheckItem(current=>!current);
  }

  console.log("Demo",Demo);
  return (
    <>
      <div className="cardcontainer">
        <div className="cardcoverimg">
          <div className="checki">
            <input type="checkbox"  className="check" onChange={checkHandel} value={checkItem}/>
          </div>
          <img src={item.image} alt="" />
        </div>
        <div className="cardprofileimg">
          <img src={item.image} alt="" />
        </div>
        <div className="carddetails">
          <h2>{item.title}</h2>
          <span>{item.class}</span>
        </div>
        <div className="cardbutton">
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Item;
