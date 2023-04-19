import React, { useState } from "react";
import "./itemList.css";
import Item from "../Item/Item";
import { carsData } from "../../CarsData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ItemList = () => {
  const [page, setPage] = useState([]);

 
  const handelChange = () => {
    setPage(
      carsData?.filter((ele) => Math.floor(Math.random() * carsData.length < 4))
    );
    console.log(page);
  };

  return (
    <>
      {page.length === 0 ? (
        <div className="itemlist">
          {carsData.slice(0, 4).map((ele, index) => {
            return <Item key={index} item={ele} />;
          })}
        </div>
      ) : (
        <div className="itemlist">
          {page?.map((ele, index) => {
            return <Item key={index} item={ele}/>;
          })}
        </div>
      )}
      <div className="addbtn">
        <button>Add to List</button>
      </div>
      <div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination
              count={100}
              color="primary"
              shape="rounded"
              onChange={handelChange}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default ItemList;
