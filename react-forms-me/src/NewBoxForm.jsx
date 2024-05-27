import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewBoxForm.css"

const NewBoxForm = ({createBox}) => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const inputData = (e) => {
        e.preventDefault();
        createBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE)
    } 


return (
    <div className="form">
      <form onSubmit={inputData}>
        <div>
          <label htmlFor="height">Height</label>
          <br/>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <br/>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label> 
          <br/>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
