import React, { useState } from "react";
import Box from "./Box";
import "./Boxlist.css"
import NewBoxForm from "./NewBoxForm";

const Boxlist = () => {
    const [boxArr, setBoxArr] = useState([]);

    const addBox = newBox => {
        setBoxArr(boxes => [...boxes, newBox]);
    }

    const deleteBox = id => {
        setBoxArr(boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxArr.map(box => (
        <Box 
            key = {box.id}
            id = {box.id}
            height = {parseFloat(box.height)}
            width = {parseFloat(box.width)}
            backgroundColor = {box.backgroundColor}
            handleRemove = {deleteBox}
        />
    ))

    return(
        <div>
            <NewBoxForm createBox = {addBox}/>
            {boxComponents}
        </div>
    )
}

export default Boxlist