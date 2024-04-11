import React from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
    const name = "Krutisha";
    const age = 22;
  
    return (
      <div>
        <h2>Parent Component</h2>
        <ChildComponent name={name} age={age} />
      </div>
    );
  };
  
  export default ParentComponent;