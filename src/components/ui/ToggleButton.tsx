
import React, { useState } from 'react';

export interface ToggleButtonProps {
    action: (state: Boolean)=>void
    initialState?: Boolean;
}

const ToggleButton = ({action, initialState}:ToggleButtonProps) => {
  const [isOn, setIsOn] = useState(initialState || false); 

  const handleToggle = () => {
    setIsOn(!isOn);
    action(isOn);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: isOn ? 'green' : 'red',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isOn ? 'ON' : 'OFF'} 
    </button>
  );
};

export default ToggleButton;