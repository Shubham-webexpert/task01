import React from "react";
import ItemList from "../../ItemList/ItemList";
import { Checkbox, styled } from "@mui/material";
import { carsData } from "../../../CarsData";

const ImgFun = () => {
    const InputCheck=styled(Checkbox)`
        position:absolute;
        z-index:2;
        color:#fff;
    `
  return (
    <>
      <div className="main">
      {
        carsData.slice(0,10).map((ele,index)=>{
            return(
                <div className="imgcontainer" key={index}>
    
            <InputCheck />
          <img
            src={ele.image}
            alt="Mazda MX-5"
          />
        </div>

            )
        })
      }
        
      </div>
    </>
  );
};

export default ImgFun;
