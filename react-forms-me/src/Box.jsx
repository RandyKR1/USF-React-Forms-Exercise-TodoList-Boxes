import React from "react";

function Box({
  id,
  handleRemove,
  width = 100,
  height = 100,
  backgroundColor = "lightorange"
}) {
  const remove = () => handleRemove(id);


  return (
    <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center'
        }}>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor,
          border: 'solid white 5px',
          borderRadius: '25%'
        }}
      />
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
}

export default Box;
